import { RATES } from './my-rates.ts'

export type ZakatResult = { error: 'amount' | 'goldPrice' } | { nisab: number, base: number, due: boolean, zakat: number }

/** base = amount liable to zakat in RM (income after deductions, savings, or gold weight × price). */
export function calcZakat(base: number, goldPricePerGram: number): ZakatResult {
  if (!(goldPricePerGram > 0)) return { error: 'goldPrice' }
  if (base < 0) return { error: 'amount' }
  const nisab = RATES.zakat.nisabGoldGrams * goldPricePerGram
  const due = base >= nisab
  return { nisab, base, due, zakat: due ? (base * RATES.zakat.rate) / 100 : 0 }
}
