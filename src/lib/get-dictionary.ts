import 'server-only'
 
export type Locale = keyof typeof dictionaries
 
const dictionaries = {
  en: () => import('@/app/[lang]/dictionaries/en.json').then((module) => module.default),
  pt: () => import('@/app/[lang]/dictionaries/pt.json').then((module) => module.default),
  es: () => import('@/app/[lang]/dictionaries/es.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: string) => {
  if (locale == 'pt') { return dictionaries.pt() }
  if (locale == 'es') { return dictionaries.es() }
  
  return dictionaries.en()
}