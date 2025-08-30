var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-4pWuVl/checked-fetch.js
var urls = /* @__PURE__ */ new Set();
function checkURL(request, init) {
  const url = request instanceof URL ? request : new URL(
    (typeof request === "string" ? new Request(request, init) : request).url
  );
  if (url.port && url.port !== "443" && url.protocol === "https:") {
    if (!urls.has(url.toString())) {
      urls.add(url.toString());
      console.warn(
        `WARNING: known issue with \`fetch()\` requests to custom HTTPS ports in published Workers:
 - ${url.toString()} - the custom port will be ignored when the Worker is published using the \`wrangler deploy\` command.
`
      );
    }
  }
}
__name(checkURL, "checkURL");
globalThis.fetch = new Proxy(globalThis.fetch, {
  apply(target, thisArg, argArray) {
    const [request, init] = argArray;
    checkURL(request, init);
    return Reflect.apply(target, thisArg, argArray);
  }
});

// src/style.js
var globalStyle = `
  /* ===== RESET E BASE ===== */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    background: linear-gradient(135deg, #e0f7fa, #ffffff);
    padding: 40px;
    color: #2c3e50;
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  h1, h2 {
    color: #00796b;
    font-weight: 700;
    margin-bottom: 20px;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 16px;
    margin: 15px 0;
    line-height: 1.6;
    color: #555;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    background: #00796b;
    padding: 12px 28px;
    border-radius: 10px;
    transition: all 0.3s ease;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  a:hover {
    background: #004d40;
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  /* ===== TABELAS ===== */
  table {
    width: 90%;
    margin: 30px auto;
    border-collapse: collapse;
    border-radius: 12px;
    overflow: hidden;
    background-color: #ffffff;
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    font-size: 14px;
  }

  th, td {
    padding: 16px;
    border-bottom: 1px solid #e0e0e0;
    text-align: left;
    transition: background 0.3s ease;
  }

  th {
    background-color: #00796b;
    color: #fff;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  tr:nth-child(even) {
    background-color: #f1f8f8;
  }

  tr:hover {
    background-color: #c8e6c9;
  }

  /* ===== PRE FORMATADO ===== */
  pre {
    background-color: #fdfdfd;
    padding: 20px;
    border-radius: 12px;
    text-align: left;
    max-width: 90%;
    overflow-x: auto;
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
    font-family: 'Fira Code', monospace;
  }

  /* ===== LOGIN PAGE ===== */
  .login-box {
    background: #ffffff;
    padding: 3rem 2.5rem;
    border-radius: 16px;
    box-shadow: 0 12px 28px rgba(0,0,0,0.12);
    width: 380px;
    text-align: center;
    margin: 8% auto;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .login-box:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }

  .login-box h2 {
    margin-bottom: 2rem;
    color: #00796b;
    font-size: 1.8rem;
  }

  .login-box input {
    width: 100%;
    padding: 0.9rem;
    margin: 0.6rem 0;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 15px;
    transition: all 0.3s ease;
  }

  .login-box input:focus {
    outline: none;
    border-color: #00796b;
    box-shadow: 0 0 8px rgba(0,121,107,0.25);
    background-color: #f0f9f9;
  }

  .login-box button {
    background: #00796b;
    color: #fff;
    border: none;
    padding: 0.9rem;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    font-weight: 700;
    font-size: 15px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .login-box button:hover {
    background: #004d40;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  }

  .error {
    color: #d32f2f;
    margin-bottom: 1rem;
    font-weight: 600;
    background-color: #ffebee;
    padding: 10px 14px;
    border-radius: 8px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
  }

  /* ===== RESPONSIVIDADE ===== */
  @media (max-width: 480px) {
    .login-box {
      width: 90%;
      padding: 2rem;
    }

    table {
      width: 100%;
      font-size: 13px;
    }

    h1, h2 {
      font-size: 1.4rem;
    }

    .login-box h2 {
      font-size: 1.6rem;
    }
  }
`;

// src/views/homeView.js
function homeHTML() {
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
__name(homeHTML, "homeHTML");

// src/views/publicView.js
function publicoHTML(fingerprint) {
  return `
    <html>
      <head>
        <title>Acesso Registrado</title>
        <style>${globalStyle}</style>
      </head>
      <body>
        <h2>Acesso registrado!</h2>
        <p>IP: ${fingerprint.ip || "N\xE3o dispon\xEDvel"}</p>
        <p>Navegador: ${fingerprint.userAgent}</p>
        <p>Idioma: ${fingerprint.language}</p>
        <p>Data: ${new Date(fingerprint.date).toLocaleString("pt-BR")}</p>
        <p><a href="/">Voltar</a></p>
      </body>
    </html>
  `;
}
__name(publicoHTML, "publicoHTML");

// src/views/loginView.js
function loginHTML(errorMessage = "") {
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
__name(loginHTML, "loginHTML");

// src/views/adminView.js
function adminHTML(tableRows) {
  return `
    <html>
      <head>
        <title>Admin - Acessos</title>
        <style>${globalStyle}</style>
      </head>
      <body>
        <h1>Registros de Acesso</h1>
        <table>
          <tr><th>ID</th><th>IP</th><th>Usu\xE1rio</th><th>Idioma</th><th>Data</th></tr>
          ${tableRows}
        </table>
        <p><a href="/">Voltar</a></p>
      </body>
    </html>
  `;
}
__name(adminHTML, "adminHTML");

// src/index.js
var src_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response(homeHTML(), { headers: { "Content-Type": "text/html" } });
    } else if (url.pathname === "/publico") {
      const fingerprint = {
        ip: request.headers.get("CF-Connecting-IP") || request.headers.get("X-Forwarded-For") || "0.0.0.0",
        userAgent: request.headers.get("User-Agent"),
        language: request.headers.get("Accept-Language"),
        date: (/* @__PURE__ */ new Date()).toISOString()
      };
      await env.DB.prepare(
        "INSERT INTO acessos (ip, userAgent, language, date) VALUES (?, ?, ?, ?)"
      ).bind(fingerprint.ip, fingerprint.userAgent, fingerprint.language, fingerprint.date).run();
      return new Response(publicoHTML(fingerprint), { headers: { "Content-Type": "text/html" } });
    } else if (url.pathname === "/admin") {
      if (request.method === "GET") {
        return new Response(loginHTML(), { headers: { "Content-Type": "text/html" } });
      }
      if (request.method === "POST") {
        const formData = await request.formData();
        const usuario = formData.get("usuario");
        const senha = formData.get("senha");
        if (usuario === "lucas" && senha === "1234") {
          const { results } = await env.DB.prepare("SELECT * FROM acessos").all();
          const tableRows = results.map(
            (r) => `<tr><td>${r.id}</td><td>${r.ip}</td><td>${r.userAgent}</td><td>${r.language}</td><td>${r.date}</td></tr>`
          ).join("");
          return new Response(adminHTML(tableRows), { headers: { "Content-Type": "text/html" } });
        } else {
          return new Response(loginHTML("Usuario ou senha incorretos"), { headers: { "Content-Type": "text/html" } });
        }
      }
    } else {
      return new Response("Rota n\xE3o encontrada", { status: 404 });
    }
  }
};

// ../../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-4pWuVl/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// ../../../../AppData/Roaming/npm/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-4pWuVl/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
