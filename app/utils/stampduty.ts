import { RATES } from './my-rates.ts'

const up100 = (n: number) => Math.ceil(n / 100) * 100 // duty is charged per RM100 or part thereof

export function transferDuty(price: number): number {
  let from = 0
  let duty = 0
  const p = up100(price)
  for (const b of RATES.stampDuty.transfer) {
    duty += (Math.max(0, Math.min(p, b.upTo) - from) * b.rate) / 100
    from = b.upTo
  }
  return duty
}

export type StampResult = { error: 'price' | 'loan' } | { transfer: number, loan: number, total: number, exempt: boolean }

export function stampDuty(price: number, loan: number, firstHome: boolean): StampResult {
  if (!(price > 0)) return { error: 'price' }
  if (loan < 0 || loan > price) return { error: 'loan' }
  const exempt = firstHome && price <= RATES.stampDuty.firstHomeLimit
  if (exempt) return { transfer: 0, loan: 0, total: 0, exempt }
  const transfer = transferDuty(price)
  const loanDuty = (up100(loan) * RATES.stampDuty.loanRate) / 100
  return { transfer, loan: loanDuty, total: transfer + loanDuty, exempt }
}
