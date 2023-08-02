<script setup lang="ts">
interface Props {
  options: {
    label: string
    value: string
  }[]
  name: string
  modelValue: string
  horizontal?: boolean
}

const props = withDefaults(defineProps<Props>(), { horizontal: false })

const emit = defineEmits<{
  'update:modelValue': [string]
}>()

function handleChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <component
    :class="{ horizontal: props.horizontal }"
    :is="horizontal ? 'span' : 'div'"
    v-for="{ label, value } in props.options"
    :key="value"
  >
    <input
      type="radio"
      :name="name"
      :checked="props.modelValue === value"
      :value="value"
      @change="handleChange"
    />
    <label>{{ label }}</label>
  </component>
</template>

<style scoped>
.horizontal {
  margin-right: 10px;
}
</style>
