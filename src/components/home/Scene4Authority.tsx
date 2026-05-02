import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: 23, label: 'Years of Excellence', suffix: '+' },
  { number: 1000, label: 'Projects Supplied', suffix: '+' },
  { number: 500, label: 'Contractors Trust Us', suffix: '+' },
  { number: 100, label: 'ISI Certified', suffix: '%' },
];

export default function Scene4Authority() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.number / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timer);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative bg-[#1A1D2E] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-none mb-2 md:mb-3" style={{ fontFamily: 'Oswald' }}>
                {counts[index]}<span className="text-gold">{stat.suffix}</span>
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-widest" style={{ fontFamily: 'Barlow Semi Condensed' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 md:mt-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight" style={{ fontFamily: 'Oswald' }}>
            SERVING <span className="text-gold">COASTAL KARNATAKA</span><br />
            SINCE 2003
          </h2>
          <p className="text-sm md:text-base text-gray-400 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Inter' }}>
            Established presence across South Canara, Udupi and Uttara Kannada districts with reliable material supply and rapid dispatch capabilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
