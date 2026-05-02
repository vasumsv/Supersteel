import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  type?: string;
  schemaMarkup?: object;
}

export default function SEO({
  title = "Super Steels - Reliable Steel Supply in Mangalore | TMT Bars, Structural Steel",
  description = "Super Steels: Trusted steel supplier in Mangalore since 2003. Same day loading, accurate weight guarantee. Supplying TMT bars, structural steel, sheets & plates across coastal Karnataka.",
  keywords = "steel supplier Mangalore, TMT bars Karnataka, structural steel Udupi, steel dealers South Canara, construction steel Mangalore, ISI steel supplier, steel for construction, TMT bars Mangalore",
  ogTitle,
  ogDescription,
  ogImage = "/logo.png",
  canonical,
  type = "website",
  schemaMarkup
}: SEOProps) {
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://supersteels.com';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Super Steels" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {schemaMarkup && (
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
}
