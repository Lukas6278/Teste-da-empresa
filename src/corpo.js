import { globalStyle } from "./style.js";

export function homeHTML() {
  return `
    <html>
      <head>
        <title>Cloudflare Worker</title>
        <style>${globalStyle}</style>
      </head>
      <body>
        <h1>Crie ou acesse sua conta</h1>
        <p><a href="/publico">Registrar acesso</a></p>
        <p><a href="/admin">Area Administrador</a></p>
      </body>
    </html>
  `;
}

export function publicoHTML(fingerprint) {
  return `
    <html>
      <head>
        <title>Acesso Registrado</title>
        <style>${globalStyle}</style>
      </head>
      <body>
        <h2>Acesso registrado!</h2>
        <p>IP: ${fingerprint.ip || "Não disponível"}</p>
        <p>Navegador: ${fingerprint.userAgent}</p>
        <p>Idioma: ${fingerprint.language}</p>
        <p>Data: ${new Date(fingerprint.date).toLocaleString('pt-BR')}</p>
        <p><a href="/">Voltar</a></p>
      </body>
    </html>
  `;
}

export function loginHTML(errorMessage = "") {
  return `
    <html>
      <head>
        <title>Login Admin</title>
        <style>${globalStyle}</style>
      </head>
      <body>
        <div class="login-box">
          <h2>Area Administrativa</h2>
          ${errorMessage ? `<div class="error">${errorMessage}</div>` : ""}
          <form method="POST" action="/admin">
            <input type="text" name="usuario" placeholder="Usuario" required />
            <input type="password" name="senha" placeholder="Senha" required />
            <button type="submit">Entrar</button>
          </form>

        </div>
        <p><a href="/">Voltar</a></p>
      </body>
    </html>
  `;
}

export function adminHTML(tableRows) {
  return `
    <html>
      <head>
        <title>Admin - Acessos</title>
        <style>${globalStyle}</style>
      </head>
      <body>
        <h1>Registros de Acesso</h1>
        <table>
          <tr><th>ID</th><th>IP</th><th>Usuário</th><th>Idioma</th><th>Data</th></tr>
          ${tableRows}
        </table>
        <p><a href="/">Voltar</a></p>
      </body>
    </html>
  `;
}
