import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'h2eja6',
  e2e: {
    baseUrl: process.env.NEXT_PUBLIC_CY_BASE_URL,
    watchForFileChanges: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
