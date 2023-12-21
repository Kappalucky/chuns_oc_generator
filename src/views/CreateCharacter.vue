<script setup>
import { ref } from 'vue'
import { useCharacterStore } from '@/stores/characterStore'
import { characterData } from '@/constants/characterData'
import { pickRandom } from '@/utils/functions'
import CharacterForm from '@/components/CharacterForm.vue'
import CharacterModal from '@/components/CharacterModal.vue'

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
      :character-data="characterData"
      @random-character-value="randomCharacterValue"
    />
  </main>
  <CharacterModal :open="open" :character-store="characterStore" @close-modal="closeModal" />
</template>
<style scoped>
.characterModal {
  height: 800px;
  overflow: auto;
}

main {
  padding: 10px;
}
</style>
