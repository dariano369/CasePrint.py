import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { translations, type Language, type Translations } from '../i18n/translations'

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const languageLabels: Record<Language, string> = {
  es: 'ES',
  en: 'EN',
  de: 'DE',
  pt: 'PT',
}

export { languageLabels }

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('caseprint-lang') as Language | null
    return saved && translations[saved] ? saved : 'es'
  })

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('caseprint-lang', lang)
    document.documentElement.lang = lang === 'es' ? 'es-PY' : lang
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
