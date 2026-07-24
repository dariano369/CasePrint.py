import { LanguageProvider } from './contexts/LanguageContext'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp'
import { Hero } from './components/sections/Hero'
import { ProductShowcase } from './components/sections/ProductShowcase'
import { CaseBuilder } from './components/sections/CaseBuilder'
import { WhyChooseUs } from './components/sections/WhyChooseUs'
import { SocialProof } from './components/sections/SocialProof'
import { HowItWorks } from './components/sections/HowItWorks'
import { Contact } from './components/sections/Contact'

import { SeoSchema } from './components/SeoSchema'

function App() {
  return (
    <LanguageProvider>
      <SeoSchema />
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
        <CaseBuilder />
        <WhyChooseUs />
        <SocialProof />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </LanguageProvider>
  )
}

export default App
