<script setup lang="ts">
import { toHijri } from '~/utils/hijri'

const c = useContent()
const u = computed(() => c.value.tools['hijri-converter'].ui)
const mode = ref('toHijri')
const date = ref('')
const hy = ref('')
const hm = ref('9')
const hd = ref('')

const monthOpts = computed(() => u.value.months.map((label, i) => ({ value: String(i + 1), label })))
const out = computed(() => {
  const loc = c.value.locale
  if (mode.value === 'toHijri') {
    const g = parseISO(date.value)
    if (!g) return { empty: true as const }
    const h = toHijri(g)
    if (!h) return { error: u.value.errRange }
    return { label: u.value.hijriDate, text: `${h.d} ${u.value.months[h.m - 1]} ${h.y} ${u.value.era}`, sub: weekdayName(toISO(Date.UTC(g.y, g.m - 1, g.d)), loc) }
  }
  const y = parseNum(hy.value)
  const d = parseNum(hd.value)
  if (y === null || d === null) return { empty: true as const }
  if (!Number.isInteger(y) || !Number.isInteger(d) || y < HIJRI_YEARS.min || y > HIJRI_YEARS.max) return { error: u.value.errRange }
  const iso = fromHijri({ y, m: Number(hm.value), d })
  if (!iso) return { error: u.value.errInvalid }
  return { label: u.value.gregorianDate, text: longDate(iso, loc), sub: weekdayName(iso, loc) }
})
</script>

<template>
  <div>
    <SelectInput v-model="mode" :label="u.mode" :options="[{ value: 'toHijri', label: u.toHijri }, { value: 'toGregorian', label: u.toGregorian }]" />
    <div v-if="mode === 'toHijri'" class="mt-4">
      <InputField v-model="date" type="date" :label="u.date" min="1900-01-01" max="2076-12-31" />
    </div>
    <div v-else class="mt-4 grid gap-4 sm:grid-cols-3">
      <InputField v-model="hy" type="number" :label="u.year" />
      <SelectInput v-model="hm" :label="u.month" :options="monthOpts" />
      <InputField v-model="hd" type="number" :label="u.day" />
    </div>
    <ResultCard :empty="out.empty ? u.empty : undefined" :error="out.error">
      <template v-if="out.text">
        <p class="text-sm text-muted">{{ out.label }}</p>
        <p class="text-2xl font-bold">{{ out.text }}</p>
        <p class="mt-1 text-muted">{{ out.sub }}</p>
      </template>
    </ResultCard>
    <p class="mt-4 rounded-lg border border-line p-3 text-sm" role="note">{{ u.note }}</p>
  </div>
</template>
