export type BmiCategory = 'underweight' | 'normal' | 'overweight' | 'obese'
export type BmiResult = { bmi: number, category: BmiCategory } | { error: 'invalid' | 'range' }

/** WHO adult categories. Limits are sanity bounds, not medical ones. */
export function calcBmi(kg: number, m: number): BmiResult {
  if (!(kg > 0) || !(m > 0)) return { error: 'invalid' }
  if (kg > 700 || m > 2.8 || m < 0.5) return { error: 'range' }
  const bmi = kg / (m * m)
  const category = bmi < 18.5 ? 'underweight' : bmi < 25 ? 'normal' : bmi < 30 ? 'overweight' : 'obese'
  return { bmi, category }
}

export const lbToKg = (lb: number) => lb * 0.45359237
export const ftInToM = (ft: number, inch: number) => (ft * 12 + inch) * 0.0254
