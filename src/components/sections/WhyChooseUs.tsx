import { motion } from 'framer-motion'
import { Sparkles, Printer, Crown, Zap, MapPin } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { AnimatedSection, SectionHeading } from '../ui/SectionHeading'

const icons = [Sparkles, Printer, Crown, Zap, MapPin]

export function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <AnimatedSection className="relative overflow-hidden bg-brand-surface/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,229,204,0.05)_0%,_transparent_70%)]" />

      <SectionHeading title={t.benefits.title} subtitle={t.benefits.subtitle} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.benefits.items.map((item, i) => {
          const Icon = icons[i]
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-3xl border border-white/10 bg-brand-elevated/50 p-8 transition hover:border-brand-accent/30 hover:bg-brand-elevated"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent transition group-hover:bg-brand-accent group-hover:text-brand-dark">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{item.description}</p>
            </motion.div>
          )
        })}
      </div>
    </AnimatedSection>
  )
}
