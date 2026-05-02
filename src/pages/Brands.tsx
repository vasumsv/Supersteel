import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../utils/seoSchemas';

const brands = [
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/2.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/18.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/1.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/3.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/17.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/banner-8.jpg.jpeg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/5.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/12.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/8.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/Om-sai-TMT-550d-banner-Final-1.jpg.jpeg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/6.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/7.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/4.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/9.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/11.jpg',
  },
];

export default function Brands() {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Brands', url: '/brands' }
  ]);

  return (
    <>
      <SEO
        title="Trusted Steel & Construction Material Brands - Super Steels Mangalore"
        description="Authorized dealer of premium steel brands including TATA Steel, JSW, Vizag Steel, SAIL, and top cement brands. ISI certified products with quality guarantee."
        keywords="TATA steel Mangalore, JSW steel Karnataka, steel brands Udupi, cement brands, construction material brands"
        canonical="/brands"
        schemaMarkup={breadcrumbs}
      />
      <div className="min-h-screen bg-[#F4F5F7]">
      <div className="pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight" style={{ fontFamily: 'Oswald' }}>
              OUR TRUSTED <span className="text-gold">BRANDS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'Inter' }}>
              We supply high-quality steel and construction materials from leading industry brands trusted worldwide for excellence and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all group"
              >
                <div className="aspect-[4/3] bg-white flex items-center justify-center p-6 md:p-8">
                  <img
                    src={brand.image}
                    alt="Brand"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
