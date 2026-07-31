export type Language = 'es' | 'en' | 'de' | 'pt'

export interface Product {
  id: string
  name: Record<Language, string>
  category: string
  models: string[]
  price: number
  image: string
  gradient: string
}

export interface Review {
  id: string
  name: string
  location: Record<Language, string>
  text: Record<Language, string>
  rating: number
  avatar: string
}

export interface Translations {
  meta: {
    tagline: string
  }
  nav: {
    designs: string
    builder: string
    howItWorks: string
    contact: string
    createCase: string
  }
  hero: {
    headline: string
    subheadline: string
    ctaCreate: string
    ctaBrowse: string
    badge: string
    stats: { clients: string; designs: string; rating: string }
  }
  products: {
    title: string
    subtitle: string
    buyWhatsApp: string
    from: string
    categories: Record<string, string>
  }
  builder: {
    title: string
    subtitle: string
    upload: string
    uploadHint: string
    phoneModel: string
    caseStyle: string
    customText: string
    customTextPlaceholder: string
    preview: string
    previewEmpty: string
    orderWhatsApp: string
    styles: Record<string, string>
    models: string[]
  }
  benefits: {
    title: string
    subtitle: string
    items: { title: string; description: string }[]
  }
  social: {
    title: string
    subtitle: string
    happyClients: string
    reviews: Review[]
    followUs: string
  }
  howItWorks: {
    title: string
    subtitle: string
    steps: { title: string; description: string }[]
  }
  contact: {
    title: string
    subtitle: string
    whatsapp: string
    instagram: string
    tiktok: string
    location: string
    locationValue: string
    hours: string
    hoursValue: string
    writeUs: string
  }
  footer: {
    description: string
    faq: { question: string; answer: string }[]
    shipping: { title: string; items: string[] }
    payment: { title: string; items: string[] }
    rights: string
    madeIn: string
  }
  whatsapp: {
    float: string
    productMessage: string
    builderMessage: string
  }
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Camila R.',
    location: { es: 'Asunción', en: 'Asunción', de: 'Asunción', pt: 'Assunção' },
    text: {
      es: '¡La calidad de impresión es increíble! Mi diseño quedó tal cual lo pedí. Súper recomendado.',
      en: 'The print quality is incredible! My design came out exactly as I requested. Highly recommended.',
      de: 'Die Druckqualität ist unglaublich! Mein Design kam genau so raus, wie ich es wollte.',
      pt: 'A qualidade de impressão é incrível! Meu design ficou exatamente como pedi.',
    },
    rating: 5,
    avatar: 'CR',
  },
  {
    id: '2',
    name: 'Mateo G.',
    location: { es: 'Ciudad del Este', en: 'Ciudad del Este', de: 'Ciudad del Este', pt: 'Ciudad del Este' },
    text: {
      es: 'Pedí fundas para mi equipo de fútbol y quedaron espectaculares. Atención rapidísimo por WhatsApp.',
      en: 'I ordered cases for my football team and they looked amazing. Super fast WhatsApp support.',
      de: 'Habe Hüllen für mein Fußballteam bestellt — spektakulär. Blitzschneller WhatsApp-Service.',
      pt: 'Pedi capas pro meu time de futebol e ficaram espetaculares. Atendimento rapidíssimo no WhatsApp.',
    },
    rating: 5,
    avatar: 'MG',
  },
  {
    id: '3',
    name: 'Valentina S.',
    location: { es: 'Encarnación', en: 'Encarnación', de: 'Encarnación', pt: 'Encarnação' },
    text: {
      es: 'Hice fundas de pareja con mi novio y nos encantaron. Se nota que es hecho con cariño acá en Py.',
      en: 'Made matching couple cases with my boyfriend and we loved them. You can tell they\'re made with care here in Py.',
      de: 'Partner-Hüllen mit meinem Freund gemacht — wir lieben sie. Man merkt die Liebe aus Paraguay.',
      pt: 'Fiz capas de casal com meu namorado e amamos. Dá pra ver o carinho feito aqui no Py.',
    },
    rating: 5,
    avatar: 'VS',
  },
]

