// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    port: 25001,
    host: '0.0.0.0'
  },
  vite: {
    server: {
      allowedHosts: [
        'aaronccenta.site',
        'www.aaronccenta.site',
        'localhost',
        '172.27.0.30'
      ]
    }
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
