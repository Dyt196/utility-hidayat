import { test } from 'node:test'
import assert from 'node:assert/strict'
import { calcAge, daysBetween, addDays, parseISO } from '../app/utils/dates.ts'
import { percent } from '../app/utils/percentage.ts'
import { convert } from '../app/utils/units.ts'
import { calcBmi } from '../app/utils/bmi.ts'
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
