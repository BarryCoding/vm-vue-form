<script setup lang="ts">
import { useId } from '@/composables/useId'
import { useAttrs } from 'vue'
const attrs = useAttrs()
const fakeId = useId()

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
  <label :for="fakeId">{{ props.label }}</label>
  <select :id="fakeId" v-bind="{ ...attrs, onChange }" :value="props.modelValue" class="field">
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
