/**
 * Límite de peticiones por clave (ventana deslizante) en memoria del proceso.
 * En serverless cada instancia lleva su propio contador, así que es un freno básico
 * contra abusos, no una garantía exacta.
 */
const hits = new Map<string, number[]>();

export function allowRequest(key: string, limit: number, windowMs: number, now = Date.now()): boolean {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= limit) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);

  // Limpieza ocasional para que el mapa no crezca sin fin.
  if (hits.size > 5_000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= windowMs)) hits.delete(k);
    }
  }
  return true;
}
