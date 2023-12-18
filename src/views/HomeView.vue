<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline'
import { useCharacterStore } from '@/stores/characterStore'
import { characterData } from '@/constants/characterData'
import { pickRandom } from '@/utils/functions'

const open = ref(false)

const characterStore = useCharacterStore()

const randomCharacterValue = (propertyName, dataSet) => {
  if (characterStore) {
    characterStore.character[propertyName] = pickRandom(dataSet)
  } else {
    console.warn('Character state not initialized, cannot set properties')
  }
}

const saveCharacter = () => {
  characterStore.saveCharacter()
  open.value = true
}

const closeModal = () => {
  characterStore.clearCharacter()
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
        <p class="py-2 mt-2">
          You can either select the field option, hit the randomize button per field, or just hit
          the save button at the end and all values will be randomized
        </p>
      </div>
    </div>
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
                @click.prevent="randomCharacterValue('species', characterData.species)"
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
                @click.prevent="randomCharacterValue('clothes', characterData.clothes)"
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
                @click.prevent="randomCharacterValue('details', characterData.details)"
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
                @click.prevent="randomCharacterValue('hair', characterData.hair)"
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
                @click.prevent="randomCharacterValue('eyes', characterData.eyes)"
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
                  v-model="characterStore.character.skinTone"
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
                @click.prevent="randomCharacterValue('skinTone', characterData.skinTone)"
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
                  v-model="characterStore.character.height"
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
                @click.prevent="randomCharacterValue('height', characterData.height)"
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
                  v-model="characterStore.character.build"
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
                @click.prevent="randomCharacterValue('build', characterData.build)"
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
                  v-model="characterStore.character.mood"
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
                @click.prevent="randomCharacterValue('mood', characterData.mood)"
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
                @click.prevent="randomCharacterValue('colors', characterData.colors)"
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
                                {{ characterStore.character.name }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Species</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ characterStore.character.species }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Clothes</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ characterStore.character.clothes }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Details</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ characterStore.character.details }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Hair</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ characterStore.character.hair }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Eyes</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ characterStore.character.eyes }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Skin Tone</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ characterStore.character.skinTone }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Height</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ characterStore.character.height }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Build</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ characterStore.character.build }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Mood</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ characterStore.character.mood }}
                              </dd>
                            </div>
                            <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                              <dt class="text-sm font-medium text-gray-900">Colors</dt>
                              <dd
                                class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
                              >
                                {{ characterStore.character.colors }}
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
