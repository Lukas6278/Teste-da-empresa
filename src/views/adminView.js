import { globalStyle } from "../style.js";

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
