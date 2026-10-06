import { RATES } from './my-rates.ts'

export interface BandAmount { from: number, to: number, rate: number, taxable: number, tax: number }

/** Progressive tax on chargeable income, with a per-band breakdown (bands with no income are omitted). */
export function bandTax(chargeable: number) {
  const bands: BandAmount[] = []
  let from = 0
  let tax = 0
  for (const b of RATES.tax.bands) {
    const taxable = Math.max(0, Math.min(chargeable, b.upTo) - from)
    if (taxable > 0) {
      const t = (taxable * b.rate) / 100
      bands.push({ from, to: b.upTo, rate: b.rate, taxable, tax: t })
      tax += t
    }
    from = b.upTo
  }
  return { tax, bands }
}

export type TaxResult = { error: 'income' | 'negative' } | {
  chargeable: number, taxBeforeRebate: number, rebate: number, zakat: number, payable: number, effective: number, bands: BandAmount[]
}

/** income, otherReliefs and zakatPaid are annual RM. The RM9,000 individual relief is always applied. */
export function incomeTax(income: number, otherReliefs: number, zakatPaid: number): TaxResult {
  if (income < 0) return { error: 'income' }
  if (otherReliefs < 0 || zakatPaid < 0) return { error: 'negative' }
  const chargeable = Math.max(0, income - RATES.tax.individualRelief - otherReliefs)
  const { tax, bands } = bandTax(chargeable)
  const rebate = chargeable <= RATES.tax.rebateLimit ? Math.min(RATES.tax.rebate, tax) : 0
  const afterRebate = tax - rebate
  const zakat = Math.min(zakatPaid, afterRebate) // zakat is a ringgit-for-ringgit offset, never below zero
  const payable = afterRebate - zakat
  return { chargeable, taxBeforeRebate: tax, rebate, zakat, payable, effective: income > 0 ? (payable / income) * 100 : 0, bands }
}
