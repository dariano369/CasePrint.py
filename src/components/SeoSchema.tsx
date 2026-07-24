export function SeoSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'CasePrint.py',
    description: 'Fundas personalizadas para iPhone y Samsung hechas en Paraguay.',
    url: 'https://caseprint.py',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1200&h=630&fit=crop',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Asunción',
      addressCountry: 'PY',
    },
    openingHours: 'Mo-Sa 09:00-20:00',
    priceRange: 'Gs. 165000 - 340000',
    sameAs: [
      'https://instagram.com/caseprint.py',
      'https://tiktok.com/@caseprint.py',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
