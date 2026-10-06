export type CategoryId = 'datetime' | 'math' | 'converters' | 'health'

export interface ToolMeta { slug: string, category: CategoryId, related: string[] }

/** Single registry: drives the homepage, /tools, related-tools and breadcrumbs. Copy lives in app/content/*. */
export const tools: ToolMeta[] = [
  { slug: 'age-calculator', category: 'datetime', related: ['date-calculator', 'percentage-calculator'] },
  { slug: 'date-calculator', category: 'datetime', related: ['age-calculator', 'percentage-calculator'] },
  { slug: 'percentage-calculator', category: 'math', related: ['unit-converter', 'bmi-calculator'] },
  { slug: 'unit-converter', category: 'converters', related: ['bmi-calculator', 'percentage-calculator'] },
  { slug: 'bmi-calculator', category: 'health', related: ['unit-converter', 'percentage-calculator'] }
]

export const categoryOrder: CategoryId[] = ['datetime', 'math', 'converters', 'health']
