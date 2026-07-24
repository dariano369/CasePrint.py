import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { InstagramIcon, TikTokIcon } from '../ui/SocialIcons'
import { useLanguage } from '../../contexts/LanguageContext'
import { INSTAGRAM_URL, TIKTOK_URL } from '../../i18n/translations'

export function Footer() {
  const { t } = useLanguage()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <footer className="border-t border-white/10 bg-brand-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent to-brand-coral">
                <span className="font-display text-sm font-bold text-brand-dark">CP</span>
              </div>
              <span className="font-display text-lg font-bold">
                CasePrint<span className="text-brand-accent">.py</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-brand-muted">{t.footer.description}</p>
            <div className="mt-6 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-brand-muted transition hover:border-brand-accent/50 hover:text-brand-accent"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-brand-muted transition hover:border-brand-accent/50 hover:text-brand-accent"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">FAQ</h3>
            <div className="mt-4 space-y-2">
              {t.footer.faq.map((item, i) => (
                <div key={item.question} className="rounded-xl border border-white/5">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-brand-muted transition hover:text-white"
                  >
                    {item.question}
                    <ChevronDown
                      size={16}
                      className={`shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <p className="border-t border-white/5 px-4 py-3 text-sm leading-relaxed text-brand-muted">
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.shipping.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {t.footer.shipping.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brand-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              {t.footer.payment.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {t.footer.payment.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brand-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-coral" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-brand-muted">
            © {new Date().getFullYear()} CasePrint.py. {t.footer.rights}
          </p>
          <p className="text-sm text-brand-muted">{t.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  )
}
