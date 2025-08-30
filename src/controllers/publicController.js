import { publicoHTML } from "../views/publicView.js";

export async function registroPublico(request, env) {
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