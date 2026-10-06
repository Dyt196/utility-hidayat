<script setup lang="ts">
const c = useContent()
const u = computed(() => c.value.tools['salary-calculator'].ui)
const gross = ref('')
const epfRate = ref('11')

const out = computed(() => {
  const g = parseNum(gross.value)
  if (g === null) return { empty: true as const }
  const r = takeHome(g, Number(epfRate.value))
  if ('error' in r) return { error: r.error === 'range' ? u.value.errRange : u.value.errInvalid }
  return { res: r }
})
const money = (n: number) => fmtRM(n, c.value.locale)
const rows = computed(() => (out.value.res
  ? [[u.value.epf, out.value.res.epf], [u.value.socso, out.value.res.socso], [u.value.eis, out.value.res.eis], [u.value.pcb, out.value.res.pcb]] as [string, number][]
  : []))
</script>

<template>
  <div>
    <div class="grid gap-4 sm:grid-cols-2">
      <InputField v-model="gross" type="number" :label="u.gross" />
      <SelectInput v-model="epfRate" :label="u.epfRate" :options="[{ value: '11', label: u.epf11 }, { value: '9', label: u.epf9 }]" />
    </div>
    <ResultCard :empty="out.empty ? u.empty : undefined" :error="out.error">
      <template v-if="out.res">
        <p class="text-sm text-muted">{{ u.net }}</p>
        <p class="text-3xl font-bold">{{ money(out.res.net) }}</p>
        <h3 class="mt-4 text-sm font-semibold">{{ u.deductions }}</h3>
        <dl class="mt-2 space-y-1 text-sm">
          <div v-for="[label, v] in rows" :key="label" class="flex justify-between gap-4 border-b border-line py-1">
            <dt class="text-muted">{{ label }}</dt><dd class="font-semibold">{{ money(v) }}</dd>
          </div>
          <div class="flex justify-between gap-4 py-1">
            <dt class="text-muted">{{ u.employer }}</dt><dd class="font-semibold">{{ money(out.res.employerEpf) }}</dd>
          </div>
        </dl>
      </template>
    </ResultCard>
    <p class="mt-4 rounded-lg border border-line p-3 text-sm" role="note">{{ u.note }}</p>
  </div>
</template>
