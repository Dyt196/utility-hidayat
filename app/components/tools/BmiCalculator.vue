<script setup lang="ts">
const c = useContent()
const u = computed(() => c.value.tools['bmi-calculator'].ui)
const system = ref('metric')
const cm = ref('')
const kg = ref('')
const ft = ref('')
const inch = ref('')
const lb = ref('')

const out = computed(() => {
  const metric = system.value === 'metric'
  const h = metric ? parseNum(cm.value) : (parseNum(ft.value) === null && parseNum(inch.value) === null ? null : ftInToM(parseNum(ft.value) ?? 0, parseNum(inch.value) ?? 0))
  const w = metric ? parseNum(kg.value) : parseNum(lb.value)
  if (h === null || w === null) return { empty: true as const }
  const r = calcBmi(metric ? w : lbToKg(w), metric ? h / 100 : h)
  if ('error' in r) return { error: r.error === 'range' ? u.value.errRange : u.value.errInvalid }
  return { bmi: fmt(Math.round(r.bmi * 10) / 10, c.value.locale), category: u.value.categories[r.category] }
})
</script>

<template>
  <div>
    <SelectInput v-model="system" :label="u.system" :options="[{ value: 'metric', label: u.metric }, { value: 'imperial', label: u.imperial }]" />
    <div v-if="system === 'metric'" class="mt-4 grid gap-4 sm:grid-cols-2">
      <InputField v-model="cm" type="number" :label="u.height" />
      <InputField v-model="kg" type="number" :label="u.weight" />
    </div>
    <div v-else class="mt-4 grid gap-4 sm:grid-cols-3">
      <InputField v-model="ft" type="number" :label="u.feet" />
      <InputField v-model="inch" type="number" :label="u.inches" />
      <InputField v-model="lb" type="number" :label="u.pounds" />
    </div>
    <ResultCard :empty="'empty' in out ? u.empty : undefined" :error="'error' in out ? out.error : undefined">
      <template v-if="out.bmi">
        <p class="text-sm text-muted">{{ u.bmi }}</p>
        <p class="text-3xl font-bold">{{ out.bmi }}</p>
        <p class="mt-1"><span class="text-muted">{{ u.category }}:</span> <strong>{{ out.category }}</strong></p>
        <p class="mt-3 text-sm text-muted">{{ u.scale }}</p>
      </template>
    </ResultCard>
    <p class="mt-4 rounded-lg border border-line p-3 text-sm" role="note">{{ u.disclaimer }}</p>
  </div>
</template>
