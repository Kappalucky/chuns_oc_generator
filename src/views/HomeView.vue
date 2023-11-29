<script setup>
import { reactive, ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline'

const open = ref(false)

let character = reactive({
  species: '',
  clothes: '',
  details: '',
  hair: '',
  eyes: '',
  skinTone: '',
  height: '',
  build: '',
  mood: '',
  colors: '',
  name: ''
})

const selectedCategory = ref('')
const selectedOption = ref('')
const updateOptions = () => {
  selectedOption.value = '' // Reset selectedOption when category changes
}

const species = ref(['Human', 'Elf', 'Bunny', 'Fairy', 'Mermaid', 'Troll'])
const clothes = ref(['Futuristic', 'Fantasy', 'Everyday', 'Casual', 'Stylish', 'Sexy/Cute'])
const details = ref([
  'Freckles',
  'Glasses',
  'Blush',
  'Jewelry',
  'Nekomimi (Cat Ears)',
  'Face/body Piercings'
])
const hair = ref([
  'Curly-Wavy-Long',
  'Buns-Curly-Messy',
  'Straight-Short',
  'Wavy-Long',
  'Straight-Very Long',
  'Straight-Bun-Fluffy',
  'None'
])
const eyes = ref(['Blue', 'Hazel', 'Brown', 'Green', 'Black', 'Red', 'Purple', 'None'])
const skinTone = ref(['Pale', 'light brown', 'Brown', 'Dark brown', 'Red hue'])
const height = ref(['Small (~3" or less)', 'Short(~4")', 'Average(~5")', 'Tall(~6"+)'])
const build = ref(['Athletic', 'Slim', 'Thick', 'Fat', 'Skinny Fat'])
const mood = ref(['Happy', 'Sad', 'Confused', 'Angry/Serious', 'Pleased', 'Afraid'])
const colors = ref(['Warm', 'Cool', 'Neon', 'Pastel', 'Bright', 'Dark'])
const name = {
  Month: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  Season: ['Spring', 'Winter', 'Fall/Autumn', 'Summer'],
  'Greek Mythology': [
    'Zeus',
    'Ares',
    'Aphrodite',
    'Hermes',
    'Hera',
    'Apollo',
    'Artemis',
    'Hades',
    'Demeter'
  ],
  Day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  Candy: [
    'Skittles',
    'Starburst',
    'Twizzlers',
    'Butterfinger',
    'Nerds',
    'Hershey',
    'M&M',
    'Baby Ruth',
    'Twix'
  ],
  Weather: [
    'Rain',
    'Snow',
    'Storm',
    'Blizzard',
    'Thunderstorm',
    'Hail',
    'Lightning',
    'Heat Wave',
    'Tornado',
    'Hurricane',
    'Ice Storm',
    'Wind'
  ]
}

const datasets = {
  species: species.value,
  clothes: clothes.value,
  details: details.value,
  hair: hair.value,
  eyes: eyes.value,
  skinTone: skinTone.value,
  height: height.value,
  build: build.value,
  mood: mood.value,
  colors: colors.value
}

const randomCharacterValue = (propertyName, dataSet) => {
  const randomValue = randomize(dataSet)

  character[propertyName] = randomValue
}

const randomize = (dataSet) => {
  // Check if the dataSet is an array or an object
  if (Array.isArray(dataSet)) {
    // If it's an array, get the length
    const length = dataSet.length

    // Check if the array is not empty
    if (length > 0) {
      // Generate a random index and return the corresponding item
      const randomIndex = Math.floor(Math.random() * length)
      return dataSet[randomIndex]
    } else {
      // If the array is empty, return null or handle it as needed
      return null
    }
  } else if (typeof dataSet === 'object' && dataSet !== null) {
    // If it's an object, get the keys
    const keys = Object.keys(dataSet)

    // Check if the object has any keys
    if (keys.length > 0) {
      // Choose a random key and return the corresponding value
      const randomKey = keys[Math.floor(Math.random() * keys.length)]
      return dataSet[randomKey]
    } else {
      // If the object has no keys, return null or handle it as needed
      return null
    }
  } else {
    // Handle other data types if needed
    return null
  }
}

const randomizeName = () => {
  const keys = Object.keys(name)
  const randomKey = keys[Math.floor(Math.random() * keys.length)]
  const randomDataset = name[randomKey]
  selectedCategory.value = randomKey
  randomCharacterValue('name', randomDataset)
  selectedOption.value = character.name
}

const randomizeRecursive = () => {
  for (const property in character) {
    if (character.hasOwnProperty(property) && character[property] === '') {
      const datasetForProperty = datasets[property]
      randomCharacterValue(property, datasetForProperty)

      if (property === 'name') {
        randomizeName()
      }
    }
  }
}

const saveCharacter = () => {
  randomizeRecursive()
  open.value = true
}

const closeModal = () => {
  character = reactive({
    species: '',
    clothes: '',
    details: '',
    hair: '',
    eyes: '',
    skinTone: '',
    height: '',
    build: '',
    mood: '',
    colors: '',
    name: ''
  })
  selectedCategory.value = '';
  selectedOption.value = '';
  open.value = false
}
</script>

<template>
  <main class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="md:flex md:items-center md:justify-between my-8 text-center">
      <div class="min-w-0 flex-1">
        <h2
          class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight"
        >
          Chun's OC Generator
        </h2>
        <p class="py-2 mt-2">You can either select the field option, hit the randomize button per field, or just hit the save button at the end and all values will be randomized</p>
      </div>
    </div>
    <form>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 textColor">Species</h2>
          <p class="mt-1 textColor text-sm leading-6">
            What is the species of the character. Select or Randomize
          </p>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <div class="mt-2">
                <select
                  id="species"
                  name="character-species"
                  autocomplete="character-species"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  v-model="character.species"
                >
                  <option value="" disabled>Select an option</option>
                  <option v-for="(item, index) in species" :key="index">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="sm:col-span-3">
              <button
                type="button"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click.prevent="randomCharacterValue('species', species)"
              >
                Randomize
              </button>
            </div>
          </div>
        </div>
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 textColor">Clothes</h2>
          <p class="mt-1 textColor text-sm leading-6">
            What clothing will the character wear? Select or Randomize
          </p>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <div class="mt-2">
                <select
                  id="clothes"
                  name="character-clothes"
                  autocomplete="character-clothes"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  v-model="character.clothes"
                >
                  <option value="" disabled>Select an option</option>
                  <option v-for="(item, index) in clothes" :key="index">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="sm:col-span-3">
              <button
                type="button"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click.prevent="randomCharacterValue('clothes', clothes)"
              >
                Randomize
              </button>
            </div>
          </div>
        </div>
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 textColor">Details</h2>
          <p class="mt-1 textColor text-sm leading-6">
            What little details will the character have. Select or Randomize
          </p>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <div class="mt-2">
                <select
                  id="details"
                  name="character-details"
                  autocomplete="character-details"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  v-model="character.details"
                >
                  <option value="" disabled>Select an option</option>
                  <option v-for="(item, index) in details" :key="index">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="sm:col-span-3">
              <button
                type="button"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click.prevent="randomCharacterValue('details', details)"
              >
                Randomize
              </button>
            </div>
          </div>
        </div>
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 textColor">Hair</h2>
          <p class="mt-1 textColor text-sm leading-6">
            What is the hair type of the character? Select or Randomize
          </p>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <div class="mt-2">
                <select
                  id="hair"
                  name="character-hair"
                  autocomplete="character-hair"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  v-model="character.hair"
                >
                  <option value="" disabled>Select an option</option>
                  <option v-for="(item, index) in hair" :key="index">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="sm:col-span-3">
              <button
                type="button"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click.prevent="randomCharacterValue('hair', hair)"
              >
                Randomize
              </button>
            </div>
          </div>
        </div>
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 textColor">Eyes</h2>
          <p class="mt-1 textColor text-sm leading-6">
            What are the eye color of the character. Select or Randomize
          </p>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <div class="mt-2">
                <select
                  id="eyes"
                  name="character-eyes"
                  autocomplete="character-eyes"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  v-model="character.eyes"
                >
                  <option value="" disabled>Select an option</option>
                  <option v-for="(item, index) in eyes" :key="index">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="sm:col-span-3">
              <button
                type="button"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click.prevent="randomCharacterValue('eyes', eyes)"
              >
                Randomize
              </button>
            </div>
          </div>
        </div>
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 textColor">Skin Tone</h2>
          <p class="mt-1 textColor text-sm leading-6">
            What is Skin tone of the character? Select or Randomize
          </p>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <div class="mt-2">
                <select
                  id="skinTone"
                  name="character-skin-tone"
                  autocomplete="character-skin-tone"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  v-model="character.skinTone"
                >
                  <option value="" disabled>Select an option</option>
                  <option v-for="(item, index) in skinTone" :key="index">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="sm:col-span-3">
              <button
                type="button"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click.prevent="randomCharacterValue('skinTone', skinTone)"
              >
                Randomize
              </button>
            </div>
          </div>
        </div>
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 textColor">height</h2>
          <p class="mt-1 textColor text-sm leading-6">
            What is the height of the character. Select or Randomize
          </p>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <div class="mt-2">
                <select
                  id="height"
                  name="character-height"
                  autocomplete="character-height"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  v-model="character.height"
                >
                  <option value="" disabled>Select an option</option>
                  <option v-for="(item, index) in height" :key="index">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="sm:col-span-3">
              <button
                type="button"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click.prevent="randomCharacterValue('height', height)"
              >
                Randomize
              </button>
            </div>
          </div>
        </div>
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 textColor">Build</h2>
          <p class="mt-1 textColor text-sm leading-6">
            What is the build of the character? Select or Randomize
          </p>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <div class="mt-2">
                <select
                  id="build"
                  name="character-build"
                  autocomplete="character-build"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  v-model="character.build"
                >
                  <option value="" disabled>Select an option</option>
                  <option v-for="(item, index) in build" :key="index">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="sm:col-span-3">
              <button
                type="button"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click.prevent="randomCharacterValue('build', build)"
              >
                Randomize
              </button>
            </div>
          </div>
        </div>
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 textColor">Mood</h2>
          <p class="mt-1 textColor text-sm leading-6">
            What is the mood of the character? Select or Randomize
          </p>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <div class="mt-2">
                <select
                  id="mood"
                  name="character-mood"
                  autocomplete="character-mood"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  v-model="character.mood"
                >
                  <option value="" disabled>Select an option</option>
                  <option v-for="(item, index) in mood" :key="index">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="sm:col-span-3">
              <button
                type="button"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click.prevent="randomCharacterValue('mood', mood)"
              >
                Randomize
              </button>
            </div>
          </div>
        </div>
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base font-semibold leading-7 textColor">Colors</h2>
          <p class="mt-1 textColor text-sm leading-6">
            What are the colors of the character? Select or Randomize
          </p>
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <div class="mt-2">
                <select
                  id="colors"
                  name="character-colors"
                  autocomplete="character-colors"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  v-model="character.colors"
                >
                  <option value="" disabled>Select an option</option>
                  <option v-for="(item, index) in colors" :key="index">{{ item }}</option>
                </select>
              </div>
            </div>
            <div class="sm:col-span-3">
              <button
                type="button"
                class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click.prevent="randomCharacterValue('colors', colors)"
              >
                Randomize
              </button>
            </div>
          </div>
        </div>
        <div class="border-b border-gray-900/10 pb-12">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-2 sm:col-start-1">
              <label for="city" class="block text-sm font-medium leading-6 text-gray-900"
                >Name Category</label
              >
              <div class="mt-2">
                <select
                  id="category"
                  name="character-category"
                  autocomplete="character-category"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  v-model="selectedCategory"
                  @change="updateOptions"
                >
                  <option value="" disabled>Select an option</option>
                  <option v-for="(item, category) in name" :key="category" :value="category">
                    {{ category }}
                  </option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="region" class="block text-sm font-medium leading-6 text-gray-900"
                >Name</label
              >
              <div class="mt-2">
                <select
                  id="options"
                  name="options"
                  autocomplete="options"
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  v-model="selectedOption"
                >
                  <option value="" disabled>Select an option</option>
                  <option v-for="option in name[selectedCategory]" :key="option">
                    {{ option }}
                  </option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-2">
              <button
                type="button"
                class="rounded-md bg-indigo-600 px-3 my-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                @click.prevent="randomizeName()"
              >
                Randomize
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="my-6 flex items-center justify-center gap-x-6">
        <button
          type="button"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click.prevent="saveCharacter"
        >
          Save
        </button>
      </div>
    </form>
    <div></div>
  </main>
  <div>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="open = false">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div
            class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enter-to="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leave-from="opacity-100 translate-y-0 sm:scale-100"
              leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel
                class="characterModal relative transform rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
              >
                <div>
                  <div
                    class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
                  >
                    <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <div class="mt-2">
                      <div class="overflow-hidden bg-white sm:rounded-lg">
                        <div class="px-4 py-6 sm:px-6">
                          <h3 class="text-base font-semibold leading-7 text-gray-900">Character</h3>
                          <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                            Character details
                          </p>
                        </div>
                        <div class="border-t border-gray-100">
                          <dl class="divide-y divide-gray-100">
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Name</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ character.name }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Species</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ character.species }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Clothes</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ character.clothes }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Details</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ character.details }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Hair</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ character.hair }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Eyes</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ character.eyes }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Skin Tone</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ character.skinTone }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Height</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ character.height }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Build</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ character.build }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Mood</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ character.mood }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Colors</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ character.colors }}
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-6">
                  <button
                    type="button"
                    class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    @click="closeModal"
                  >
                    Back to Generator
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<style scoped>
.characterModal {
  height: 800px;
  overflow: auto;
}
</style>
