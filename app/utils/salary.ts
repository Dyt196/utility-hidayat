import { RATES } from './my-rates.ts'
import { bandTax } from './tax.ts'

export type SalaryResult = { error: 'invalid' | 'range' } | {
  epf: number, socso: number, eis: number, pcb: number, net: number, employerEpf: number
}

/**
 * Estimate only. PCB annualises the salary, applies the RM9,000 individual relief and EPF relief,
 * and ignores spouse/child reliefs, bonuses and the TP1 form. SOCSO uses the % approximation.
 */
export function takeHome(gross: number, epfPct: number): SalaryResult {
  const p = RATES.payroll
  if (!(gross > 0)) return { error: 'invalid' }
  if (gross > 1_000_000) return { error: 'range' }
  const insurable = Math.min(gross, p.wageCeiling)
  const epf = (gross * epfPct) / 100
  const socso = (insurable * p.socsoEmployee) / 100
  const eis = (insurable * p.eisEmployee) / 100
  const employerEpf = (gross * (gross <= p.epfEmployerThreshold ? p.epfEmployerLow : p.epfEmployerHigh)) / 100

  const chargeable = Math.max(0, gross * 12 - RATES.tax.individualRelief - Math.min(epf * 12, RATES.tax.epfReliefCap))
  const { tax } = bandTax(chargeable)
  const annual = chargeable <= RATES.tax.rebateLimit ? Math.max(0, tax - RATES.tax.rebate) : tax
  const pcb = annual / 12
  return { epf, socso, eis, pcb, net: gross - epf - socso - eis - pcb, employerEpf }
}
