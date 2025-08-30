import { globalStyle } from "../style.js";

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