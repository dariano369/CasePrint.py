import { motion } from 'framer-motion'
import { Star, Heart } from 'lucide-react'
import { InstagramIcon, TikTokIcon } from '../ui/SocialIcons'
import { useLanguage } from '../../contexts/LanguageContext'
import { galleryImages, INSTAGRAM_URL, TIKTOK_URL } from '../../i18n/translations'
import { AnimatedSection, SectionHeading } from '../ui/SectionHeading'

export function SocialProof() {
  const { t, language } = useLanguage()

  const doubledGallery = [...galleryImages, ...galleryImages]

  return (
    <AnimatedSection id="social">
      <SectionHeading title={t.social.title} subtitle={t.social.subtitle} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-12 flex items-center justify-center gap-3 rounded-2xl border border-brand-accent/20 bg-brand-accent/5 py-5"
      >
        <Heart size={20} className="fill-brand-coral text-brand-coral" />
        <span className="font-display text-lg font-bold text-white">{t.social.happyClients}</span>
        <Heart size={20} className="fill-brand-coral text-brand-coral" />
      </motion.div>

      <div className="mb-16 grid gap-6 md:grid-cols-3">
        {t.social.reviews.map((review, i) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-3xl border border-white/10 bg-brand-elevated p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-brand-coral text-xs font-bold text-brand-dark">
                {review.avatar}
              </div>
              <div>
                <p className="font-display font-semibold text-white">{review.name}</p>
                <p className="text-xs text-brand-muted">{review.location[language]}</p>
              </div>
            </div>
            <div className="mb-3 flex gap-0.5">
              {Array.from({ length: review.rating }).map((_, j) => (
                <Star key={j} size={14} className="fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-brand-muted">{review.text[language]}</p>
          </motion.div>
        ))}
      </div>

      <div className="mb-6 flex items-center justify-between">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-brand-muted">
          {t.social.followUs}
        </p>
        <div className="flex gap-3">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-brand-muted transition hover:border-pink-500/50 hover:text-pink-400"
          >
            <InstagramIcon className="h-4 w-4" />
            @caseprint.py
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-brand-muted transition hover:border-white/30 hover:text-white"
          >
            <TikTokIcon className="h-4 w-4" />
            @caseprint.py
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10">
        <div className="flex animate-marquee gap-4 py-4">
          {doubledGallery.map((img, i) => (
            <motion.div
              key={`${img}-${i}`}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
              className="relative shrink-0 overflow-hidden rounded-2xl"
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                className="h-64 w-48 object-cover sm:h-72 sm:w-56"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {i % 3 === 0 && (
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-xs text-white backdrop-blur-sm">
                  <Heart size={10} className="fill-red-500 text-red-500" />
                  {(120 + i * 47).toLocaleString()}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
