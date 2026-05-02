import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const industries = [
  {
    title: 'Residential',
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Commercial',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Industrial',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Infrastructure',
    image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    title: 'Fabricators',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export default function IndustriesServed() {
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
    <>
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      <section ref={sectionRef} className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="section-title text-primary mb-6">
              Supporting Infrastructure<br />
              <span className="text-gold">Across Industries</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Railways, bridges, highways, and industrial facilities depend on strong materials.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.slice(0, 3).map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="relative h-[400px] group overflow-hidden"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-end p-10">
                  <h3 className="text-5xl font-bold text-white" style={{ fontFamily: 'Bebas Neue' }}>
                    {industry.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {industries.slice(3).map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="relative h-[400px] group overflow-hidden"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 flex items-end p-10">
                  <h3 className="text-5xl font-bold text-white" style={{ fontFamily: 'Bebas Neue' }}>
                    {industry.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    </>
  );
}
