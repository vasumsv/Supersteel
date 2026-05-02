import SEO from '../components/SEO';
import { localBusinessSchema } from '../utils/seoSchemas';
import Hero3DCarousel from '../components/home/Hero3DCarousel';
import Scene2MaterialGallery from '../components/home/Scene2MaterialGallery';
import Scene3Infrastructure from '../components/home/Scene3Infrastructure';
import Scene4Authority from '../components/home/Scene4Authority';
import Scene5TrustedOrgs from '../components/home/Scene5TrustedOrgs';
import Scene6MinimalCTA from '../components/home/Scene6MinimalCTA';
import ProductsSlider from '../components/home/ProductsSlider';
import BrandsSlider from '../components/home/BrandsSlider';
import Certifications from '../components/home/Certifications';

export default function Home() {
  return (
    <>
      <SEO
        title="Super Steels - Reliable Steel Supply in Mangalore | TMT Bars, Structural Steel"
        description="Super Steels: Trusted steel supplier in Mangalore since 2003. Same day loading, accurate weight guarantee. Supplying TMT bars, structural steel, sheets & plates across coastal Karnataka."
        keywords="steel supplier Mangalore, TMT bars Karnataka, structural steel Udupi, steel dealers South Canara, construction steel Mangalore, ISI steel supplier, steel for construction, TMT bars Mangalore"
        canonical="/"
        schemaMarkup={localBusinessSchema}
      />
      <div className="overflow-x-hidden">
        <Hero3DCarousel />
        <Scene3Infrastructure />
        <Scene2MaterialGallery />
        <ProductsSlider />
        <Certifications />
        <BrandsSlider />
        <Scene4Authority />
        <Scene5TrustedOrgs />
        <Scene6MinimalCTA />
      </div>
    </>
  );
}
