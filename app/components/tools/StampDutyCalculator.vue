<script setup lang="ts">
const c = useContent()
const u = computed(() => c.value.tools['stamp-duty-calculator'].ui)
const price = ref('')
const loan = ref('')
const firstHome = ref(false)

const out = computed(() => {
  const p = parseNum(price.value)
  if (p === null) return { empty: true as const }
  const r = stampDuty(p, parseNum(loan.value) ?? 0, firstHome.value)
  if ('error' in r) return { error: r.error === 'price' ? u.value.errPrice : u.value.errLoan }
  return { res: r }
})
const money = (n: number) => fmtRM(n, c.value.locale)
</script>

<template>
  <div>
    <div class="grid gap-4 sm:grid-cols-2">
      <InputField v-model="price" type="number" :label="u.price" />
      <InputField v-model="loan" type="number" :label="u.loan" />
    </div>
    <div class="mt-4">
      <label class="flex items-center gap-2"><input v-model="firstHome" type="checkbox" class="size-5 accent-[var(--accent)]"> {{ u.firstHome }}</label>
      <p class="mt-1 text-sm text-muted">{{ u.firstHomeHint }}</p>
    </div>
    <ResultCard :empty="out.empty ? u.empty : undefined" :error="out.error">
      <template v-if="out.res">
        <p class="text-sm text-muted">{{ u.total }}</p>
        <p class="text-3xl font-bold">{{ money(out.res.total) }}</p>
        <dl class="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div><dt class="text-muted">{{ u.transfer }}</dt><dd class="font-semibold">{{ money(out.res.transfer) }}</dd></div>
          <div><dt class="text-muted">{{ u.loanDuty }}</dt><dd class="font-semibold">{{ money(out.res.loan) }}</dd></div>
        </dl>
        <p v-if="out.res.exempt" class="mt-3 text-sm font-medium">{{ u.exempt }}</p>
        <p v-else-if="firstHome" class="mt-3 text-sm text-muted">{{ u.exemptNotApplied }}</p>
        <p class="mt-3 text-sm text-muted">{{ u.notIncluded }}</p>
      </template>
    </ResultCard>
    <p class="mt-4 rounded-lg border border-line p-3 text-sm" role="note">{{ u.ratesNote }}</p>
  </div>
</template>
