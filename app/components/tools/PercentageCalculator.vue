<script setup lang="ts">
const c = useContent()
const u = computed(() => c.value.tools['percentage-calculator'].ui)
const order: PercentOp[] = ['of', 'whatPct', 'increase', 'decrease', 'change', 'difference']
const inputs = reactive(Object.fromEntries(order.map(op => [op, { a: '', b: '' }])) as Record<PercentOp, { a: string, b: string }>)
const id = useId()

type Row = { text: string } | { error: string } | null
function result(op: PercentOp): Row {
  const x = parseNum(inputs[op].a)
  const y = parseNum(inputs[op].b)
  if (x === null || y === null) return null
  // For "increase/decrease Y by X%" the number is typed first, the percent second.
  const swap = (u.value.ops[op] as { swap?: boolean }).swap
  const r = swap ? percent(op, y, x) : percent(op, x, y)
  if ('error' in r) return { error: u.value.errZero }
  const v = fmt(r.value, c.value.locale)
  if (op === 'change') return { text: `${fmt(Math.abs(r.value), c.value.locale)}% (${r.value > 0 ? u.value.increased : r.value < 0 ? u.value.decreased : u.value.unchanged})` }
  return { text: ['whatPct', 'difference'].includes(op) ? `${v}%` : v }
}
</script>

<template>
  <div class="space-y-6">
    <div v-for="op in order" :key="op" role="group" :aria-labelledby="`${id}-${op}`" class="border-b border-line pb-6 last:border-0 last:pb-0">
      <div class="flex flex-wrap items-center gap-x-2 gap-y-2">
        <span :id="`${id}-${op}`" class="font-medium">{{ u.ops[op].before }}</span>
        <input v-model="inputs[op].a" type="number" step="any" inputmode="decimal" :aria-label="`${u.ops[op].before} ${u.a}`" class="w-28 rounded-lg border border-line bg-bg px-3 py-2">
        <span class="font-medium">{{ u.ops[op].mid }}</span>
        <input v-model="inputs[op].b" type="number" step="any" inputmode="decimal" :aria-label="`${u.ops[op].mid} ${u.b}`" class="w-28 rounded-lg border border-line bg-bg px-3 py-2">
        <span class="font-medium">{{ u.ops[op].after }}</span>
      </div>
      <output class="mt-2 block min-h-6 text-lg font-bold" :class="{ 'text-danger text-base font-medium': result(op) && 'error' in result(op)! }">
        <template v-if="result(op)">{{ 'text' in result(op)! ? `= ${(result(op) as { text: string }).text}` : (result(op) as { error: string }).error }}</template>
      </output>
    </div>
  </div>
</template>
