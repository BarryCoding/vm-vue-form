<script setup lang="ts">
import { useId } from '@/composables/useId'
import { computed, useAttrs } from 'vue'
const attrs = useAttrs()
const fakeId = useId()

interface Props {
  label?: string
  modelValue?: string
  error?: string
  options: string[]
}

const props = withDefaults(defineProps<Props>(), { label: '', modelValue: '', error: '' })
const errorId = computed(() => (props.error ? 'error-' + fakeId : undefined))
const invalid = computed(() => (props.error ? true : undefined))

const emit = defineEmits<{
  'update:modelValue': [string]
}>()

function onChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <label :for="fakeId">{{ props.label }}</label>
  <select
    :id="fakeId"
    :aria-describedby="errorId"
    :aria-invalid="invalid"
    v-bind="{ ...attrs, onChange }"
    :value="props.modelValue"
    class="field"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === props.modelValue"
    >
      {{ option }}
    </option>
  </select>

  <p v-if="props.error" class="errorMessage" :id="errorId">{{ props.error }}</p>
</template>

<style scoped></style>
