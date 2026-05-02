export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Super Steels",
  "image": "/logo.png",
  "description": "Reliable steel supplier in Mangalore providing TMT bars, structural steel, sheets and plates since 2003",
  "telephone": "+91-824-2123456",
  "email": "info@supersteels.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mangalore",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9141",
    "longitude": "74.8560"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Mangalore"
    },
    {
      "@type": "City",
      "name": "Udupi"
    },
    {
      "@type": "State",
      "name": "Uttara Kannada"
    }
  ],
  "openingHours": "Mo-Sa 08:00-19:00",
  "priceRange": "$$",
  "foundingDate": "2003",
  "slogan": "The Strength Behind Mangalore's Construction"
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Super Steels",
  "url": "https://supersteels.com",
  "logo": "/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-824-2123456",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["en", "kn", "ml"]
  },
  "sameAs": [
    "https://www.facebook.com/supersteels",
    "https://www.linkedin.com/company/supersteels"
  ]
};

export const productsSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "TMT Bars & Structural Steel",
  "description": "High-quality TMT bars, structural steel, sheets, plates, and construction materials",
  "brand": {
    "@type": "Brand",
    "name": "Super Steels"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "Super Steels"
    }
  }
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://supersteels.com${item.url}`
  }))
});

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
