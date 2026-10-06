/** Clipboard copy with a status flag the UI can show in an aria-live region. */
export function useCopy() {
  const status = ref<'' | 'ok' | 'fail'>('')
  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      status.value = 'ok'
    } catch {
      status.value = 'fail'
    }
  }
  return { status, copy }
}
