<template>
  <form @submit.prevent="onSubmit">
    <BaseInput label="Email" type="email" v-model="email" :error="emailError" />

    <BaseInput label="Password" type="password" v-model="password" :error="passwordError" />

    <BaseButton type="submit" class="-fill-gradient"> Submit </BaseButton>
  </form>
</template>

<script setup lang="ts">
import { useField, useForm } from 'vee-validate'

const schema = {
  email: (value: string) => {
    if (!value) return 'Email is Required'
    if (value.length <= 3) return 'Email is too short'
    return true
  },
  password: (value: string) => {
    if (!value) return 'This Field is Required'
    return true
  }
}

useForm({ validationSchema: schema })

const { value: email, errorMessage: emailError } = useField<string>('email')
const { value: password, errorMessage: passwordError } = useField<string>('password')

function onSubmit() {
  alert('Submitted')
}
</script>
