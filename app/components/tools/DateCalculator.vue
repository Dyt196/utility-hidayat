<script setup lang="ts">
const c = useContent()
const u = computed(() => c.value.tools['date-calculator'].ui)
const mode = ref('between')
const start = ref('')
const end = ref('')
const days = ref('')

const modeOpts = computed(() => Object.entries(u.value.modes).map(([value, label]) => ({ value, label })))
const daysError = computed(() => {
  if (mode.value === 'between' || days.value === '') return undefined
  const n = parseNum(days.value)
  return n !== null && Number.isInteger(n) && n >= 0 && n <= 365000 ? undefined : u.value.errDays
})

const out = computed(() => {
  const s = parseISO(start.value)
  if (mode.value === 'between') {
    const e = parseISO(end.value)
    if (!s || !e) return { empty: true as const }
    const n = Math.abs(daysBetween(s, e))
    return { days: n }
  }
  const n = parseNum(days.value)
  if (!s || n === null) return { empty: true as const }
  if (daysError.value) return { error: daysError.value }
  const iso = addDays(s, mode.value === 'add' ? n : -n)
  if (!parseISO(iso)) return { error: u.value.errOutOfRange }
  return { date: `${weekdayName(iso, c.value.locale)}, ${longDate(iso, c.value.locale)}` }
})
const num = (v: number) => fmt(v, c.value.locale)
</script>

<template>
  <div>
    <SelectInput v-model="mode" :label="u.mode" :options="modeOpts" />
    <div v-if="mode === 'between'" class="mt-4 grid gap-4 sm:grid-cols-2">
      <InputField v-model="start" type="date" :label="u.start" min="1000-01-01" max="9999-12-31" />
      <InputField v-model="end" type="date" :label="u.end" min="1000-01-01" max="9999-12-31" />
    </div>
    <div v-else class="mt-4 grid gap-4 sm:grid-cols-2">
      <InputField v-model="start" type="date" :label="u.date" min="1000-01-01" max="9999-12-31" />
      <InputField v-model="days" type="number" :label="u.days" :error="daysError" />
    </div>
    <ResultCard :empty="'empty' in out ? u.empty : undefined" :error="'error' in out && !daysError ? out.error : undefined">
      <template v-if="out.days !== undefined">
        <p v-if="out.days === 0" class="text-xl font-bold">{{ u.sameDay }}</p>
        <template v-else>
          <p class="text-2xl font-bold">{{ u.daysApart(num(out.days)) }}</p>
          <p class="mt-1 text-muted">{{ u.weeksDays(num(Math.floor(out.days / 7)), num(out.days % 7)) }}</p>
        </template>
      </template>
      <template v-else-if="out.date">
        <p class="text-sm text-muted">{{ u.resultDate }}</p>
        <p class="text-2xl font-bold">{{ out.date }}</p>
      </template>
    </ResultCard>
  </div>
</template>
