<script setup lang="ts">
const props = defineProps<{
  label: string
  type?: 'text' | 'number' | 'date'
  error?: string
  hint?: string
  min?: string
  max?: string
  placeholder?: string
}>()
const model = defineModel<string>({ required: true })
const id = useId()
const describedBy = computed(() => [props.hint && `${id}-hint`, props.error && `${id}-err`].filter(Boolean).join(' ') || undefined)
</script>

<template>
  <div>
    <label :for="id" class="mb-1 block text-sm font-medium">{{ label }}</label>
    <input
      :id="id" v-model="model" :type="type ?? 'text'" :min="min" :max="max" :placeholder="placeholder"
      :step="type === 'number' ? 'any' : undefined" :inputmode="type === 'number' ? 'decimal' : undefined"
      :aria-invalid="error ? true : undefined" :aria-describedby="describedBy"
      class="w-full rounded-lg border border-line bg-bg px-3 py-2 text-base"
    >
    <p v-if="hint" :id="`${id}-hint`" class="mt-1 text-sm text-muted">{{ hint }}</p>
    <p v-if="error" :id="`${id}-err`" class="mt-1 text-sm font-medium text-danger">{{ error }}</p>
  </div>
</template>
