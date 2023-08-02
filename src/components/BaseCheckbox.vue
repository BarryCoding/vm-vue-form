<script setup lang="ts">
import { useAttrs } from 'vue'
const attrs = useAttrs()

interface Props {
  label: string
  modelValue?: boolean
}

const props = withDefaults(defineProps<Props>(), { modelValue: false })

const emit = defineEmits<{
  'update:modelValue': [boolean]
}>()

function handleChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).checked)
}
</script>

<template>
  <input
    type="checkbox"
    class="field"
    v-bind="attrs"
    :checked="props.modelValue"
    @change="handleChange"
  />
  <label>{{ props.label }}</label>
</template>

<style scoped></style>
