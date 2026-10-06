export function formatUuid(uuid: string, upper: boolean, hyphens: boolean): string {
  const s = hyphens ? uuid : uuid.replaceAll('-', '')
  return upper ? s.toUpperCase() : s
}
