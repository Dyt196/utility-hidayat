/** Parse a form string to a finite number, or null when empty/invalid. */
export function parseNum(s: string | number | null | undefined): number | null {
  if (s === null || s === undefined || String(s).trim() === '') return null
  const n = Number(s)
  return Number.isFinite(n) ? n : null
}

/** Locale-aware display with float noise trimmed (0.1*3 -> 0.3). */
export function fmt(n: number, locale: string, digits = 10): string {
  return new Intl.NumberFormat(locale, { maximumSignificantDigits: digits }).format(n)
}

export function fmtRM(n: number, locale: string): string {
  return new Intl.NumberFormat(locale, { style: 'currency', currency: 'MYR', currencyDisplay: 'narrowSymbol' }).format(n)
}
