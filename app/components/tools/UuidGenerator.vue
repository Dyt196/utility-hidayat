<script setup lang="ts">
const c = useContent()
const u = computed(() => c.value.tools['uuid-generator'].ui)
const count = ref('1')
const upper = ref(false)
const hyphens = ref(true)
const raw = ref<string[]>([])
const unsupported = ref(false)
const { status, copy } = useCopy()
const id = useId()

const n = computed(() => parseNum(count.value))
const countError = computed(() => (n.value !== null && Number.isInteger(n.value) && n.value >= 1 && n.value <= 100 ? undefined : u.value.errCount))
const text = computed(() => raw.value.map(x => formatUuid(x, upper.value, hyphens.value)).join('\n'))

function generate() {
  if (countError.value) return
  if (typeof crypto === 'undefined' || !crypto.randomUUID) {
    unsupported.value = true
    return
  }
  raw.value = Array.from({ length: n.value! }, () => crypto.randomUUID())
}
</script>

<template>
  <form @submit.prevent="generate">
    <div class="grid gap-4 sm:grid-cols-[1fr_auto_auto] sm:items-end">
      <InputField v-model="count" type="number" :label="u.count" :error="countError" />
      <label class="flex items-center gap-2 py-2"><input v-model="upper" type="checkbox" class="size-5 accent-[var(--accent)]"> {{ u.upper }}</label>
      <label class="flex items-center gap-2 py-2"><input v-model="hyphens" type="checkbox" class="size-5 accent-[var(--accent)]"> {{ u.hyphens }}</label>
    </div>
    <button type="submit" class="mt-4 rounded-lg bg-accent px-5 py-2 font-semibold text-accent-fg hover:brightness-95">{{ u.generate }}</button>
    <ResultCard :empty="raw.length || unsupported ? undefined : u.empty" :error="unsupported ? u.errUnsupported : undefined">
      <label :for="id" class="sr-only">{{ u.outputLabel }}</label>
      <textarea :id="id" :value="text" readonly :rows="Math.min(raw.length, 10)" class="w-full rounded-lg border border-line bg-surface px-3 py-2 font-mono text-sm" />
      <button type="button" class="mt-3 rounded-lg border border-line px-4 py-2 hover:bg-bg" @click="copy(text)">{{ u.copy }}</button>
      <span class="ml-3 text-sm text-muted" role="status">{{ status === 'ok' ? u.copied : status === 'fail' ? u.copyFailed : '' }}</span>
    </ResultCard>
  </form>
</template>
