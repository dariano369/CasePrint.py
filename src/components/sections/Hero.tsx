import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { Button } from '../ui/Button'

export function Hero() {
  const { t } = useLanguage()

  const stats = [
    t.hero.stats.clients,
    t.hero.stats.designs,
    t.hero.stats.rating,
  ]

  return (
    <section className="relative min-h-screen overflow-hidden pt-28 pb-16 lg:pt-36">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,229,204,0.12)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,107,74,0.08)_0%,_transparent_40%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-2 text-sm font-medium text-brand-accent"
            >
              <Sparkles size={14} />
              {t.hero.badge}
            </motion.span>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="text-gradient">{t.hero.headline}</span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-brand-muted sm:text-xl">
              {t.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#builder" size="lg">
                {t.hero.ctaCreate}
                <ArrowRight size={18} />
              </Button>
              <Button href="#designs" variant="secondary" size="lg">
                {t.hero.ctaBrowse}
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-sm"
                >
                  <span className="font-display font-bold text-white">{stat.split(' ')[0]}</span>
                  <span className="ml-1 text-brand-muted">{stat.split(' ').slice(1).join(' ')}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-brand-accent/10 blur-3xl animate-pulse-glow" />

              <div className="relative grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=600&fit=crop',
                  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=600&fit=crop',
                  'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=600&fit=crop',
                  'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=600&fit=crop',
                ].map((img, i) => (
                  <motion.div
                    key={img}
                    animate={{ y: i % 2 === 0 ? [0, -8, 0] : [0, 8, 0] }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
                    className={`overflow-hidden rounded-3xl border border-white/10 shadow-2xl ${
                      i === 1 ? 'mt-8' : i === 2 ? '-mt-4' : ''
                    }`}
                  >
                    <img src={img} alt="" className="aspect-[3/4] w-full object-cover sm:w-44 lg:w-52" loading="eager" />
                  </motion.div>
                ))}
              </div>

              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -right-4 top-1/4 hidden rounded-2xl border border-white/10 bg-brand-elevated/90 px-4 py-3 backdrop-blur-xl sm:block"
              >
                <p className="text-xs text-brand-muted">Nuevo diseño</p>
                <p className="font-display font-bold text-brand-accent">Y2K Drop ✨</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-brand-dark to-transparent" />
    </section>
  )
}
