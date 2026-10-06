<script setup lang="ts">
const c = useContent()
const u = computed(() => c.value.tools['qr-code-generator'].ui)
const text = ref('')
const src = ref('')
const failed = ref(false)

// qrcode is loaded on demand so it is not in the JS of any other page.
watch(text, async (value) => {
  const current = value
  failed.value = false
  if (!current.trim() || current.length > 1000) {
    src.value = ''
    return
  }
  try {
    const QR = await import('qrcode')
    const url = await QR.toDataURL(current, { errorCorrectionLevel: 'M', margin: 4, width: 320 })
    if (text.value === current) src.value = url // ignore stale results
  } catch {
    if (text.value === current) {
      src.value = ''
      failed.value = true
    }
  }
})

const error = computed(() => (text.value.length > 1000 ? u.value.errTooLong : failed.value ? u.value.errFailed : undefined))
</script>

<template>
  <div>
    <InputField v-model="text" :label="u.text" placeholder="https://" />
    <ResultCard :empty="!error && !src ? u.empty : undefined" :error="error">
      <template v-if="src">
        <img :src="src" :alt="u.alt" width="320" height="320" class="max-w-full rounded-lg border border-line">
        <p class="mt-3">
          <a :href="src" download="qrcode.png" class="inline-block rounded-lg bg-accent px-4 py-2 font-semibold text-accent-fg hover:brightness-95">{{ u.download }}</a>
        </p>
        <p class="mt-3 text-sm text-muted">{{ u.note }}</p>
      </template>
    </ResultCard>
  </div>
</template>
