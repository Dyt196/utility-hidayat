<script setup lang="ts">
defineProps<{ label: string, options: { value: string, label: string }[] }>()
const model = defineModel<string>({ required: true })
const id = useId()
</script>

<template>
  <div>
    <label :for="id" class="mb-1 block text-sm font-medium">{{ label }}</label>
    <select :id="id" v-model="model" class="w-full rounded-lg border border-line bg-bg px-3 py-2 text-base">
      <option v-for="o in options" :key="o.value" :value="o.value">{{ o.label }}</option>
    </select>
  </div>
</template>
