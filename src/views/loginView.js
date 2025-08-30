import { globalStyle } from "../style.js";

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
