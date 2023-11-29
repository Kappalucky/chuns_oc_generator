import './assets/main.css'
import { initializeApp } from 'firebase/app'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: String(import.meta.env.VITE_API_KEY),
  authDomain: String(import.meta.env.VITE_AUTH_DOMAIN),
  projectId: String(import.meta.env.VITE_PROJECT_ID),
  storageBucket: String(import.meta.env.VITE_STORAGE_BUCKET),
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: String(import.meta.env.VITE_APP_ID),
  measurementId: String(import.meta.env.VITE_MEASUREMENT_ID)
}

// Initialize Firebase
initializeApp(firebaseConfig)
