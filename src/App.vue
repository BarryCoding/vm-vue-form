<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="submitForm">
      <BaseSelect label="Select a category" v-model="event.category" :options="categories" />

      <fieldset>
        <legend>Name & describe your event</legend>
        <BaseInput label="Title" type="text" v-model="event.title" error="test error" />
        <BaseInput label="Description" type="text" v-model="event.description" />
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>
        <BaseInput label="Location" type="text" v-model="event.location" />
      </fieldset>

      <fieldset>
        <legend>Pet</legend>
        <p>Are pets allowed?</p>
        <BaseRadioGroup :options="radioOptions" name="pet" v-model="event.pets" />
        <!-- <BaseRadioGroup horizontal :options="radioOptions" name="pet" v-model="event.pets" /> -->
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckbox label="Catering" v-model="event.extras.catering" />
        </div>

        <div>
          <BaseCheckbox label="Live music" v-model="event.extras.music" />
        </div>
      </fieldset>

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

<style scoped>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
}
</style>
