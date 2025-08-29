import { homeHTML, publicoHTML, adminHTML, loginHTML } from "./corpo.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    
    if (url.pathname === "/") {
      return new Response(homeHTML(), { headers: { "Content-Type": "text/html" }});
    } 
    
    
    else if (url.pathname === "/publico") {
      const fingerprint = {
        ip: request.headers.get("CF-Connecting-IP"),
        userAgent: request.headers.get("User-Agent"),
        language: request.headers.get("Accept-Language"),
        date: new Date().toISOString()
      };

      await env.DB.prepare(
        "INSERT INTO acessos (ip, userAgent, language, date) VALUES (?, ?, ?, ?)"
      ).bind(fingerprint.ip, fingerprint.userAgent, fingerprint.language, fingerprint.date)
       .run();

      return new Response(publicoHTML(fingerprint), { headers: { "Content-Type": "text/html" }});
    } 
    
   
    else if (url.pathname === "/admin") {
      if (request.method === "GET") {
       
        return new Response(loginHTML(), { headers: { "Content-Type": "text/html" }});
      }

      if (request.method === "POST") {
        const formData = await request.formData();
        const usuario = formData.get("usuario");
        const senha = formData.get("senha");

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
    
    else {
      return new Response("Rota não encontrada", { status: 404 });
    }
  }
};
