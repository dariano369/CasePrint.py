import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  badge?: string
}

export function SectionHeading({ title, subtitle, align = 'center', badge }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 lg:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  )
}

interface AnimatedSectionProps {
  children: ReactNode
  id?: string
  className?: string
}

export function AnimatedSection({ children, id, className = '' }: AnimatedSectionProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}
