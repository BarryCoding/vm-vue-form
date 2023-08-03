<template>
  <form @submit.prevent="onSubmit">
    <BaseInput label="Email" type="email" />

    <BaseInput label="Password" type="password" />

    <BaseButton type="submit" class="-fill-gradient"> Submit </BaseButton>
  </form>
</template>

<script setup lang="ts">
function onSubmit() {
  alert('Submitted')
}
</script>
