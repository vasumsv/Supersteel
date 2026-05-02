import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Building, Truck, Users } from 'lucide-react';

function Counter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="data-display text-ss-gold">
      {count}{suffix}
    </div>
  );
}

export default function TrustCounters() {
  const counters = [
    {
      icon: Award,
      value: 20,
      suffix: '+',
      label: 'Years Experience',
      description: 'Serving coastal Karnataka since 2003',
    },
    {
      icon: Building,
      value: 1000,
      suffix: '+',
      label: 'Projects Supplied',
      description: 'Residential, commercial, and industrial',
    },
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Trusted Contractors',
      description: 'Long-term partnerships built on reliability',
    },
    {
      icon: Truck,
      value: 100,
      suffix: '%',
      label: 'Same Day Dispatch',
      description: 'Your project cannot wait for material',
    },
  ];

  return (
    <section className="py-16 metallic-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bebas text-[#111111] mb-3 uppercase tracking-wide leading-[0.95]">
            Built on <span className="text-ss-gold">Trust & Experience</span>
          </h2>
          <p className="text-sm text-[#6B6F74] max-w-2xl font-inter font-medium">
            Numbers that demonstrate our commitment to reliable steel supply
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {counters.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white p-6 panel-inset border-l-2 border-ss-gold"
            >
              <item.icon className="w-8 h-8 text-[#6B6F74] mb-3" strokeWidth={2.5} />
              <Counter end={item.value} suffix={item.suffix} />
              <h3 className="spec-label text-[#111111] mt-3 mb-1.5">
                {item.label}
              </h3>
              <p className="text-xs text-[#6B6F74] leading-tight font-inter font-medium">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
