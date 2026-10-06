export type CategoryId = 'datetime' | 'math' | 'finance' | 'converters' | 'health' | 'developer'

export interface ToolMeta { slug: string, category: CategoryId, related: string[] }

/** Single registry: drives the homepage, /tools, related-tools and breadcrumbs. Copy lives in app/content/*. */
export const tools: ToolMeta[] = [
  { slug: 'age-calculator', category: 'datetime', related: ['date-calculator', 'hijri-converter'] },
  { slug: 'date-calculator', category: 'datetime', related: ['age-calculator', 'hijri-converter'] },
  { slug: 'hijri-converter', category: 'datetime', related: ['date-calculator', 'age-calculator'] },
  { slug: 'percentage-calculator', category: 'math', related: ['loan-calculator', 'unit-converter'] },
  { slug: 'loan-calculator', category: 'finance', related: ['stamp-duty-calculator', 'salary-calculator'] },
  { slug: 'stamp-duty-calculator', category: 'finance', related: ['loan-calculator', 'income-tax-calculator'] },
  { slug: 'salary-calculator', category: 'finance', related: ['income-tax-calculator', 'zakat-calculator'] },
  { slug: 'income-tax-calculator', category: 'finance', related: ['salary-calculator', 'zakat-calculator'] },
  { slug: 'zakat-calculator', category: 'finance', related: ['income-tax-calculator', 'salary-calculator'] },
  { slug: 'unit-converter', category: 'converters', related: ['bmi-calculator', 'percentage-calculator'] },
  { slug: 'bmi-calculator', category: 'health', related: ['unit-converter', 'percentage-calculator'] },
  { slug: 'json-formatter', category: 'developer', related: ['uuid-generator', 'qr-code-generator'] },
  { slug: 'uuid-generator', category: 'developer', related: ['json-formatter', 'qr-code-generator'] },
  { slug: 'qr-code-generator', category: 'developer', related: ['uuid-generator', 'json-formatter'] }
]

export const categoryOrder: CategoryId[] = ['datetime', 'math', 'finance', 'converters', 'health', 'developer']
