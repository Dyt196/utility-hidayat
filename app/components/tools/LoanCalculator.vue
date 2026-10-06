<script setup lang="ts">
const c = useContent()
const u = computed(() => c.value.tools['loan-calculator'].ui)
const type = ref<LoanType>('reducing')
const amount = ref('')
const rate = ref('')
const years = ref('')

const out = computed(() => {
  const a = parseNum(amount.value)
  const r = parseNum(rate.value)
  const y = parseNum(years.value)
  if (a === null || r === null || y === null) return { empty: true as const }
  const res = calcLoan(type.value, a, r, y)
  if ('error' in res) return { error: { amount: u.value.errAmount, rate: u.value.errRate, term: u.value.errTerm }[res.error] }
  return { res }
})
const money = (n: number) => fmtRM(n, c.value.locale)
</script>

<template>
  <div>
    <SelectInput v-model="type" :label="u.type" :options="[{ value: 'reducing', label: u.reducing }, { value: 'flat', label: u.flat }]" />
    <div class="mt-4 grid gap-4 sm:grid-cols-3">
      <InputField v-model="amount" type="number" :label="u.amount" />
      <InputField v-model="rate" type="number" :label="u.rate" />
      <InputField v-model="years" type="number" :label="u.years" />
    </div>
    <ResultCard :empty="out.empty ? u.empty : undefined" :error="out.error">
      <template v-if="out.res">
        <p class="text-sm text-muted">{{ u.monthly }}</p>
        <p class="text-3xl font-bold">{{ money(out.res.monthly) }}</p>
        <dl class="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div><dt class="text-muted">{{ u.total }}</dt><dd class="font-semibold">{{ money(out.res.total) }}</dd></div>
          <div><dt class="text-muted">{{ u.interest }}</dt><dd class="font-semibold">{{ money(out.res.interest) }}</dd></div>
        </dl>
        <p v-if="type === 'flat'" class="mt-3 text-sm text-muted">{{ u.flatNote }}</p>
      </template>
    </ResultCard>
    <p class="mt-4 rounded-lg border border-line p-3 text-sm" role="note">{{ u.disclaimer }}</p>
  </div>
</template>
