<template>
  <form @submit.prevent="onSubmit">
    <BaseInput label="Email" type="email" v-model="email" :error="emailError" />

    <BaseInput label="Password" type="password" />

    <BaseButton type="submit" class="-fill-gradient"> Submit </BaseButton>
  </form>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'

const { value: email, errorMessage: emailError } = useField<string>('email', (value) => {
  if (!value) return 'Email is Required'
  if (value.length <= 3) return 'Email is too short'
  return true
})

function onSubmit() {
  alert('Submitted')
}
</script>
