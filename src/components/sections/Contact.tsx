import { motion } from 'framer-motion'
import { MessageCircle, MapPin, Clock } from 'lucide-react'
import { InstagramIcon, TikTokIcon } from '../ui/SocialIcons'
import { useLanguage } from '../../contexts/LanguageContext'
import { AnimatedSection, SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { buildWhatsAppUrl, INSTAGRAM_URL, TIKTOK_URL } from '../../i18n/translations'

const contactLinks = [
  {
    key: 'whatsapp' as const,
    icon: 'whatsapp' as const,
    href: () => buildWhatsAppUrl('¡Hola CasePrint! Quiero hacer un pedido.'),
    color: 'hover:border-[#25D366]/50 hover:text-[#25D366]',
  },
  {
    key: 'instagram' as const,
    icon: 'instagram' as const,
    href: () => INSTAGRAM_URL,
    color: 'hover:border-pink-500/50 hover:text-pink-400',
  },
  {
    key: 'tiktok' as const,
    icon: 'tiktok' as const,
    href: () => TIKTOK_URL,
    color: 'hover:border-white/30 hover:text-white',
  },
]

export function Contact() {
  const { t } = useLanguage()

  return (
    <AnimatedSection id="contact">
      <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {contactLinks.map((link, i) => {
            const label = t.contact[link.key]
            return (
              <motion.a
                key={link.key}
                href={link.href()}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`flex flex-col items-center gap-3 rounded-3xl border border-white/10 bg-brand-elevated p-8 text-center transition ${link.color}`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
                  {link.icon === 'whatsapp' && <MessageCircle size={24} className="fill-current" />}
                  {link.icon === 'instagram' && <InstagramIcon className="h-6 w-6" />}
                  {link.icon === 'tiktok' && <TikTokIcon className="h-6 w-6" />}
                </div>
                <span className="font-display font-semibold text-white">{label}</span>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-brand-elevated p-8"
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-brand-muted">{t.contact.location}</p>
                <p className="mt-1 font-display text-lg font-semibold text-white">{t.contact.locationValue}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-coral/10 text-brand-coral">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-brand-muted">{t.contact.hours}</p>
                <p className="mt-1 font-display text-lg font-semibold text-white">{t.contact.hoursValue}</p>
              </div>
            </div>
          </div>

          <Button
            href={buildWhatsAppUrl('¡Hola CasePrint! Quiero hacer un pedido.')}
            variant="whatsapp"
            size="lg"
            className="mt-8 w-full"
          >
            <MessageCircle size={18} />
            {t.contact.writeUs}
          </Button>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
