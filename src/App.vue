<template>
  <div>
    <h1>Create an event</h1>
    <form>
      <BaseSelect label="Select a category" v-model="event.category" :options="categories" />

      <h3>Name & describe your event</h3>

      <BaseInput label="Title" type="text" v-model="event.title" />

      <BaseInput label="Description" type="text" v-model="event.description" />

      <h3>Where is your event?</h3>

      <BaseInput label="Location" type="text" v-model="event.location" />

      <h3>Are pets allowed?</h3>
      <div>
        <input type="radio" v-model="event.pets" :value="1" name="pets" />
        <label>Yes</label>
      </div>

      <div>
        <input type="radio" v-model="event.pets" :value="0" name="pets" />
        <label>No</label>
      </div>

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
  pets: 1,
  extras: {
    catering: false,
    music: false
  }
})
</script>
