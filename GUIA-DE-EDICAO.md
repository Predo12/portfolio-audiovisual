# Como editar o portfólio

Todo o conteúdo que muda com frequência está em `app/content.ts`.

## Informações gerais

No bloco `site`, altere:

- `name`: nome da dupla ou produtora;
- `headline` e `intro`: textos principais;
- `whatsapp`: somente números, com 55 e DDD;
- `instagram` e `email`: contatos.

## Vídeos

No bloco `projects`, cada item representa um trabalho. Cole o link direto do vídeo em `media`. Para adicionar outro, copie um item inteiro e altere os dados.

## Artes gráficas

No bloco `graphicArts`, cole o endereço da imagem no campo `image`. Para adicionar outra arte, copie um item inteiro.

## Publicar mudanças

O projeto deve ser colocado em um repositório do seu GitHub. Depois disso, os textos podem ser alterados pelo botão de editar do próprio GitHub. Para visualizar localmente: `npm install` e `npm run dev`.
