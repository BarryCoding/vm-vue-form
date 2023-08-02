<script setup lang="ts">
import { useId } from '@/composables/useId'
import { useAttrs } from 'vue'
const attrs = useAttrs()
const fakeId = useId()

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
    :id="fakeId"
    type="checkbox"
    class="field"
    v-bind="attrs"
    :checked="props.modelValue"
    @change="handleChange"
  />
  <label :for="fakeId">{{ props.label }}</label>
</template>

<style scoped></style>
