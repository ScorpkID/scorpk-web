import { VSCODE_AUTH_CALLBACK } from "./vscodeAuthCallback";

export const LOGIN_TARGET_COOKIE = "scorpk_login_target";

/**
 * El CLI pasa su propio callback (http://127.0.0.1:<puerto>/callback) por
 * query string. Sin este chequeo, cualquiera podría armar un link con
 * callback=https://evil.com y robarse el código de handoff de la víctima
 * apenas se loguea — loopback-only, mismo criterio que gh/vercel CLI.
 */
export function isAllowedLocalCallback(url: string): boolean {
  try {
    const u = new URL(url);
    return u.protocol === "http:" && (u.hostname === "127.0.0.1" || u.hostname === "localhost");
  } catch {
    return false;
  }
}

/** A partir de los query params de /login, resuelve el destino final (o
 * undefined si no aplica ninguno de los dos flujos especiales). */
export function resolveLoginTarget(from: string | null, callback: string | null): string | undefined {
  if (from === "vscode") return VSCODE_AUTH_CALLBACK;
  if (from === "cli" && callback && isAllowedLocalCallback(callback)) return callback;
  return undefined;
}
