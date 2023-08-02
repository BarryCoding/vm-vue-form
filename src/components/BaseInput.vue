<script setup lang="ts">
import { useAttrs } from 'vue'

interface Props {
  label?: string
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), { label: '', modelValue: '' })

const attrs = useAttrs()

const emit = defineEmits<{
  'update:modelValue': [string]
}>()

function handleInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <label>{{ props.label }}</label>
  <input
    v-bind="attrs"
    :placeholder="props.label"
    :value="props.modelValue"
    class="field"
    @input="handleInput"
  />
</template>

<style scoped></style>
