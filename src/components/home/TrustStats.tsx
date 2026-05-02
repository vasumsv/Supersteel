import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { number: '20+', label: 'Years Experience', suffix: '' },
  { number: '1000', label: 'Projects Supplied', suffix: '+' },
  { number: '500', label: 'Contractors', suffix: '+' },
  { number: '1', label: 'Day Dispatch', suffix: '' },
];

export default function TrustStats() {
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
        const target = parseInt(stat.number);
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
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
    <>
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      <section ref={sectionRef} className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(200, 155, 60, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(200, 155, 60, 0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="section-title text-white mb-6">
              Trusted in <span className="text-gold">Major Industrial Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our materials support projects associated with leading organizations across coastal Karnataka.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="stat-number mb-4">
                  {stat.number.includes('+') ? `${counts[index]}${stat.suffix}` : stat.number}
                </div>
                <div className="text-gray-400 text-lg uppercase tracking-wider" style={{ fontFamily: 'Oswald' }}>
                  {stat.label}
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
