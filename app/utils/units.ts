/** Each unit converts to/from its category's base unit, so adding a unit or category is one entry. */
export interface Unit { id: string, toBase: (v: number) => number, fromBase: (v: number) => number }

const linear = (id: string, factor: number): Unit => ({ id, toBase: v => v * factor, fromBase: v => v / factor })

export const unitCategories: Record<string, Unit[]> = {
  length: [ // base: metre
    linear('mm', 0.001), linear('cm', 0.01), linear('m', 1), linear('km', 1000),
    linear('in', 0.0254), linear('ft', 0.3048), linear('yd', 0.9144), linear('mi', 1609.344)
  ],
  weight: [ // base: kilogram
    linear('mg', 1e-6), linear('g', 0.001), linear('kg', 1), linear('t', 1000),
    linear('oz', 0.028349523125), linear('lb', 0.45359237)
  ],
  temperature: [ // base: kelvin
    { id: 'c', toBase: v => v + 273.15, fromBase: v => v - 273.15 },
    { id: 'f', toBase: v => (v - 32) * 5 / 9 + 273.15, fromBase: v => (v - 273.15) * 9 / 5 + 32 },
    { id: 'k', toBase: v => v, fromBase: v => v }
  ]
}

export type ConvertResult = { value: number } | { error: 'badUnit' | 'belowAbsoluteZero' }

export function convert(category: string, from: string, to: string, value: number): ConvertResult {
  const units = unitCategories[category]
  const a = units?.find(u => u.id === from)
  const b = units?.find(u => u.id === to)
  if (!a || !b) return { error: 'badUnit' }
  const base = a.toBase(value)
  if (category === 'temperature' && base < 0) return { error: 'belowAbsoluteZero' }
  return { value: b.fromBase(base) }
}
