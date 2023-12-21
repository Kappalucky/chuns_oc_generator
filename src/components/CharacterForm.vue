<script setup>
import { useCharacterStore } from '@/stores/characterStore'
defineProps({
  characterData: Object
})
const emit = defineEmits(['randomCharacterValue', 'saveCharacter'])

const characterStore = useCharacterStore()

const updateCharacter = (property, data) => {
  emit('randomCharacterValue', property, data)
}
const saveCharacter = () => {
  emit('saveCharacter')
}
</script>
<template>
  <form>
    <div class="space-y-12">
      <div class="my-6 flex items-center justify-center gap-x-6">
        <button
          type="button"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click.prevent="saveCharacter"
        >
          Random Character
        </button>
      </div>
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
                v-model="characterStore.character.species"
              >
                <option value="" disabled>Select an option</option>
                <option v-for="(item, index) in characterData.species" :key="index">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="button"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click.prevent="updateCharacter('species', characterData.species)"
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
                v-model="characterStore.character.clothes"
              >
                <option value="" disabled>Select an option</option>
                <option v-for="(item, index) in characterData.clothes" :key="index">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="button"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click.prevent="updateCharacter('clothes', characterData.clothes)"
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
                v-model="characterStore.character.details"
              >
                <option value="" disabled>Select an option</option>
                <option v-for="(item, index) in characterData.details" :key="index">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="button"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click.prevent="updateCharacter('details', characterData.details)"
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
                v-model="characterStore.character.hair"
              >
                <option value="" disabled>Select an option</option>
                <option v-for="(item, index) in characterData.hair" :key="index">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="button"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click.prevent="updateCharacter('hair', characterData.hair)"
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
                v-model="characterStore.character.eyes"
              >
                <option value="" disabled>Select an option</option>
                <option v-for="(item, index) in characterData.eyes" :key="index">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="button"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click.prevent="updateCharacter('eyes', characterData.eyes)"
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
                :value="characterStore.character.skinTone"
                @input="emit('update:characterStore.character.skinTone', $event.target.value)"
              >
                <option value="" disabled>Select an option</option>
                <option v-for="(item, index) in characterData.skinTone" :key="index">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="button"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click.prevent="emit('randomCharacterValue', 'skinTone', characterData.skinTone)"
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
                :value="characterStore.character.height"
                @input="emit('update:characterStore.character.height', $event.target.value)"
              >
                <option value="" disabled>Select an option</option>
                <option v-for="(item, index) in characterData.height" :key="index">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="button"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click.prevent="emit('randomCharacterValue', 'height', characterData.height)"
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
                :value="characterStore.character.build"
                @input="emit('update:characterStore.character.build', $event.target.value)"
              >
                <option value="" disabled>Select an option</option>
                <option v-for="(item, index) in characterData.build" :key="index">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="button"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click.prevent="emit('randomCharacterValue', 'build', characterData.build)"
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
                :value="characterStore.character.mood"
                @input="emit('update:characterStore.character.mood', $event.target.value)"
              >
                <option value="" disabled>Select an option</option>
                <option v-for="(item, index) in characterData.mood" :key="index">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="button"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click.prevent="emit('randomCharacterValue', 'mood', characterData.mood)"
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
                v-model="characterStore.character.colors"
              >
                <option value="" disabled>Select an option</option>
                <option v-for="(item, index) in characterData.colors" :key="index">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="sm:col-span-3">
            <button
              type="button"
              class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click.prevent="updateCharacter('colors', characterData.colors)"
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
        Random Character
      </button>
    </div>
  </form>
</template>
