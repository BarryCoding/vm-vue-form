<script setup lang="ts">
import { useAttrs } from 'vue'
const attrs = useAttrs()

interface Props {
  label?: string
  modelValue?: string
  options: string[]
}

const props = withDefaults(defineProps<Props>(), { label: '', modelValue: '' })

const emit = defineEmits<{
  'update:modelValue': [string]
}>()

function onChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <label>{{ props.label }}</label>
  <select v-bind="{ ...attrs, onChange }" :value="props.modelValue" class="field">
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === props.modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>

<style scoped></style>
