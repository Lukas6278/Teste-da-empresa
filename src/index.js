import { homeHTML } from "./views/homeView.js";
import { publicoHTML } from "./views/publicView.js";
import { loginHTML } from "./views/loginView.js";
import { adminHTML } from "./views/adminView.js";
import { registroPublico } from "./controllers/publicController.js";
import { loginAdmin } from "./controllers/adminController.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Rota principal
    if (url.pathname === "/") {
      return new Response(homeHTML(), { headers: { "Content-Type": "text/html" }});
    } 
    
    // Rota pública
    else if (url.pathname === "/publico") {
      const fingerprint = {
        ip: request.headers.get("CF-Connecting-IP") || request.headers.get("X-Forwarded-For") || "0.0.0.0",
        userAgent: request.headers.get("User-Agent"),
        language: request.headers.get("Accept-Language"),
        date: new Date().toISOString()
      };

      // Salva no banco D1
      await env.DB.prepare(
        "INSERT INTO acessos (ip, userAgent, language, date) VALUES (?, ?, ?, ?)"
      ).bind(fingerprint.ip, fingerprint.userAgent, fingerprint.language, fingerprint.date)
       .run();

      return new Response(publicoHTML(fingerprint), { headers: { "Content-Type": "text/html" }});
    } 
    
    // Rota administrativa
    else if (url.pathname === "/admin") {
      if (request.method === "GET") {
        return new Response(loginHTML(), { headers: { "Content-Type": "text/html" }});
      }

      if (request.method === "POST") {
        const formData = await request.formData();
        const usuario = formData.get("usuario");
        const senha = formData.get("senha");

        // Autenticação simples
        if (usuario === "lucas" && senha === "1234") {
          const { results } = await env.DB.prepare("SELECT * FROM acessos").all();
          const tableRows = results.map(r =>
            `<tr><td>${r.id}</td><td>${r.ip}</td><td>${r.userAgent}</td><td>${r.language}</td><td>${r.date}</td></tr>`
          ).join("");

          return new Response(adminHTML(tableRows), { headers: { "Content-Type": "text/html" }});
        } else {
          return new Response(loginHTML("Usuario ou senha incorretos"), { headers: { "Content-Type": "text/html" }});
        }
      }
    } 
    
    // Rota não encontrada
    else {
      return new Response("Rota não encontrada", { status: 404 });
    }
  }
};