export const products: Product[] = [
  {
    id: 'custom-1',
    name: { es: 'Tu Foto Custom', en: 'Your Custom Photo', de: 'Dein Custom-Foto', pt: 'Sua Foto Custom' },
    category: 'personalizados',
    models: ['iPhone 15 Pro', 'Samsung S24'],
    price: 80500,
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=800&fit=crop',
    gradient: 'from-violet-600/40 to-fuchsia-600/40',
  },
  {
    id: 'custom-2',
    name: { es: 'Collage de Recuerdos', en: 'Memory Collage', de: 'Erinnerungs-Collage', pt: 'Colagem de Memórias' },
    category: 'personalizados',
    models: ['iPhone 14', 'Samsung A54'],
    price: 75000,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=800&fit=crop',
    gradient: 'from-amber-500/40 to-orange-600/40',
  },
  {
    id: 'premium-1',
    name: { es: 'Marble Gold', en: 'Marble Gold', de: 'Marmor Gold', pt: 'Mármore Gold' },
    category: 'premium',
    models: ['iPhone 15', 'Samsung S23 Ultra'],
    price: 70000,
    image: 'https://images.unsplash.com/photo-1616344567074-8478a0adad4d?w=600&h=800&fit=crop',
    gradient: 'from-stone-400/40 to-amber-300/40',
  },
  {
    id: 'premium-2',
    name: { es: 'Neon Cyber', en: 'Neon Cyber', de: 'Neon Cyber', pt: 'Neon Cyber' },
    category: 'premium',
    models: ['iPhone 15 Pro Max', 'Samsung S24 Ultra'],
    price: 75000,
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=800&fit=crop',
    gradient: 'from-cyan-500/40 to-blue-600/40',
  },
  {
    id: 'futbol-1',
    name: { es: 'Olimpia Edition', en: 'Olimpia Edition', de: 'Olimpia Edition', pt: 'Olimpia Edition' },
    category: 'futbol',
    models: ['iPhone 14 Pro', 'Samsung S22'],
    price: 65000,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=800&fit=crop',
    gradient: 'from-black/60 to-white/20',
  },
  {
    id: 'futbol-2',
    name: { es: 'Libertadores Vibes', en: 'Libertadores Vibes', de: 'Libertadores Vibes', pt: 'Libertadores Vibes' },
    category: 'futbol',
    models: ['iPhone 13', 'Samsung A34'],
    price: 65000,
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=800&fit=crop',
    gradient: 'from-yellow-500/40 to-red-600/40',
  },
  {
    id: 'minimal-1',
    name: { es: 'Clean White', en: 'Clean White', de: 'Clean White', pt: 'Clean White' },
    category: 'minimalistas',
    models: ['iPhone 15', 'Samsung S24'],
    price: 60000,
    image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762c?w=600&h=800&fit=crop',
    gradient: 'from-gray-200/30 to-gray-400/30',
  },
  {
    id: 'minimal-2',
    name: { es: 'Soft Gradient', en: 'Soft Gradient', de: 'Soft Gradient', pt: 'Soft Gradient' },
    category: 'minimalistas',
    models: ['iPhone 14', 'Samsung A55'],
    price: 60000,
    image: 'https://images.unsplash.com/photo-1565849904461-04a021ad2a47?w=600&h=800&fit=crop',
    gradient: 'from-slate-400/30 to-slate-600/30',
  },
  {
    id: 'trend-1',
    name: { es: 'Y2K Aesthetic', en: 'Y2K Aesthetic', de: 'Y2K Aesthetic', pt: 'Y2K Aesthetic' },
    category: 'tendencias',
    models: ['iPhone 15 Pro', 'Samsung S24 Ultra'],
    price: 75000,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=800&fit=crop',
    gradient: 'from-pink-500/40 to-purple-600/40',
  },
  {
    id: 'trend-2',
    name: { es: 'Street Art', en: 'Street Art', de: 'Street Art', pt: 'Street Art' },
    category: 'tendencias',
    models: ['iPhone 14 Pro Max', 'Samsung S23'],
    price: 70000,
    image: 'https://images.unsplash.com/photo-1499781350541-7783f59c4a0c?w=600&h=800&fit=crop',
    gradient: 'from-red-500/40 to-yellow-500/40',
  },
  {
    id: 'pareja-1',
    name: { es: 'Match Couple', en: 'Match Couple', de: 'Match Couple', pt: 'Match Couple' },
    category: 'parejas',
    models: ['iPhone 15', 'Samsung S24'],
    price: 85000,
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=800&fit=crop',
    gradient: 'from-rose-400/40 to-pink-600/40',
  },
  {
    id: 'pareja-2',
    name: { es: 'Best Friends Pack', en: 'Best Friends Pack', de: 'Best Friends Pack', pt: 'Best Friends Pack' },
    category: 'parejas',
    models: ['iPhone 14', 'Samsung A54'],
    price: 120000,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=800&fit=crop',
    gradient: 'from-teal-400/40 to-cyan-600/40',
  },
]

