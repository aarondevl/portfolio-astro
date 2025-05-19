// Importar archivos de traducción
import es from './locales/es.json';
import en from './locales/en.json';

// Lista de idiomas disponibles
export const languages = {
  'Español': 'es',
  'English': 'en',
};

// Idioma predeterminado
export const defaultLang = 'es';

// Agrupación de traducciones
const translations = { es, en };

// Función para obtener el idioma actual de forma consistente
export function getLanguageFromURL(url: URL): string {
  const [, lang] = url.pathname.split('/');
  if (Object.values(languages).includes(lang)) {
    return lang;
  }
  return defaultLang;
}

// Tipo para acceder a las traducciones anidadas con notación de puntos
type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`;

export type DotNestedKeys<T> = (T extends object
  ? { [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<DotNestedKeys<T[K]>>}` }[Exclude<keyof T, symbol>]
  : '') extends infer D
  ? Extract<D, string>
  : never;

export type TranslationKey = DotNestedKeys<typeof es>;

// Función para obtener una traducción por su clave usando notación de puntos
export function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((prev, curr) => prev && prev[curr], obj) as string;
}

// Función principal para usar traducciones
export function useTranslations(lang: keyof typeof translations) {
  return function t(key: TranslationKey): string {
    // Intentar obtener la traducción del idioma actual
    const translation = getNestedValue(translations[lang], key);
    
    // Si no existe, intentar con el idioma predeterminado
    if (!translation && lang !== defaultLang) {
      return getNestedValue(translations[defaultLang], key);
    }
    
    return translation || key;
  };
}

// Función para simplificar el acceso a traducciones desde componentes Astro
export function useTranslationsFromAstro(Astro: { url: URL; currentLocale?: string; params?: { lang?: string } }): (key: TranslationKey) => string {
  // Priorizar Astro.params.lang, luego Astro.currentLocale, finalmente defaultLang
  const lang = (Astro.params?.lang || Astro.currentLocale || defaultLang) as keyof typeof translations;
  return useTranslations(lang);
} 