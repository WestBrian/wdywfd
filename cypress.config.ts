import { defineConfig } from 'cypress'
import { plugin as cypressFirebasePlugin } from 'cypress-firebase'
import admin from 'firebase-admin'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      cypressFirebasePlugin(on, config, admin)
    },
  },
})
