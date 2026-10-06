<script setup lang="ts">
const c = useContent()
const u = computed(() => c.value.tools['income-tax-calculator'].ui)
const income = ref('')
const reliefs = ref('')
const zakat = ref('')

const out = computed(() => {
  const i = parseNum(income.value)
  if (i === null) return { empty: true as const }
  const r = incomeTax(i, parseNum(reliefs.value) ?? 0, parseNum(zakat.value) ?? 0)
  if ('error' in r) return { error: r.error === 'income' ? u.value.errIncome : u.value.errNegative }
  return { res: r }
})
const money = (n: number) => fmtRM(n, c.value.locale)
const num = (n: number) => fmt(n, c.value.locale)
</script>

<template>
  <div>
    <div class="grid gap-4 sm:grid-cols-3">
      <InputField v-model="income" type="number" :label="u.income" :hint="u.incomeHint" />
      <InputField v-model="reliefs" type="number" :label="u.reliefs" :hint="u.reliefsHint" />
      <InputField v-model="zakat" type="number" :label="u.zakat" />
    </div>
    <ResultCard :empty="out.empty ? u.empty : undefined" :error="out.error">
      <template v-if="out.res">
        <p class="text-sm text-muted">{{ u.payable }}</p>
        <p class="text-3xl font-bold">{{ money(out.res.payable) }}</p>
        <dl class="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
          <div><dt class="text-muted">{{ u.chargeable }}</dt><dd class="font-semibold">{{ money(out.res.chargeable) }}</dd></div>
          <div><dt class="text-muted">{{ u.before }}</dt><dd class="font-semibold">{{ money(out.res.taxBeforeRebate) }}</dd></div>
          <div><dt class="text-muted">{{ u.rebate }} / {{ u.zakatOffset }}</dt><dd class="font-semibold">{{ money(out.res.rebate + out.res.zakat) }}</dd></div>
          <div><dt class="text-muted">{{ u.effective }}</dt><dd class="font-semibold">{{ num(Math.round(out.res.effective * 100) / 100) }}%</dd></div>
        </dl>
        <table v-if="out.res.bands.length" class="mt-5 w-full text-left text-sm">
          <caption class="mb-2 text-left font-semibold">{{ u.bandsTitle }}</caption>
          <thead class="text-muted">
            <tr><th scope="col" class="py-1 pr-2 font-medium">RM</th><th scope="col" class="py-1 pr-2 font-medium">%</th><th scope="col" class="py-1 text-right font-medium">{{ u.before }}</th></tr>
          </thead>
          <tbody>
            <tr v-for="b in out.res.bands" :key="b.from" class="border-t border-line">
              <td class="py-1 pr-2">{{ u.bandRange(num(b.from), b.to === Infinity ? null : num(b.to)) }}</td>
              <td class="py-1 pr-2">{{ b.rate }}%</td>
              <td class="py-1 text-right font-semibold">{{ money(b.tax) }}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </ResultCard>
    <p class="mt-4 rounded-lg border border-line p-3 text-sm" role="note">{{ u.ratesNote }}</p>
  </div>
</template>
