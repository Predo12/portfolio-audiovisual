"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUpRight, Camera, Mail, Menu, Play, X } from "lucide-react";
import { graphicArts, projects, site, type Project } from "./content";

const filters = ["Todos", "Gastronomia", "Imobiliário", "Saúde", "Design", "Eventos"];

function ProjectModal({ project, close }: { project: Project; close: () => void }) {
  return <div className="modal" role="dialog" aria-modal="true" onClick={close}>
    <div className="modal-card" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={close} aria-label="Fechar"><X size={21}/></button>
      <div className={`modal-media ${project.orientation === "portrait" ? "is-portrait" : "is-landscape"}`} style={{ background: project.cover }}>
        {project.media && project.format === "video" ? <video src={project.media} poster={project.poster} controls autoPlay playsInline /> :
          project.media && project.format === "image" ? <img src={project.media} alt={project.title}/> :
          <div className="empty-media"><span>{project.format === "video" ? "COLE O LINK DO VÍDEO" : "COLE O LINK DA PEÇA"}</span><small>em app/content.ts</small></div>}
      </div>
      <div className="modal-copy"><p>{project.category} · {project.client}</p><h2>{project.title}</h2><span>{project.description}</span></div>
    </div>
  </div>
}

export default function Home() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<Project | null>(null);
  const [nav, setNav] = useState(false);
  const visible = useMemo(() => filter === "Todos" ? projects : projects.filter(p => p.category === filter), [filter]);
  const whats = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Olá! Vi o portfólio e gostaria de conversar sobre um projeto.")}`;

  return <main>
    <header className="nav-shell">
      <a className="brand" href="#inicio"><i/> {site.name}</a>
      <nav className={nav ? "nav-links open" : "nav-links"}>
        <a href="#trabalhos" onClick={() => setNav(false)}>Trabalhos</a>
        <a href="#servicos" onClick={() => setNav(false)}>Serviços</a>
        <a href="#sobre" onClick={() => setNav(false)}>Sobre</a>
        <a className="nav-cta" href={whats} target="_blank">Falar com a gente <ArrowUpRight size={15}/></a>
      </nav>
      <button className="menu" onClick={() => setNav(!nav)} aria-label="Menu">{nav ? <X/> : <Menu/>}</button>
    </header>

    <section id="inicio" className="hero section-pad">
      <div className="grain"/>
      <div className="hero-copy">
        <p className="eyebrow">{site.eyebrow}</p>
        <h1>{site.headline}</h1>
        <div className="hero-bottom"><p>{site.intro}</p><a href="#trabalhos" className="round-link"><ArrowDown/></a></div>
      </div>
      <div className="hero-reel" aria-label="Espaço para vídeo destaque">
        <div className="reel-shape one"/><div className="reel-shape two"/>
        <button onClick={() => setSelected(projects[0])}><Play fill="currentColor" size={18}/> VER REEL</button>
        <span>SHOWREEL<br/>2026</span>
      </div>
    </section>

    <section id="trabalhos" className="work section-pad">
      <div className="section-head"><p>TRABALHOS SELECIONADOS</p><h2>Imagem bonita chama atenção.<br/><em>Ideia boa segura.</em></h2></div>
      <div className="filters">{filters.map(f => <button className={filter === f ? "active" : ""} key={f} onClick={() => setFilter(f)}>{f}</button>)}</div>
      <div className="project-grid">{visible.map((p, i) => <article className={`project-card ${p.orientation === "portrait" ? "is-portrait" : "is-landscape"}`} key={p.title} onClick={() => setSelected(p)}>
        <div className="project-visual" style={{ background: p.cover }}>
          {p.media && p.format === "video" && <video className="project-preview" src={p.media} poster={p.poster} muted playsInline preload="metadata" />}
          {p.media && p.format === "image" && <img className="project-preview" src={p.media} alt="" />}
          <span className="project-index">0{i+1}</span><span className="project-tag">{p.tag}</span>
          <div className="project-play">{p.format === "video" ? <Play fill="currentColor"/> : <ArrowUpRight/>}</div>
        </div>
        <div className="project-info"><div><p>{p.client}</p><h3>{p.title}</h3></div><span>{p.category}</span></div>
      </article>)}</div>
    </section>

    <section id="artes" className="graphics section-pad">
      <div className="graphics-head">
        <p className="eyebrow">ARTES GRÁFICAS</p>
        <h2>Peças que não ficam<br/>paradas no <i>bonitinho.</i></h2>
        <p>Identidades, campanhas, carrosséis e materiais comerciais pensados para conversar com o audiovisual.</p>
      </div>
      <div className="graphics-grid">
        {graphicArts.map((art, index) => <article className="graphic-card" key={art.title}>
          <div className="graphic-image" style={{ background: art.cover }}>
            {art.image ? <img src={art.image} alt={art.title}/> : <><span>0{index + 1}</span><b>{art.type}</b><em>ADICIONE<br/>SUA ARTE</em></>}
          </div>
          <div className="graphic-info"><div><small>{art.client}</small><h3>{art.title}</h3></div><ArrowUpRight size={20}/></div>
        </article>)}
      </div>
    </section>

    <section id="servicos" className="services section-pad">
      <div className="services-intro"><p className="eyebrow">O QUE A GENTE FAZ</p><h2>Do primeiro “e se?”<br/>até o vídeo no ar.</h2></div>
      <div className="service-list">
        {[['01','Produção audiovisual','Captação, direção, roteiro e entrega para redes sociais, campanhas e eventos.'],['02','Edição & motion','Ritmo, acabamento, legendas e movimento para o conteúdo ganhar presença.'],['03','Conteúdo recorrente','Planejamento mensal, diária de captação e entregas consistentes sem engessar a marca.'],['04','Design para social','Campanhas, peças e identidades que conversam com o audiovisual.']].map(s => <div className="service" key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><ArrowUpRight/></div>)}
      </div>
    </section>

    <section id="sobre" className="about section-pad">
      <div className="about-mark">DOIS<br/>OLHARES.<br/><i>UMA</i><br/>DIREÇÃO.</div>
      <div className="about-copy"><p className="eyebrow">SOBRE NÓS</p><h2>Estratégia e sensibilidade visual trabalhando no mesmo projeto.</h2><p>Somos uma dupla criativa de Campo Grande. Unimos direção, captação, edição e design para entregar conteúdo com intenção — feito para parecer com a marca, não com todo mundo.</p><div className="stats"><div><strong>02</strong><span>criativos<br/>no projeto</span></div><div><strong>01</strong><span>processo<br/>do início ao fim</span></div><div><strong>∞</strong><span>ideias quando<br/>o café bate</span></div></div></div>
    </section>

    <section className="contact section-pad"><p className="eyebrow">TEM UM PROJETO EM MENTE?</p><h2>Vamos fazer algo<br/><i>difícil de ignorar.</i></h2><a href={whats} target="_blank">COMEÇAR UMA CONVERSA <ArrowUpRight/></a></section>
    <footer><span>{site.name} © 2026</span><div><a href={site.instagram} target="_blank"><Camera size={17}/> Instagram</a><a href={`mailto:${site.email}`}><Mail size={17}/> Email</a></div><span>Campo Grande · MS</span></footer>
    {selected && <ProjectModal project={selected} close={() => setSelected(null)}/>} 
  </main>
}
