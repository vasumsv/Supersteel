import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    title: 'TMT Bars',
    image: 'https://images.pexels.com/photos/8961160/pexels-photo-8961160.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Foundation reinforcements',
  },
  {
    title: 'Structural Steel',
    image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'H-beams and channels',
  },
  {
    title: 'Steel Plates',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Heavy-duty plate stacks',
  },
  {
    title: 'Steel Pipes',
    image: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Industrial pipe yards',
  },
  {
    title: 'Roofing Systems',
    image: 'https://images.pexels.com/photos/6419121/pexels-photo-6419121.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Complete roofing solutions',
  },
];

export default function ProductGallery() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="section-title text-white mb-6">
            Complete Range of<br />
            <span className="text-gold">Structural Steel Materials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From foundation reinforcements to roofing systems, we supply the materials that keep construction moving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] group overflow-hidden"
          >
            <img
              src={products[0].image}
              alt={products[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12">
              <h3 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue' }}>
                {products[0].title}
              </h3>
              <p className="text-lg text-gray-300 mb-6">{products[0].description}</p>
              <Link to="/products" className="inline-block text-gold font-semibold uppercase tracking-wider hover:text-gold-light transition-colors" style={{ fontFamily: 'Oswald' }}>
                View Details →
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {products.slice(1).map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="relative h-[290px] group overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Bebas Neue' }}>
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">{product.description}</p>
                  <Link to="/products" className="inline-block text-gold text-sm font-semibold uppercase tracking-wider hover:text-gold-light transition-colors" style={{ fontFamily: 'Oswald' }}>
                    View →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
