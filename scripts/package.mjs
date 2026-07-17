import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

const staticFiles = (await walk(dist)).filter(file => !file.includes(`${path.sep}server${path.sep}`));
const assets = {};
for (const file of staticFiles) {
  const rel = "/" + path.relative(dist, file).split(path.sep).join("/");
  assets[rel] = (await fs.readFile(file)).toString("base64");
}

const worker = `
const assets = ${JSON.stringify(assets)};
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.mp4':'video/mp4','.woff2':'font/woff2'};
function decode(value){const raw=atob(value);const out=new Uint8Array(raw.length);for(let i=0;i<raw.length;i++)out[i]=raw.charCodeAt(i);return out;}
export default {async fetch(request){const url=new URL(request.url);let key=url.pathname;if(!assets[key])key='/index.html';const ext=key.includes('.')?key.slice(key.lastIndexOf('.')):'.html';return new Response(decode(assets[key]),{headers:{'content-type':types[ext]||'application/octet-stream','cache-control':key==='/index.html'?'no-cache':'public, max-age=31536000, immutable'}});}};
`;

await fs.mkdir(path.join(dist, "server"), { recursive: true });
await fs.mkdir(path.join(dist, ".openai"), { recursive: true });
await fs.writeFile(path.join(dist, "server", "index.js"), worker);
await fs.copyFile(path.join(root, ".openai", "hosting.json"), path.join(dist, ".openai", "hosting.json"));
