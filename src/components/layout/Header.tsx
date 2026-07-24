import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage, languageLabels } from '../../contexts/LanguageContext'
import { Button } from '../ui/Button'
import type { Language } from '../../i18n/translations'

const languages: Language[] = ['es', 'en', 'de', 'pt']

export function Header() {
  const { t, language, setLanguage } = useLanguage()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const navLinks = [
    { href: '#designs', label: t.nav.designs },
    { href: '#builder', label: t.nav.builder },
    { href: '#how-it-works', label: t.nav.howItWorks },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-brand-dark/80 px-4 py-3 backdrop-blur-xl sm:px-6">
          <a href="#" className="group flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent to-brand-coral">
              <span className="font-display text-sm font-bold text-brand-dark">CP</span>
            </div>
            <span className="font-display text-lg font-bold tracking-tight">
              CasePrint<span className="text-brand-accent">.py</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-muted transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-brand-muted transition hover:border-white/20 hover:text-white"
              >
                {languageLabels[language]}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    className="absolute right-0 top-full mt-2 min-w-[100px] overflow-hidden rounded-xl border border-white/10 bg-brand-elevated shadow-xl"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => {
                          setLanguage(lang)
                          setLangOpen(false)
                        }}
                        className={`block w-full px-4 py-2.5 text-left text-sm transition hover:bg-white/5 ${
                          language === lang ? 'text-brand-accent' : 'text-brand-muted'
                        }`}
                      >
                        {languageLabels[lang]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button href="#builder" size="sm" className="hidden sm:inline-flex">
              {t.nav.createCase}
            </Button>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-xl p-2 text-brand-muted hover:bg-white/5 hover:text-white lg:hidden"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-brand-elevated lg:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-brand-muted transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <Button href="#builder" size="md" className="mt-2 w-full">
                {t.nav.createCase}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
