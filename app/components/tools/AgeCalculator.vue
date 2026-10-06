<script setup lang="ts">
const c = useContent()
const u = computed(() => c.value.tools['age-calculator'].ui)
const dob = ref('')

const out = computed(() => {
  if (!dob.value) return { empty: true as const }
  const d = parseISO(dob.value)
  if (!d) return { error: u.value.errInvalid }
  const age = calcAge(d, todayYMD())
  return age ? { age } : { error: u.value.errFuture }
})
const n = (v: number) => fmt(v, c.value.locale)
</script>

<template>
  <div>
    <InputField v-model="dob" type="date" :label="u.dob" min="1000-01-01" />
    <ResultCard :empty="'empty' in out ? u.empty : undefined" :error="'error' in out ? out.error : undefined">
      <template v-if="out.age">
        <p class="text-sm text-muted">{{ u.age }}</p>
        <p class="text-2xl font-bold">{{ u.summary(n(out.age.years), n(out.age.months), n(out.age.days)) }}</p>
        <dl class="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
          <div><dt class="text-muted">{{ u.totalMonths }}</dt><dd class="font-semibold">{{ n(out.age.totalMonths) }}</dd></div>
          <div><dt class="text-muted">{{ u.totalWeeks }}</dt><dd class="font-semibold">{{ n(out.age.totalWeeks) }}</dd></div>
          <div><dt class="text-muted">{{ u.totalDays }}</dt><dd class="font-semibold">{{ n(out.age.totalDays) }}</dd></div>
          <div>
            <dt class="text-muted">{{ u.nextBirthday }}</dt>
            <dd class="font-semibold">{{ out.age.nextBirthdayDays === 0 ? u.today : u.inDays(n(out.age.nextBirthdayDays)) }}</dd>
          </div>
        </dl>
      </template>
    </ResultCard>
  </div>
</template>
