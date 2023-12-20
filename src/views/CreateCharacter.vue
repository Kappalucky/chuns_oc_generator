<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline'
import { useCharacterStore } from '@/stores/characterStore'
import { characterData } from '@/constants/characterData'
import { pickRandom } from '@/utils/functions'
import CharacterForm from '@/components/CharacterForm.vue'

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
    <CharacterForm
      @save-character="saveCharacter"
      :character-store="characterStore"
      :character-data="characterData"
      @random-character-value="randomCharacterValue"
    />
  </main>
  <div>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-10" @close="closeModal">
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
