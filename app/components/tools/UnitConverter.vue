<script setup lang="ts">
const c = useContent()
const u = computed(() => c.value.tools['unit-converter'].ui)
const defaults: Record<string, [string, string]> = { length: ['km', 'mi'], weight: ['kg', 'lb'], temperature: ['c', 'f'] }

const category = ref('length')
const from = ref('km')
const to = ref('mi')
const value = ref('')

const opts = (ids: string[]) => ids.map(v => ({ value: v, label: u.value.units[v] ?? v }))
const categoryOpts = computed(() => Object.keys(unitCategories).map(v => ({ value: v, label: u.value.categories[v] ?? v })))
const unitOpts = computed(() => opts(unitCategories[category.value]!.map(x => x.id)))

watch(category, (cat) => { [from.value, to.value] = defaults[cat] ?? ['', ''] })
function swap() { [from.value, to.value] = [to.value, from.value] }

const out = computed(() => {
  const v = parseNum(value.value)
  if (v === null) return { empty: true as const }
  if (category.value !== 'temperature' && v < 0) return { error: u.value.errNegative }
  const r = convert(category.value, from.value, to.value, v)
  if ('error' in r) return { error: r.error === 'belowAbsoluteZero' ? u.value.errBelowZero : u.value.errBadUnit }
  return { text: fmt(r.value, c.value.locale), input: fmt(v, c.value.locale) }
})
</script>

<template>
  <div>
    <div class="grid gap-4 sm:grid-cols-2">
      <SelectInput v-model="category" :label="u.category" :options="categoryOpts" />
      <InputField v-model="value" type="number" :label="u.value" />
    </div>
    <div class="mt-4 grid items-end gap-4 sm:grid-cols-[1fr_auto_1fr]">
      <SelectInput v-model="from" :label="u.from" :options="unitOpts" />
      <button type="button" class="rounded-lg border border-line px-3 py-2 hover:bg-bg" @click="swap">
        <span aria-hidden="true">⇄</span><span class="sr-only">{{ u.swap }}</span>
      </button>
      <SelectInput v-model="to" :label="u.to" :options="unitOpts" />
    </div>
    <ResultCard :empty="'empty' in out ? u.empty : undefined" :error="'error' in out ? out.error : undefined">
      <template v-if="out.text">
        <p class="text-sm text-muted">{{ out.input }} {{ u.units[from] }} =</p>
        <p class="text-2xl font-bold">{{ out.text }} <span class="text-base font-medium">{{ u.units[to] }}</span></p>
      </template>
    </ResultCard>
  </div>
</template>
