import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import { products } from '../../i18n/translations'
import { AnimatedSection, SectionHeading } from '../ui/SectionHeading'
import { ProductCard } from '../ui/ProductCard'

const categoryKeys = ['personalizados', 'premium', 'futbol', 'minimalistas', 'tendencias', 'parejas'] as const

export function ProductShowcase() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<string>('personalizados')

  const filtered = products.filter((p) => p.category === activeCategory)

  return (
    <AnimatedSection id="designs" className="bg-brand-surface/50">
      <SectionHeading title={t.products.title} subtitle={t.products.subtitle} />

      <div className="mb-10 flex gap-2 overflow-x-auto hide-scrollbar pb-2">
        {categoryKeys.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveCategory(key)}
            className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              activeCategory === key
                ? 'bg-brand-accent text-brand-dark shadow-lg shadow-brand-accent/20'
                : 'border border-white/10 text-brand-muted hover:border-white/20 hover:text-white'
            }`}
          >
            {t.products.categories[key]}
          </button>
        ))}
      </div>

      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filtered.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </motion.div>
    </AnimatedSection>
  )
}
