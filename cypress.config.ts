import { defineConfig } from "cypress";
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

export default defineConfig({
  projectId: 'h2eja6',
  e2e: {
    baseUrl: process.env.NEXT_PUBLIC_CY_BASE_URL || 'http://localhost:3000',
    env: {
      URL: process.env.NEXT_PUBLIC_CY_BASE_URL || 'http://localhost:3000',
    },
    watchForFileChanges: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
