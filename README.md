# Meu Worker - Cloudflare Worker + D1

Este projeto/teste é um **Cloudflare Worker** que registra acessos de usuários (fingerprint do browser) em um banco D1 e permite visualização via área administrativa com login.

## Pré-requisitos

- Conta no [Cloudflare](https://dash.cloudflare.com/)
- Node.js
- Wrangler CLI (`npm install -g wrangler`)

---

## Configuração do Banco D1

1. Crie um **D1 Database** chamado `acessos_db` no painel do Cloudflare.
2. Copie o `Database ID` e coloque no `wrangler.toml`:

toml
[[d1_databases]]
binding = "DB"
database_name = "acessos_db"
database_id = "SEU_DATABASE_ID_AQUI"

## No arquivo wrangler.toml

name = "meu-worker"
main = "src/index.js"
compatibility_date = "2024-01-01"

[[d1_databases]]
binding = "DB"
database_name = "acessos_db"
database_id = "SEU_DATABASE_ID_AQUI"

## Rodando o Worker localmente

No terminal:

wrangler dev


## Isso fará o Worker rodar em localhost. Você verá algo assim:

⛅️ wrangler 4.xx.x
Your Worker has access to the following bindings:
Binding   Resource      Mode
env.DB    acessos_db   local

## Publicando no Cloudflare
wrangler deploy
e y para subir e n para deixar localmente


## Criar a database (se ainda não existir):

wrangler d1 create acessos_db (ou qualquer nome que prefira)

Se você já recebeu A database with that name already exists, pode pular essa etapa.

## Adicionar binding no wrangler.toml (exemplo já mostrado acima):

[[d1_databases]]
binding = "DB"
database_name = "acessos_db"

## Criar a tabela acessos (use o painel Cloudflare D1 SQL editor ou execute o SQL via CLI / migrations). Exemplo de SQL:

CREATE TABLE IF NOT EXISTS acessos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip TEXT,
  userAgent TEXT,
  language TEXT,
  date TEXT
);

Você pode executar esse SQL pelo editor D1 (no dashboard Cloudflare) ou via CLI/migration — se preferir, posso te orientar com o comando exato para CLI.