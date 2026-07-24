import { motion } from 'framer-motion'
import { MessageCircle, Smartphone } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Button } from '../ui/Button'
import type { Product } from '../../i18n/translations'
import { buildWhatsAppUrl, formatPrice } from '../../i18n/translations'

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { t, language } = useLanguage()

  const message = t.whatsapp.productMessage
    .replace('{name}', product.name[language])
    .replace('{models}', product.models.join(' / '))
    .replace('{price}', formatPrice(product.price))

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-brand-elevated"
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name[language]}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} to-transparent opacity-60`} />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-1.5 text-xs text-white/80">
            <Smartphone size={12} />
            {product.models.join(' · ')}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-white">{product.name[language]}</h3>
        <p className="mt-1 text-sm text-brand-muted">
          {t.products.from}{' '}
          <span className="font-semibold text-brand-accent">Gs. {formatPrice(product.price)}</span>
        </p>
        <Button
          href={buildWhatsAppUrl(message)}
          variant="whatsapp"
          size="sm"
          className="mt-4 w-full"
        >
          <MessageCircle size={16} />
          {t.products.buyWhatsApp}
        </Button>
      </div>
    </motion.article>
  )
}
