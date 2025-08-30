import { loginHTML } from "../views/loginView.js";
import { adminHTML } from "../views/adminView.js";

export async function loginAdmin(request, env) {
  const formData = await request.formData();
  const usuario = formData.get("usuario");
  const senha = formData.get("senha");

  const ADMIN_USER = env.ADMIN_USER;
  const ADMIN_PASS = env.ADMIN_PASS;

  if (usuario === ADMIN_USER && senha === ADMIN_PASS) {
    const { results } = await env.DB.prepare("SELECT * FROM acessos").all();
    const tableRows = results.map(r =>
      `<tr><td>${r.id}</td><td>${r.ip}</td><td>${r.userAgent}</td><td>${r.language}</td><td>${r.date}</td></tr>`
    ).join("");

    return new Response(adminHTML(tableRows), { headers: { "Content-Type": "text/html" }});
  } else {
    return new Response(loginHTML("Usuário ou senha incorretos"), { headers: { "Content-Type": "text/html" }});
  }
}