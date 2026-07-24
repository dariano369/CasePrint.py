import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Upload, MessageCircle, X, Type } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { AnimatedSection, SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { buildWhatsAppUrl } from '../../i18n/translations'

type CaseStyle = 'matte' | 'glossy' | 'transparent'

export function CaseBuilder() {
  const { t } = useLanguage()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [phoneModel, setPhoneModel] = useState(t.builder.models[0])
  const [caseStyle, setCaseStyle] = useState<CaseStyle>('matte')
  const [customText, setCustomText] = useState('')

  const styleKeys: CaseStyle[] = ['matte', 'glossy', 'transparent']

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 10 * 1024 * 1024) return

    const reader = new FileReader()
    reader.onload = (ev) => setUploadedImage(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  const clearImage = () => {
    setUploadedImage(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const whatsappMessage = t.whatsapp.builderMessage
    .replace('{model}', phoneModel)
    .replace('{style}', t.builder.styles[caseStyle])
    .replace('{text}', customText || '—')

  const previewStyles: Record<CaseStyle, string> = {
    matte: 'opacity-95',
    glossy: 'brightness-110 saturate-125',
    transparent: 'opacity-80 mix-blend-screen',
  }

  return (
    <AnimatedSection id="builder">
      <SectionHeading
        title={t.builder.title}
        subtitle={t.builder.subtitle}
        badge="Custom Builder"
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-white">{t.builder.upload}</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleUpload}
              className="hidden"
            />
            {!uploadedImage ? (
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex w-full flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-white/15 bg-brand-elevated/50 px-6 py-12 transition hover:border-brand-accent/50 hover:bg-brand-elevated"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent">
                  <Upload size={24} />
                </div>
                <div className="text-center">
                  <p className="font-medium text-white">{t.builder.upload}</p>
                  <p className="mt-1 text-sm text-brand-muted">{t.builder.uploadHint}</p>
                </div>
              </button>
            ) : (
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img src={uploadedImage} alt="Upload preview" className="aspect-video w-full object-cover" />
                <button
                  type="button"
                  onClick={clearImage}
                  className="absolute right-3 top-3 rounded-full bg-brand-dark/80 p-2 text-white backdrop-blur-sm transition hover:bg-brand-dark"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="phone-model" className="mb-2 block text-sm font-medium text-white">
              {t.builder.phoneModel}
            </label>
            <select
              id="phone-model"
              value={phoneModel}
              onChange={(e) => setPhoneModel(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-brand-elevated px-4 py-3 text-sm text-white outline-none transition focus:border-brand-accent/50"
            >
              {t.builder.models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-white">{t.builder.caseStyle}</label>
            <div className="grid grid-cols-3 gap-3">
              {styleKeys.map((style) => (
                <button
                  key={style}
                  type="button"
                  onClick={() => setCaseStyle(style)}
                  className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                    caseStyle === style
                      ? 'border-brand-accent bg-brand-accent/10 text-brand-accent'
                      : 'border-white/10 text-brand-muted hover:border-white/20 hover:text-white'
                  }`}
                >
                  {t.builder.styles[style]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="custom-text" className="mb-2 block text-sm font-medium text-white">
              {t.builder.customText}
            </label>
            <div className="relative">
              <Type size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted" />
              <input
                id="custom-text"
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder={t.builder.customTextPlaceholder}
                maxLength={40}
                className="w-full rounded-xl border border-white/10 bg-brand-elevated py-3 pl-11 pr-4 text-sm text-white placeholder:text-brand-muted/60 outline-none transition focus:border-brand-accent/50"
              />
            </div>
          </div>

          <Button href={buildWhatsAppUrl(whatsappMessage)} variant="whatsapp" size="lg" className="w-full">
            <MessageCircle size={18} />
            {t.builder.orderWhatsApp}
          </Button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-brand-muted">
            {t.builder.preview}
          </p>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="relative mx-auto w-64 sm:w-72">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-brand-accent/20 to-brand-coral/20 blur-2xl" />

              <div className="relative rounded-[2.5rem] border-[3px] border-gray-700 bg-gray-900 p-2 shadow-2xl">
                <div className="relative overflow-hidden rounded-[2rem] bg-black aspect-[9/19]">
                  <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-2">
                    <div className="h-6 w-24 rounded-full bg-black" />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    {uploadedImage ? (
                      <img
                        src={uploadedImage}
                        alt="Case preview"
                        className={`h-full w-full rounded-2xl object-cover ${previewStyles[caseStyle]}`}
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-brand-accent/20 to-brand-coral/20 p-6 text-center">
                        <Upload size={32} className="mb-3 text-brand-muted" />
                        <p className="text-xs text-brand-muted">{t.builder.previewEmpty}</p>
                      </div>
                    )}
                  </div>

                  {customText && (
                    <div className="absolute bottom-16 inset-x-0 z-10 px-4 text-center">
                      <span className="rounded-lg bg-black/50 px-3 py-1 text-sm font-display font-bold text-white backdrop-blur-sm">
                        {customText}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute -right-2 top-1/3 rounded-xl border border-white/10 bg-brand-elevated/90 px-3 py-2 text-xs backdrop-blur-xl">
                <p className="text-brand-muted">{phoneModel}</p>
                <p className="font-semibold text-brand-accent">{t.builder.styles[caseStyle]}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
