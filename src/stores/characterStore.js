import { defineStore } from 'pinia'
import { characterData } from '@/constants/characterData'
import { pickRandom } from '@/utils/functions'

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
    randomizeCharacter() {
      for (const property in this.character) {
        // ... check for empty values and access data from store
        if (this.character[property] === '') {
          this.character[property] = pickRandom(characterData[property])
        }
      }
    },
    saveCharacter() {
      console.log('in store')
      this.randomizeCharacter()
    },
    clearCharacter() {
      this.$reset() // Resets state to initial values
    }
  }
})
