<script setup lang="ts">
const c = useContent()
const u = computed(() => c.value.tools['zakat-calculator'].ui)
const type = ref('income')
const amount = ref('')
const grams = ref('')
const goldPrice = ref('')

const typeOpts = computed(() => Object.entries(u.value.types).map(([value, label]) => ({ value, label })))
const out = computed(() => {
  const price = parseNum(goldPrice.value)
  const base = type.value === 'gold'
    ? (parseNum(grams.value) === null || price === null ? null : parseNum(grams.value)! * price)
    : parseNum(amount.value)
  if (base === null || price === null) return { empty: true as const }
  const r = calcZakat(base, price)
  if ('error' in r) return { error: r.error === 'goldPrice' ? u.value.errGold : u.value.errAmount }
  return { res: r }
})
const money = (n: number) => fmtRM(n, c.value.locale)
</script>

<template>
  <div>
    <SelectInput v-model="type" :label="u.type" :options="typeOpts" />
    <div class="mt-4 grid gap-4 sm:grid-cols-2">
      <InputField v-if="type === 'income'" v-model="amount" type="number" :label="u.income" />
      <InputField v-else-if="type === 'savings'" v-model="amount" type="number" :label="u.savings" />
      <InputField v-else v-model="grams" type="number" :label="u.goldGrams" />
      <InputField v-model="goldPrice" type="number" :label="u.goldPrice" :hint="u.goldPriceHint" />
    </div>
    <ResultCard :empty="out.empty ? u.empty : undefined" :error="out.error">
      <template v-if="out.res">
        <p class="text-sm text-muted">{{ u.due }}</p>
        <p class="text-3xl font-bold">{{ money(out.res.zakat) }}</p>
        <dl class="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div><dt class="text-muted">{{ u.amount }}</dt><dd class="font-semibold">{{ money(out.res.base) }}</dd></div>
          <div><dt class="text-muted">{{ u.nisab }}</dt><dd class="font-semibold">{{ money(out.res.nisab) }}</dd></div>
        </dl>
        <p v-if="!out.res.due" class="mt-3 text-sm font-medium">{{ u.below }}</p>
      </template>
    </ResultCard>
    <p class="mt-4 rounded-lg border border-line p-3 text-sm" role="note">{{ u.note }}</p>
  </div>
</template>
