export type LoanType = 'reducing' | 'flat'
export type LoanResult = { monthly: number, total: number, interest: number } | { error: 'amount' | 'rate' | 'term' }

/**
 * reducing: standard amortisation (interest on the outstanding balance), e.g. home loans.
 * flat: interest on the full original amount for the whole term, e.g. many Malaysian car loans.
 */
export function calcLoan(type: LoanType, principal: number, annualRatePct: number, years: number): LoanResult {
  if (!(principal > 0)) return { error: 'amount' }
  if (!(annualRatePct >= 0 && annualRatePct <= 100)) return { error: 'rate' }
  const n = Math.round(years * 12)
  if (!(years >= 0.1 && years <= 50) || n < 1) return { error: 'term' }

  if (type === 'flat') {
    const interest = principal * (annualRatePct / 100) * (n / 12)
    return { monthly: (principal + interest) / n, total: principal + interest, interest }
  }
  const r = annualRatePct / 1200
  const monthly = r === 0 ? principal / n : (principal * r) / (1 - (1 + r) ** -n)
  return { monthly, total: monthly * n, interest: monthly * n - principal }
}
