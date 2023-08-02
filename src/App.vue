<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="submitForm">
      <BaseSelect label="Select a category" v-model="event.category" :options="categories" />

      <h3>Name & describe your event</h3>

      <BaseInput label="Title" type="text" v-model="event.title" />

      <BaseInput label="Description" type="text" v-model="event.description" />

      <h3>Where is your event?</h3>

      <BaseInput label="Location" type="text" v-model="event.location" />

      <h3>Are pets allowed?</h3>

      <BaseRadioGroup :options="radioOptions" name="pet" v-model="event.pets" />
      <!-- <BaseRadioGroup horizontal :options="radioOptions" name="pet" v-model="event.pets" /> -->

      <h3>Extras</h3>
      <div>
        <BaseCheckbox label="Catering" v-model="event.extras.catering" />
      </div>

      <div>
        <BaseCheckbox label="Live music" v-model="event.extras.music" />
      </div>

      <button class="button -fill-gradient" type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const categories = ref([
  'sustainability',
  'nature',
  'animal welfare',
  'housing',
  'education',
  'food',
  'community'
])

const event = ref({
  category: '',
  title: '',
  description: '',
  location: '',
  pets: '',
  extras: {
    catering: false,
    music: false
  }
})

const radioOptions = ref([
  { label: 'No', value: '0' },
  { label: 'Yes', value: '1' }
])

async function submitForm() {
  const res = await axios.post(
    'https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events',
    event.value
  )
  console.log(`🚀 ~ file: App.vue:69 ~ submitForm ~ res:`, res)
}
</script>
