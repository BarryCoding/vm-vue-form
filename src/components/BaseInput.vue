<script setup lang="ts">
import { useAttrs } from 'vue'
import { useId } from '@/composables/useId'
import { computed } from 'vue'
const attrs = useAttrs()
const fakeId = useId()

interface Props {
  label?: string
  modelValue?: string
  error?: string
}

const props = withDefaults(defineProps<Props>(), { label: '', modelValue: '', error: '' })
const errorId = computed(() => (props.error ? 'error-' + fakeId : undefined))
const invalid = computed(() => (props.error ? true : undefined))
const emit = defineEmits<{
  'update:modelValue': [string]
}>()

function handleInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <label :for="fakeId">{{ props.label }}</label>
  <input
    :id="fakeId"
    :aria-describedby="errorId"
    :aria-invalid="invalid"
    v-bind="attrs"
    :placeholder="props.label"
    :value="props.modelValue"
    class="field"
    @input="handleInput"
  />
  <p v-if="props.error" class="errorMessage" :id="errorId">{{ props.error }}</p>
</template>

<style scoped></style>
