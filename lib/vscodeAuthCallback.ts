/** Tiene que coincidir con AUTH_REDIRECT_URL en src/auth/supabaseConfig.ts
 * de la extensión — VS Code enruta la URI de vuelta según el publisher.
 * Vive en su propio archivo (sin imports de Node) para que se pueda usar
 * tanto desde rutas de servidor como desde un client component. */
export const VSCODE_AUTH_CALLBACK = "vscode://ScorpkDev.scorpk-agent/auth-callback";
