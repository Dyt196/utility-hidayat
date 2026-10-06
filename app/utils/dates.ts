const DAY = 86_400_000

export interface YMD { y: number, m: number, d: number }

/** Parse a strict YYYY-MM-DD string (what <input type="date"> emits). Null if malformed or impossible. */
export function parseISO(s: string): YMD | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s)
  if (!m) return null
  const [y, mo, d] = [Number(m[1]), Number(m[2]), Number(m[3])]
  if (y < 1000) return null // Date.UTC maps years 0-99 to 1900-1999
  const t = new Date(Date.UTC(y, mo - 1, d))
  return t.getUTCFullYear() === y && t.getUTCMonth() === mo - 1 && t.getUTCDate() === d ? { y, m: mo, d } : null
}

const utc = (x: YMD) => Date.UTC(x.y, x.m - 1, x.d)

export function toISO(ms: number): string {
  return new Date(ms).toISOString().slice(0, 10)
}

export function todayYMD(now = new Date()): YMD {
  return { y: now.getFullYear(), m: now.getMonth() + 1, d: now.getDate() }
}

/** Signed whole days from a to b. */
export function daysBetween(a: YMD, b: YMD): number {
  return Math.round((utc(b) - utc(a)) / DAY)
}

export function addDays(a: YMD, n: number): string {
  return toISO(utc(a) + n * DAY)
}

export function weekdayName(iso: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, { weekday: 'long', timeZone: 'UTC' }).format(new Date(iso))
}

export function longDate(iso: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(iso))
}

/** Age in years/months/days as of `today`, plus totals and days until the next birthday. Null if dob is after today. */
export function calcAge(dob: YMD, today: YMD) {
  const total = daysBetween(dob, today)
  if (total < 0) return null

  let years = today.y - dob.y
  let months = today.m - dob.m
  let days = today.d - dob.d
  if (days < 0) {
    months -= 1
    days += new Date(Date.UTC(today.y, today.m - 1, 0)).getUTCDate() // length of the month before `today`
  }
  if (months < 0) {
    years -= 1
    months += 12
  }

  // Feb 29 birthdays fall back to Mar 1 in non-leap years (Date.UTC overflow).
  let next = Date.UTC(today.y, dob.m - 1, dob.d)
  if (next < utc(today)) next = Date.UTC(today.y + 1, dob.m - 1, dob.d)
  const nextBirthdayDays = Math.round((next - utc(today)) / DAY)

  return { years, months, days, totalDays: total, totalWeeks: Math.floor(total / 7), totalMonths: years * 12 + months, nextBirthdayDays }
}
