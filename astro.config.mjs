// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 25001
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    fallback: {
      "en": "es"
    },
    routing: {
      prefixDefaultLocale: true
    }
  }
});
