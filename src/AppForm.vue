<template>
  <div>
    <h1>Create an event</h1>
    <form @submit="submit">
      <BaseSelect
        label="Select a category"
        v-model="category"
        :options="categories"
        :error="errors.category"
      />

      <fieldset>
        <legend>Name & describe your event</legend>
        <BaseInput label="Title" type="text" v-model="title" :error="errors.title" />
        <BaseInput
          label="Description"
          type="text"
          v-model="description"
          :error="errors.description"
        />
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>
        <BaseInput label="Location" type="text" v-model="location" />
      </fieldset>

      <fieldset>
        <legend>Pet</legend>
        <p>Are pets allowed?</p>
        <BaseRadioGroup :options="radioOptions" name="pet" v-model="pets" />
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckbox label="Catering" v-model="catering" />
        </div>

        <div>
          <BaseCheckbox label="Live music" v-model="music" />
        </div>
      </fieldset>

      <BaseButton type="submit" class="-fill-gradient"> Submit </BaseButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const categories = ref([
  'sustainability',
  'nature',
  'animal welfare',
  'housing',
  'education',
  'food',
  'community'
])

const radioOptions = ref([
  { label: 'No', value: '0' },
  { label: 'Yes', value: '1' }
])

function required(value: string) {
  const requiredMessage = 'This field is required'
  if (!value) return requiredMessage

  return true
}

function minLength(number: number, value: string) {
  if (value.length < number) return 'Please type at least ' + number + ' characters'

  return true
}

function anything() {
  return true
}
const validationSchema = {
  category: required,
  title: (value: string) => {
    const req = required(value)
    if (req !== true) return req

    const min = minLength(3, value)
    if (min !== true) return min

    return true
  },
  description: required,
  location: undefined,
  pets: anything,
  catering: anything,
  music: anything
}

const { handleSubmit, errors } = useForm({
  validationSchema,
  initialValues: {
    category: '',
    title: '',
    description: '',
    location: '',
    pets: '',
    catering: false,
    music: false
  }
})

const { value: category } = useField<string>('category')
const { value: title } = useField<string>('title')
const { value: description } = useField<string>('description')
const { value: location } = useField<string>('location')
const { value: pets } = useField<string>('pets')
const { value: catering } = useField<boolean>('catering')
const { value: music } = useField<boolean>('music')

const submit = handleSubmit((values) => {
  console.log(`💵 💴 💶 💷 ~ file: AppForm.vue:125 ~ submit ~ values:`, values)
})
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
