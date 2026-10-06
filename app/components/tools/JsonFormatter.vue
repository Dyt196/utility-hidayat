<script setup lang="ts">
const c = useContent()
const u = computed(() => c.value.tools['json-formatter'].ui)
const input = ref('')
const mode = ref('2')
const { status, copy } = useCopy()

const out = computed(() => {
  if (!input.value.trim()) return { empty: true as const }
  try {
    const parsed = JSON.parse(input.value)
    return { text: JSON.stringify(parsed, null, mode.value === 'min' ? undefined : Number(mode.value)) }
  } catch (e) {
    return { error: u.value.errPrefix + (e as Error).message }
  }
})
const id = useId()
</script>

<template>
  <div>
    <label :for="id" class="mb-1 block text-sm font-medium">{{ u.input }}</label>
    <textarea
      :id="id" v-model="input" rows="10" spellcheck="false" autocapitalize="off" autocomplete="off"
      class="w-full rounded-lg border border-line bg-bg px-3 py-2 font-mono text-sm"
    />
    <div class="mt-4 flex flex-wrap items-end gap-3">
      <SelectInput
        v-model="mode" :label="u.output"
        :options="[{ value: '2', label: u.indent2 }, { value: '4', label: u.indent4 }, { value: 'min', label: u.minify }]"
      />
      <button type="button" class="rounded-lg border border-line px-4 py-2 hover:bg-bg" @click="input = ''">{{ u.clear }}</button>
    </div>
    <ResultCard :empty="out.empty ? u.empty : undefined" :error="out.error">
      <template v-if="out.text !== undefined">
        <label :for="`${id}-out`" class="sr-only">{{ u.outputLabel }}</label>
        <textarea
          :id="`${id}-out`" :value="out.text" readonly rows="10"
          class="w-full rounded-lg border border-line bg-surface px-3 py-2 font-mono text-sm"
        />
        <button type="button" class="mt-3 rounded-lg bg-accent px-4 py-2 font-semibold text-accent-fg hover:brightness-95" @click="copy(out.text!)">{{ u.copy }}</button>
        <span class="ml-3 text-sm text-muted" role="status">{{ status === 'ok' ? u.copied : status === 'fail' ? u.copyFailed : '' }}</span>
      </template>
    </ResultCard>
  </div>
</template>