export const galleryImages = [
  'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1499781350541-7783f59c4a0c?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1585060544812-6b45742d762c?w=400&h=500&fit=crop',
  'https://images.unsplash.com/photo-1616344567074-8478a0adad4d?w=400&h=500&fit=crop',
]

export const translations: Record<Language, Translations> = {
  es: {
    meta: { tagline: 'Fundas personalizadas hechas en Paraguay' },
    nav: {
      designs: 'Diseños',
      builder: 'Crear funda',
      howItWorks: 'Cómo funciona',
      contact: 'Contacto',
      createCase: 'Crear mi funda',
    },
    hero: {
      headline: 'Tu estilo. Tu diseño. Tu funda.',
      subheadline: 'Fundas personalizadas hechas para destacar.',
      ctaCreate: 'Crear mi funda',
      ctaBrowse: 'Ver diseños',
      badge: 'Hecho en Paraguay 🇵🇾',
      stats: { clients: '+500 clientes', designs: '+200 diseños', rating: '4.9★ valoración' },
    },
    products: {
      title: 'Nuestros diseños',
      subtitle: 'Encontrá la funda perfecta para tu estilo. Todos los modelos con impresión HD y acabado premium.',
      buyWhatsApp: 'Comprar por WhatsApp',
      from: 'Desde',
      categories: {
        personalizados: 'Diseños personalizados',
        premium: 'Diseños premium',
        futbol: 'Fútbol / deportes',
        minimalistas: 'Minimalistas',
        tendencias: 'Tendencias',
        parejas: 'Parejas / amigos',
      },
    },
    builder: {
      title: 'Creá tu funda',
      subtitle: 'Subí tu imagen, elegí tu modelo y mirá cómo queda en tiempo real.',
      upload: 'Subir imagen',
      uploadHint: 'JPG, PNG o WEBP · Máx. 10MB',
      phoneModel: 'Modelo del celular',
      caseStyle: 'Estilo de funda',
      customText: 'Texto personalizado',
      customTextPlaceholder: 'Ej: Tu nombre, frase favorita...',
      preview: 'Vista previa',
      previewEmpty: 'Subí tu imagen para ver la vista previa',
      orderWhatsApp: 'Pedir por WhatsApp',
      styles: { matte: 'Mate', glossy: 'Brillante', transparent: 'Transparente' },
      models: [
        'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro', 'iPhone 14', 'iPhone 13',
        'Samsung S24 Ultra', 'Samsung S24', 'Samsung S23 Ultra', 'Samsung A54', 'Samsung A34',
      ],
    },
    benefits: {
      title: '¿Por qué CasePrint.py?',
      subtitle: 'Calidad premium con el toque personal que solo un emprendimiento paraguayo puede dar.',
      items: [
        { title: 'Personalización única', description: 'Tu diseño, tu foto, tu estilo. Cada funda es 100% tuya.' },
        { title: 'Alta calidad de impresión', description: 'Impresión HD resistente al desgaste, colores vibrantes que duran.' },
        { title: 'Diseños exclusivos', description: 'Colecciones que no vas a encontrar en otro lado.' },
        { title: 'Atención rapidísimo', description: 'Respondemos por WhatsApp en minutos, no en días.' },
        { title: 'Hecho en Paraguay', description: 'Producción local con envíos a todo el país. Apoyá lo nuestro.' },
      ],
    },
    social: {
      title: 'Lo que dicen nuestros clientes',
      subtitle: 'Más de 500 paraguayos ya personalizaron su funda con nosotros.',
      happyClients: 'Más de 500 clientes felices',
      followUs: 'Seguinos en redes',
      reviews,
    },
    howItWorks: {
      title: 'Cómo funciona',
      subtitle: 'De tu idea a tu funda en 4 pasos simples.',
      steps: [
        { title: 'Elegí tu diseño', description: 'Explorá nuestra colección o subí tu propia imagen.' },
        { title: 'Personalizá tu funda', description: 'Elegí modelo, estilo y agregá detalles únicos.' },
        { title: 'Confirmamos tu pedido', description: 'Te escribimos por WhatsApp para confirmar todo.' },
        { title: 'Recibí tu funda', description: 'Envío rápido a Asunción, Ciudad del Este y todo Paraguay.' },
      ],
    },
    contact: {
      title: 'Hablemos',
      subtitle: '¿Tenés dudas? Escribinos y te respondemos al toque.',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      tiktok: 'TikTok',
      location: 'Ubicación',
      locationValue: 'Asunción, Paraguay',
      hours: 'Horario de atención',
      hoursValue: 'Lun – Sáb · 9:00 – 20:00',
      writeUs: 'Escribinos',
    },
    footer: {
      description: 'Fundas personalizadas de alta calidad hechas con pasión en Paraguay.',
      faq: [
        { question: '¿Cuánto tarda el envío?', answer: 'En Asunción 1-2 días hábiles. Interior del país 3-5 días hábiles.' },
        { question: '¿Qué modelos soportan?', answer: 'iPhone (13 en adelante) y Samsung Galaxy (S y A series). Consultanos por otros modelos.' },
        { question: '¿Puedo devolver mi funda?', answer: 'Si hay defecto de impresión, la reemplazamos sin costo. Diseños personalizados no tienen devolución.' },
        { question: '¿Cómo pago?', answer: 'Transferencia bancaria, Tigo Money, Giros y efectivo contra entrega en Asunción.' },
      ],
      shipping: {
        title: 'Envíos',
        items: ['Asunción y Gran Asunción: 24-48h', 'Ciudad del Este: 2-3 días', 'Interior: 3-5 días hábiles', 'Retiro en local disponible'],
      },
      payment: {
        title: 'Formas de pago',
        items: ['Transferencia bancaria','Giros', 'Efectivo contra entrega'],
      },
      rights: 'Todos los derechos reservados.',
      madeIn: 'Hecho con ❤️ en Paraguay',
    },
    whatsapp: {
      float: '¿Necesitás ayuda?',
      productMessage: '¡Hola CasePrint! Quiero comprar la funda "{name}" ({models}). Precio: Gs. {price}.',
      builderMessage: '¡Hola CasePrint! Quiero pedir una funda personalizada.\nModelo: {model}\nEstilo: {style}\nTexto: {text}',
    },
  },
  en: {
    meta: { tagline: 'Custom phone cases made in Paraguay' },
    nav: {
      designs: 'Designs',
      builder: 'Create case',
      howItWorks: 'How it works',
      contact: 'Contact',
      createCase: 'Create my case',
    },
    hero: {
      headline: 'Your style. Your design. Your case.',
      subheadline: 'Custom phone cases made to stand out.',
      ctaCreate: 'Create my case',
      ctaBrowse: 'Browse designs',
      badge: 'Made in Paraguay 🇵🇾',
      stats: { clients: '+500 clients', designs: '+200 designs', rating: '4.9★ rating' },
    },
    products: {
      title: 'Our designs',
      subtitle: 'Find the perfect case for your style. All models with HD printing and premium finish.',
      buyWhatsApp: 'Buy via WhatsApp',
      from: 'From',
      categories: {
        personalizados: 'Custom designs',
        premium: 'Premium designs',
        futbol: 'Football / sports',
        minimalistas: 'Minimalist',
        tendencias: 'Trending',
        parejas: 'Couples / friends',
      },
    },
    builder: {
      title: 'Create your case',
      subtitle: 'Upload your image, choose your model and see how it looks in real time.',
      upload: 'Upload image',
      uploadHint: 'JPG, PNG or WEBP · Max. 10MB',
      phoneModel: 'Phone model',
      caseStyle: 'Case style',
      customText: 'Custom text',
      customTextPlaceholder: 'E.g.: Your name, favorite quote...',
      preview: 'Preview',
      previewEmpty: 'Upload your image to see the preview',
      orderWhatsApp: 'Order via WhatsApp',
      styles: { matte: 'Matte', glossy: 'Glossy', transparent: 'Transparent' },
      models: [
        'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro', 'iPhone 14', 'iPhone 13',
        'Samsung S24 Ultra', 'Samsung S24', 'Samsung S23 Ultra', 'Samsung A54', 'Samsung A34',
      ],
    },
    benefits: {
      title: 'Why CasePrint.py?',
      subtitle: 'Premium quality with the personal touch only a Paraguayan brand can offer.',
      items: [
        { title: 'Unique customization', description: 'Your design, your photo, your style. Every case is 100% yours.' },
        { title: 'High print quality', description: 'HD printing resistant to wear, vibrant colors that last.' },
        { title: 'Exclusive designs', description: 'Collections you won\'t find anywhere else.' },
        { title: 'Fast support', description: 'We reply on WhatsApp in minutes, not days.' },
        { title: 'Made in Paraguay', description: 'Local production with shipping nationwide. Support local.' },
      ],
    },
    social: {
      title: 'What our customers say',
      subtitle: 'Over 500 Paraguayans have already customized their case with us.',
      happyClients: 'Over 500 happy customers',
      followUs: 'Follow us on social',
      reviews,
    },
    howItWorks: {
      title: 'How it works',
      subtitle: 'From your idea to your case in 4 simple steps.',
      steps: [
        { title: 'Choose your design', description: 'Browse our collection or upload your own image.' },
        { title: 'Customize your case', description: 'Pick model, style and add unique details.' },
        { title: 'We confirm your order', description: 'We reach out on WhatsApp to confirm everything.' },
        { title: 'Receive your case', description: 'Fast shipping to Asunción, Ciudad del Este and all of Paraguay.' },
      ],
    },
    contact: {
      title: 'Let\'s talk',
      subtitle: 'Have questions? Write us and we\'ll reply quickly.',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      tiktok: 'TikTok',
      location: 'Location',
      locationValue: 'Asunción, Paraguay',
      hours: 'Business hours',
      hoursValue: 'Mon – Sat · 9:00 AM – 8:00 PM',
      writeUs: 'Write us',
    },
    footer: {
      description: 'High-quality custom phone cases made with passion in Paraguay.',
      faq: [
        { question: 'How long does shipping take?', answer: 'In Asunción 1-2 business days. Interior 3-5 business days.' },
        { question: 'Which models do you support?', answer: 'iPhone (13 and up) and Samsung Galaxy (S and A series). Ask us about other models.' },
        { question: 'Can I return my case?', answer: 'If there\'s a print defect, we replace it free. Custom designs are non-refundable.' },
        { question: 'How do I pay?', answer: 'Bank transfer, Tigo Money, wire transfers and cash on delivery in Asunción.' },
      ],
      shipping: {
        title: 'Shipping',
        items: ['Asunción & Greater Asunción: 24-48h', 'Ciudad del Este: 2-3 days', 'Interior: 3-5 business days', 'Local pickup available'],
      },
      payment: {
        title: 'Payment methods',
        items: ['Bank transfer', 'Tigo Money', 'Wire transfer', 'Cash on delivery'],
      },
      rights: 'All rights reserved.',
      madeIn: 'Made with ❤️ in Paraguay',
    },
    whatsapp: {
      float: 'Need help?',
      productMessage: 'Hi CasePrint! I want to buy the "{name}" case ({models}). Price: Gs. {price}.',
      builderMessage: 'Hi CasePrint! I want to order a custom case.\nModel: {model}\nStyle: {style}\nText: {text}',
    },
  },
  de: {
    meta: { tagline: 'Personalisierte Handyhüllen aus Paraguay' },
    nav: {
      designs: 'Designs',
      builder: 'Hülle erstellen',
      howItWorks: 'So funktioniert\'s',
      contact: 'Kontakt',
      createCase: 'Meine Hülle erstellen',
    },
    hero: {
      headline: 'Dein Stil. Dein Design. Deine Hülle.',
      subheadline: 'Personalisierte Handyhüllen, die auffallen.',
      ctaCreate: 'Meine Hülle erstellen',
      ctaBrowse: 'Designs ansehen',
      badge: 'Made in Paraguay 🇵🇾',
      stats: { clients: '+500 Kunden', designs: '+200 Designs', rating: '4.9★ Bewertung' },
    },
    products: {
      title: 'Unsere Designs',
      subtitle: 'Finde die perfekte Hülle für deinen Stil. Alle Modelle mit HD-Druck und Premium-Finish.',
      buyWhatsApp: 'Via WhatsApp kaufen',
      from: 'Ab',
      categories: {
        personalizados: 'Personalisierte Designs',
        premium: 'Premium Designs',
        futbol: 'Fußball / Sport',
        minimalistas: 'Minimalistisch',
        tendencias: 'Trends',
        parejas: 'Paare / Freunde',
      },
    },
    builder: {
      title: 'Erstelle deine Hülle',
      subtitle: 'Lade dein Bild hoch, wähle dein Modell und sieh das Ergebnis in Echtzeit.',
      upload: 'Bild hochladen',
      uploadHint: 'JPG, PNG oder WEBP · Max. 10MB',
      phoneModel: 'Handymodell',
      caseStyle: 'Hüllenstil',
      customText: 'Persönlicher Text',
      customTextPlaceholder: 'Z.B.: Dein Name, Lieblingsspruch...',
      preview: 'Vorschau',
      previewEmpty: 'Lade dein Bild hoch, um die Vorschau zu sehen',
      orderWhatsApp: 'Via WhatsApp bestellen',
      styles: { matte: 'Matt', glossy: 'Glänzend', transparent: 'Transparent' },
      models: [
        'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro', 'iPhone 14', 'iPhone 13',
        'Samsung S24 Ultra', 'Samsung S24', 'Samsung S23 Ultra', 'Samsung A54', 'Samsung A34',
      ],
    },
    benefits: {
      title: 'Warum CasePrint.py?',
      subtitle: 'Premium-Qualität mit der persönlichen Note, die nur eine paraguayische Marke bieten kann.',
      items: [
        { title: 'Einzigartige Personalisierung', description: 'Dein Design, dein Foto, dein Stil. Jede Hülle ist 100% deins.' },
        { title: 'Hohe Druckqualität', description: 'HD-Druck, verschleißfest, lebendige Farben die halten.' },
        { title: 'Exklusive Designs', description: 'Kollektionen, die du nirgendwo anders findest.' },
        { title: 'Schneller Support', description: 'Wir antworten per WhatsApp in Minuten, nicht Tagen.' },
        { title: 'Made in Paraguay', description: 'Lokale Produktion mit Versand landesweit. Unterstütze lokale Marken.' },
      ],
    },
    social: {
      title: 'Was unsere Kunden sagen',
      subtitle: 'Über 500 Paraguayer haben bereits ihre Hülle bei uns personalisiert.',
      happyClients: 'Über 500 zufriedene Kunden',
      followUs: 'Folge uns auf Social Media',
      reviews,
    },
    howItWorks: {
      title: 'So funktioniert\'s',
      subtitle: 'Von deiner Idee zur Hülle in 4 einfachen Schritten.',
      steps: [
        { title: 'Design wählen', description: 'Durchstöbere unsere Kollektion oder lade dein eigenes Bild hoch.' },
        { title: 'Hülle personalisieren', description: 'Modell, Stil wählen und einzigartige Details hinzufügen.' },
        { title: 'Bestellung bestätigen', description: 'Wir kontaktieren dich per WhatsApp zur Bestätigung.' },
        { title: 'Hülle erhalten', description: 'Schneller Versand nach Asunción, Ciudad del Este und ganz Paraguay.' },
      ],
    },
    contact: {
      title: 'Lass uns reden',
      subtitle: 'Fragen? Schreib uns und wir antworten schnell.',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      tiktok: 'TikTok',
      location: 'Standort',
      locationValue: 'Asunción, Paraguay',
      hours: 'Öffnungszeiten',
      hoursValue: 'Mo – Sa · 9:00 – 20:00',
      writeUs: 'Schreib uns',
    },
    footer: {
      description: 'Hochwertige personalisierte Handyhüllen mit Leidenschaft in Paraguay gefertigt.',
      faq: [
        { question: 'Wie lange dauert der Versand?', answer: 'In Asunción 1-2 Werktage. Landesinneres 3-5 Werktage.' },
        { question: 'Welche Modelle werden unterstützt?', answer: 'iPhone (ab 13) und Samsung Galaxy (S und A Serie). Frag uns nach anderen Modellen.' },
        { question: 'Kann ich meine Hülle zurückgeben?', answer: 'Bei Druckfehlern ersetzen wir kostenlos. Personalisierte Designs sind vom Umtausch ausgeschlossen.' },
        { question: 'Wie bezahle ich?', answer: 'Banküberweisung, Tigo Money, Giros und Barzahlung bei Lieferung in Asunción.' },
      ],
      shipping: {
        title: 'Versand',
        items: ['Asunción & Gran Asunción: 24-48h', 'Ciudad del Este: 2-3 Tage', 'Landesinneres: 3-5 Werktage', 'Abholung vor Ort möglich'],
      },
      payment: {
        title: 'Zahlungsmethoden',
        items: ['Banküberweisung', 'Tigo Money', 'Giros', 'Barzahlung bei Lieferung'],
      },
      rights: 'Alle Rechte vorbehalten.',
      madeIn: 'Mit ❤️ in Paraguay gemacht',
    },
    whatsapp: {
      float: 'Brauchst du Hilfe?',
      productMessage: 'Hallo CasePrint! Ich möchte die "{name}" Hülle kaufen ({models}). Preis: Gs. {price}.',
      builderMessage: 'Hallo CasePrint! Ich möchte eine personalisierte Hülle bestellen.\nModell: {model}\nStil: {style}\nText: {text}',
    },
  },
  pt: {
    meta: { tagline: 'Capas personalizadas feitas no Paraguai' },
    nav: {
      designs: 'Designs',
      builder: 'Criar capa',
      howItWorks: 'Como funciona',
      contact: 'Contato',
      createCase: 'Criar minha capa',
    },
    hero: {
      headline: 'Seu estilo. Seu design. Sua capa.',
      subheadline: 'Capas personalizadas feitas para se destacar.',
      ctaCreate: 'Criar minha capa',
      ctaBrowse: 'Ver designs',
      badge: 'Feito no Paraguai 🇵🇾',
      stats: { clients: '+500 clientes', designs: '+200 designs', rating: '4.9★ avaliação' },
    },
    products: {
      title: 'Nossos designs',
      subtitle: 'Encontre a capa perfeita pro seu estilo. Todos os modelos com impressão HD e acabamento premium.',
      buyWhatsApp: 'Comprar pelo WhatsApp',
      from: 'A partir de',
      categories: {
        personalizados: 'Designs personalizados',
        premium: 'Designs premium',
        futbol: 'Futebol / esportes',
        minimalistas: 'Minimalistas',
        tendencias: 'Tendências',
        parejas: 'Casais / amigos',
      },
    },
    builder: {
      title: 'Crie sua capa',
      subtitle: 'Envie sua imagem, escolha seu modelo e veja como fica em tempo real.',
      upload: 'Enviar imagem',
      uploadHint: 'JPG, PNG ou WEBP · Máx. 10MB',
      phoneModel: 'Modelo do celular',
      caseStyle: 'Estilo da capa',
      customText: 'Texto personalizado',
      customTextPlaceholder: 'Ex: Seu nome, frase favorita...',
      preview: 'Pré-visualização',
      previewEmpty: 'Envie sua imagem para ver a pré-visualização',
      orderWhatsApp: 'Pedir pelo WhatsApp',
      styles: { matte: 'Fosco', glossy: 'Brilhante', transparent: 'Transparente' },
      models: [
        'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro', 'iPhone 14', 'iPhone 13',
        'Samsung S24 Ultra', 'Samsung S24', 'Samsung S23 Ultra', 'Samsung A54', 'Samsung A34',
      ],
    },
    benefits: {
      title: 'Por que CasePrint.py?',
      subtitle: 'Qualidade premium com o toque pessoal que só uma marca paraguaia pode oferecer.',
      items: [
        { title: 'Personalização única', description: 'Seu design, sua foto, seu estilo. Cada capa é 100% sua.' },
        { title: 'Alta qualidade de impressão', description: 'Impressão HD resistente ao desgaste, cores vibrantes que duram.' },
        { title: 'Designs exclusivos', description: 'Coleções que você não encontra em outro lugar.' },
        { title: 'Atendimento rapidíssimo', description: 'Respondemos no WhatsApp em minutos, não em dias.' },
        { title: 'Feito no Paraguai', description: 'Produção local com envio para todo o país. Apoie o local.' },
      ],
    },
    social: {
      title: 'O que nossos clientes dizem',
      subtitle: 'Mais de 500 paraguaios já personalizaram sua capa conosco.',
      happyClients: 'Mais de 500 clientes felizes',
      followUs: 'Siga-nos nas redes',
      reviews,
    },
    howItWorks: {
      title: 'Como funciona',
      subtitle: 'Da sua ideia à sua capa em 4 passos simples.',
      steps: [
        { title: 'Escolha seu design', description: 'Explore nossa coleção ou envie sua própria imagem.' },
        { title: 'Personalize sua capa', description: 'Escolha modelo, estilo e adicione detalhes únicos.' },
        { title: 'Confirmamos seu pedido', description: 'Entramos em contato pelo WhatsApp para confirmar tudo.' },
        { title: 'Receba sua capa', description: 'Envio rápido para Assunção, Ciudad del Este e todo o Paraguai.' },
      ],
    },
    contact: {
      title: 'Vamos conversar',
      subtitle: 'Tem dúvidas? Escreva pra gente e respondemos rapidinho.',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      tiktok: 'TikTok',
      location: 'Localização',
      locationValue: 'Assunção, Paraguai',
      hours: 'Horário de atendimento',
      hoursValue: 'Seg – Sáb · 9:00 – 20:00',
      writeUs: 'Escreva pra gente',
    },
    footer: {
      description: 'Capas personalizadas de alta qualidade feitas com paixão no Paraguai.',
      faq: [
        { question: 'Quanto tempo demora o envio?', answer: 'Em Assunção 1-2 dias úteis. Interior do país 3-5 dias úteis.' },
        { question: 'Quais modelos suportam?', answer: 'iPhone (13 em diante) e Samsung Galaxy (S e A series). Consulte-nos sobre outros modelos.' },
        { question: 'Posso devolver minha capa?', answer: 'Se houver defeito de impressão, substituímos sem custo. Designs personalizados não têm devolução.' },
        { question: 'Como pago?', answer: 'Transferência bancária, Tigo Money, Giros e dinheiro na entrega em Assunção.' },
      ],
      shipping: {
        title: 'Envios',
        items: ['Assunção e Grande Assunção: 24-48h', 'Ciudad del Este: 2-3 dias', 'Interior: 3-5 dias úteis', 'Retirada no local disponível'],
      },
      payment: {
        title: 'Formas de pagamento',
        items: ['Transferência bancária', 'Tigo Money', 'Giros', 'Dinheiro na entrega'],
      },
      rights: 'Todos os direitos reservados.',
      madeIn: 'Feito com ❤️ no Paraguai',
    },
    whatsapp: {
      float: 'Precisa de ajuda?',
      productMessage: 'Olá CasePrint! Quero comprar a capa "{name}" ({models}). Preço: Gs. {price}.',
      builderMessage: 'Olá CasePrint! Quero pedir uma capa personalizada.\nModelo: {model}\nEstilo: {style}\nTexto: {text}',
    },
  },
}

export const WHATSAPP_NUMBER = '595981000000'
export const INSTAGRAM_URL = 'https://instagram.com/caseprint.py'
export const TIKTOK_URL = 'https://tiktok.com/@caseprint.py'

export function formatPrice(price: number): string {
  return price.toLocaleString('es-PY')
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
