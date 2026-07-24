import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import { AnimatedSection, SectionHeading } from '../ui/SectionHeading'

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <AnimatedSection id="how-it-works" className="bg-brand-surface/50">
      <SectionHeading title={t.howItWorks.title} subtitle={t.howItWorks.subtitle} />

      <div className="relative">
        <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-brand-accent via-brand-coral to-transparent lg:block lg:left-1/2" />

        <div className="space-y-8 lg:space-y-12">
          {t.howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex flex-col gap-6 lg:flex-row lg:items-center ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                <div
                  className={`inline-flex items-center gap-4 rounded-3xl border border-white/10 bg-brand-elevated p-6 lg:max-w-md ${
                    i % 2 === 0 ? 'lg:ml-auto' : ''
                  }`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-accent to-brand-coral font-display text-lg font-bold text-brand-dark">
                    {i + 1}
                  </span>
                  <div className="text-left">
                    <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-muted">{step.description}</p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:flex lg:w-16 lg:items-center lg:justify-center">
                <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full bg-brand-accent ring-4 ring-brand-dark">
                  <div className="h-2 w-2 rounded-full bg-brand-dark" />
                </div>
              </div>

              <div className="hidden flex-1 lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
