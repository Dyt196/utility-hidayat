import { toISO, type YMD } from './dates.ts'

// Umm al-Qura tables from the browser's Intl. Malaysia (JAKIM) uses moon sighting, so results can differ by a day.
const hijriFmt = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn', { year: 'numeric', month: 'numeric', day: 'numeric', timeZone: 'UTC' })
const DAY = 86_400_000

export const HIJRI_YEARS = { min: 1318, max: 1500 }
export const GREGORIAN_YEARS = { min: 1900, max: 2076 }

export function toHijri(g: YMD): YMD | null {
  if (g.y < GREGORIAN_YEARS.min || g.y > GREGORIAN_YEARS.max) return null
  const parts = hijriFmt.formatToParts(new Date(Date.UTC(g.y, g.m - 1, g.d)))
  const get = (t: string) => Number(parts.find(p => p.type === t)?.value)
  return { y: get('year'), m: get('month'), d: get('day') }
}

/** ISO date for a Hijri date, or null if it does not exist (e.g. day 30 of a 29-day month) or is out of range. */
export function fromHijri(h: YMD): string | null {
  if (h.y < HIJRI_YEARS.min || h.y > HIJRI_YEARS.max || h.m < 1 || h.m > 12 || h.d < 1 || h.d > 30) return null
  const days = (h.y - 1) * 354.36667 + (h.m - 1) * 29.530588 + (h.d - 1)
  const est = Date.UTC(622, 6, 16) + days * DAY
  for (let off = 0; off <= 45; off++) {
    for (const s of off === 0 ? [0] : [-1, 1]) {
      const ms = est + s * off * DAY
      const dt = new Date(ms)
      const g = { y: dt.getUTCFullYear(), m: dt.getUTCMonth() + 1, d: dt.getUTCDate() }
      const back = toHijri(g)
      if (back && back.y === h.y && back.m === h.m && back.d === h.d) return toISO(ms)
    }
  }
  return null
}
