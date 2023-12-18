import { defineStore } from 'pinia'
import { characterData } from '@/constants/characterData'
import { pickRandom } from '@/utils/functions'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    character: {
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
    },
    selectedCategory: ''
  }),
  getters: {
    isCompleteCharacter: (state) => Object.values(state).every((value) => value !== ''),
    selectedCategoryName: (state) => state.selectedCategory || null,
    selectedCategoryData: (state) => characterData.name[state.selectedCategory] || null
  },
  actions: {
    randomizeName() {
      const categories = Object.keys(characterData.name)
      const randomCategory = categories[Math.floor(Math.random() * categories.length)]
      this.character.name = pickRandom(characterData.name[randomCategory])
      this.selectedCategory = randomCategory
    },
    randomizeCharacter() {
      this.randomizeName()

      for (const property in this.character) {
        // ... check for empty values and access data from store
        if (this.character[property] === '') {
          this.character[property] = pickRandom(characterData[property])
        }
      }
    },
    saveCharacter() {
      this.randomizeCharacter()
    },
    clearCharacter() {
      this.$reset() // Resets state to initial values
    }
  }
})
