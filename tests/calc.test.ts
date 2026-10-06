import { test } from 'node:test'
import assert from 'node:assert/strict'
import { calcAge, daysBetween, addDays, parseISO } from '../app/utils/dates.ts'
import { percent } from '../app/utils/percentage.ts'
import { convert } from '../app/utils/units.ts'
import { calcBmi } from '../app/utils/bmi.ts'
import { calcLoan } from '../app/utils/loan.ts'
import { formatUuid } from '../app/utils/uuid.ts'
import { incomeTax } from '../app/utils/tax.ts'
import { takeHome } from '../app/utils/salary.ts'
import { stampDuty, transferDuty } from '../app/utils/stampduty.ts'
import { calcZakat } from '../app/utils/zakat.ts'
import { toHijri, fromHijri } from '../app/utils/hijri.ts'
import { fmt } from '../app/utils/num.ts'

const d = (s: string) => parseISO(s)!

test('age', () => {
  const a = calcAge(d('1990-05-15'), d('2024-03-10'))!
  assert.deepEqual([a.years, a.months, a.days], [33, 9, 24])
  assert.equal(calcAge(d('2030-01-01'), d('2024-03-10')), null)
  assert.equal(calcAge(d('2000-02-29'), d('2023-03-01'))!.nextBirthdayDays, 0) // Feb 29 birthday is observed on Mar 1 in non-leap years
  assert.equal(calcAge(d('2000-03-10'), d('2024-03-10'))!.nextBirthdayDays, 0)
})

test('dates', () => {
  assert.equal(daysBetween(d('2024-01-01'), d('2024-12-31')), 365)
  assert.equal(addDays(d('2024-02-28'), 2), '2024-03-01')
  assert.equal(addDays(d('2024-03-01'), -1), '2024-02-29')
  assert.equal(parseISO('2023-02-31'), null)
  assert.equal(parseISO(''), null)
})

test('percentage', () => {
  assert.deepEqual(percent('of', 20, 150), { value: 30 })
  assert.deepEqual(percent('whatPct', 30, 150), { value: 20 })
  assert.deepEqual(percent('whatPct', 1, 0), { error: 'divideByZero' })
  assert.deepEqual(percent('change', 50, 75), { value: 50 })
  assert.deepEqual(percent('change', 0, 5), { error: 'divideByZero' })
  assert.deepEqual(percent('increase', 10, 200), { value: 220 })
  assert.deepEqual(percent('difference', 50, 150), { value: 100 })
})

test('units', () => {
  assert.deepEqual(convert('length', 'km', 'm', 2), { value: 2000 })
  assert.equal((convert('temperature', 'c', 'f', 100) as { value: number }).value, 212)
  assert.deepEqual(convert('temperature', 'k', 'c', -1), { error: 'belowAbsoluteZero' })
  assert.deepEqual(convert('length', 'kg', 'm', 1), { error: 'badUnit' })
  assert.equal(fmt(0.1 * 3, 'en'), '0.3')
})

test('bmi', () => {
  const r = calcBmi(70, 1.75)
  assert.ok('bmi' in r && Math.abs(r.bmi - 22.857) < 0.01 && r.category === 'normal')
  assert.deepEqual(calcBmi(-1, 1.7), { error: 'invalid' })
})

test('loan', () => {
  const r = calcLoan('reducing', 300000, 4, 30)
  assert.ok('monthly' in r && Math.abs(r.monthly - 1432.25) < 0.01)
  const z = calcLoan('reducing', 1200, 0, 1)
  assert.ok('monthly' in z && z.monthly === 100 && z.interest === 0)
  const f = calcLoan('flat', 100000, 3, 9)
  assert.ok('monthly' in f && f.interest === 27000 && Math.abs(f.monthly - 1175.93) < 0.01)
  assert.deepEqual(calcLoan('flat', 0, 3, 9), { error: 'amount' })
  assert.deepEqual(calcLoan('flat', 1, -1, 9), { error: 'rate' })
  assert.deepEqual(calcLoan('flat', 1, 1, 0), { error: 'term' })
})

test('uuid', () => {
  assert.equal(formatUuid('ab-cd', true, false), 'ABCD')
  assert.equal(formatUuid('ab-cd', false, true), 'ab-cd')
})

test('income tax (YA2025 bands)', () => {
  const r = incomeTax(100000, 0, 0)
  assert.ok('payable' in r && r.chargeable === 91000 && r.payable === 7690)
  const low = incomeTax(40000, 0, 0) // chargeable 31,000: tax 480, RM400 rebate
  assert.ok('payable' in low && low.chargeable === 31000 && low.rebate === 400 && low.payable === 80)
  const z = incomeTax(100000, 0, 100000)
  assert.ok('payable' in z && z.payable === 0 && z.zakat === z.taxBeforeRebate)
  assert.deepEqual(incomeTax(-1, 0, 0), { error: 'income' })
})

test('salary', () => {
  const r = takeHome(5000, 11)
  assert.ok('net' in r && r.epf === 550 && r.socso === 25 && r.eis === 10 && r.employerEpf === 650)
  const hi = takeHome(10000, 11)
  assert.ok('socso' in hi && hi.socso === 30 && hi.employerEpf === 1200) // capped at RM6,000
  assert.deepEqual(takeHome(0, 11), { error: 'invalid' })
})

test('stamp duty', () => {
  assert.equal(transferDuty(500000), 9000)
  assert.equal(transferDuty(1500000), 1000 + 8000 + 15000 + 20000)
  const s = stampDuty(600000, 540000, false)
  assert.ok('total' in s && s.transfer === 12000 && s.loan === 2700 && s.total === 14700)
  assert.deepEqual(stampDuty(450000, 400000, true), { transfer: 0, loan: 0, total: 0, exempt: true })
  assert.deepEqual(stampDuty(100000, 200000, false), { error: 'loan' })
})

test('zakat', () => {
  assert.deepEqual(calcZakat(10000, 0), { error: 'goldPrice' })
  const below = calcZakat(1000, 100) // nisab 8,500
  assert.ok('due' in below && !below.due && below.zakat === 0)
  const above = calcZakat(20000, 100)
  assert.ok('due' in above && above.due && above.zakat === 500)
})

test('hijri', () => {
  assert.deepEqual(toHijri({ y: 2024, m: 3, d: 11 }), { y: 1445, m: 9, d: 1 })
  assert.equal(fromHijri({ y: 1445, m: 9, d: 1 }), '2024-03-11')
  assert.equal(fromHijri({ y: 1445, m: 13, d: 1 }), null)
})
