import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function BrandStatement() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
            initial={{ opacity: 0, y: 60 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center max-w-6xl mx-auto"
          >
            <h2 className="section-title text-primary mb-8">
              Two Decades of<br />
              <span className="text-gold">Structural Reliability</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
              Supplying quality steel for projects that shape our region.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    </>
  );
}
