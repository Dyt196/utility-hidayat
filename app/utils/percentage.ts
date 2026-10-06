export type PercentOp = 'of' | 'whatPct' | 'increase' | 'decrease' | 'change' | 'difference'
export type PercentResult = { value: number } | { error: 'divideByZero' }

/** a and b are the first and second inputs in the order shown to the user. */
export function percent(op: PercentOp, a: number, b: number): PercentResult {
  switch (op) {
    case 'of': return { value: (a / 100) * b }
    case 'whatPct': return b === 0 ? { error: 'divideByZero' } : { value: (a / b) * 100 }
    case 'increase': return { value: b + (b * a) / 100 }
    case 'decrease': return { value: b - (b * a) / 100 }
    case 'change': return a === 0 ? { error: 'divideByZero' } : { value: ((b - a) / Math.abs(a)) * 100 }
    case 'difference': return a + b === 0 ? { error: 'divideByZero' } : { value: (Math.abs(a - b) / ((Math.abs(a) + Math.abs(b)) / 2)) * 100 }
  }
}
