import 'server-only'
 
export type Locale = keyof typeof dictionaries
 
const dictionaries = {
  en: () => import('@/app/[lang]/dictionaries/en.json').then((module) => module.default),
  pt: () => import('@/app/[lang]/dictionaries/pt.json').then((module) => module.default),
  es: () => import('@/app/[lang]/dictionaries/es.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: Locale) => {
  return locale == 'en' ? dictionaries.en() : locale == 'pt' ? dictionaries.pt() : dictionaries.es()
}