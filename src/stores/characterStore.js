import { defineStore } from 'pinia'
import { characterData } from '@/constants/characterData'
import { randomize } from '@/utils/functions'

export const useCharacterStore = defineStore('character', {
  state: () => ({
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
  }),
  getters: {
    isCompleteCharacter: (state) => Object.values(state).every((value) => value !== '')
  },
  actions: {
    randomizeRecursive() {
      for (const property in this.character) {
        // ... check for empty values and access data from store
        if (this.character[property] === '') {
          const dataSet = characterData[property] // Use characterData object
          this.character[property] = randomize(dataSet) // Update state directly
        }
      }
    },
    saveCharacter() {
      this.randomizeRecursive()
    },
    clearCharacter() {
      this.$reset() // Resets state to initial values
    }
  }
})
