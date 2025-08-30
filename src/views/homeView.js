import { globalStyle } from "../style.js";

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
