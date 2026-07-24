import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { buildWhatsAppUrl } from '../../i18n/translations'

export function FloatingWhatsApp() {
  const { t } = useLanguage()

  return (
    <motion.a
      href={buildWhatsAppUrl('¡Hola CasePrint! Necesito ayuda con mi pedido.')}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 text-white shadow-2xl shadow-[#25D366]/30"
      aria-label={t.whatsapp.float}
    >
      <MessageCircle size={22} className="fill-white" />
      <span className="hidden font-display text-sm font-semibold sm:inline">{t.whatsapp.float}</span>
    </motion.a>
  )
}
