import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/slider/1.png',
    title: 'THE STRENGTH BEHIND COASTAL KARNATAKA',
    subtitle: '23 years of delivering premium ISI certified steel materials',
    cta: 'Request Quote',
  },
  {
    id: 2,
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/slider/2.png',
    title: 'AUTHORIZED DEALER FOR LEADING BRANDS',
    subtitle: 'SAIL, TATA, JSW, Jindal - Direct from certified manufacturers',
    cta: 'View Brands',
  },
  {
    id: 3,
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/slider/3.png',
    title: 'INFRASTRUCTURE PROJECTS DELIVERED',
    subtitle: '1000+ construction projects supplied across the region',
    cta: 'Our Projects',
  },
  {
    id: 4,
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/slider/4.png',
    title: 'SAME DAY LOADING AVAILABLE',
    subtitle: 'Buffer stock for urgent orders with rapid dispatch',
    cta: 'Contact Us',
  },
  {
    id: 5,
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/slider/5.png',
    title: '100% ISI CERTIFIED STEEL',
    subtitle: 'Complete mill test certificates and quality documentation',
    cta: 'Our Products',
  },
  {
    id: 6,
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/slider/6.png',
    title: 'TRUSTED BY 500+ CONTRACTORS',
    subtitle: 'Reliable steel supply for construction excellence',
    cta: 'Why Choose Us',
  },
];

export default function Hero3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (Math.abs(e.deltaY) > 50) {
      setIsAutoPlaying(false);
      if (e.deltaY > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }, [nextSlide, prevSlide]);

  const getSlideStyle = (index: number) => {
    const diff = (index - currentIndex + slides.length) % slides.length;
    const normalizedDiff = diff > slides.length / 2 ? diff - slides.length : diff;

    if (normalizedDiff === 0) {
      return {
        transform: 'translateX(0%) scale(1) rotateY(0deg)',
        zIndex: 50,
        opacity: 1,
        filter: 'blur(0px) brightness(1)',
      };
    } else if (normalizedDiff === 1) {
      return {
        transform: 'translateX(60%) scale(0.85) rotateY(-25deg)',
        zIndex: 40,
        opacity: 0.7,
        filter: 'blur(1px) brightness(0.7)',
      };
    } else if (normalizedDiff === -1) {
      return {
        transform: 'translateX(-60%) scale(0.85) rotateY(25deg)',
        zIndex: 40,
        opacity: 0.7,
        filter: 'blur(1px) brightness(0.7)',
      };
    } else if (normalizedDiff === 2) {
      return {
        transform: 'translateX(100%) scale(0.7) rotateY(-35deg)',
        zIndex: 30,
        opacity: 0.4,
        filter: 'blur(2px) brightness(0.5)',
      };
    } else if (normalizedDiff === -2) {
      return {
        transform: 'translateX(-100%) scale(0.7) rotateY(35deg)',
        zIndex: 30,
        opacity: 0.4,
        filter: 'blur(2px) brightness(0.5)',
      };
    } else {
      return {
        transform: 'translateX(0%) scale(0.6) rotateY(0deg)',
        zIndex: 10,
        opacity: 0,
        filter: 'blur(3px) brightness(0.3)',
      };
    }
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-ss-navy via-gray-900 to-black pt-20"
      onWheel={handleWheel}
      style={{ perspective: '2000px' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,165,32,0.1)_0%,transparent_70%)]"></div>

      <div className="relative h-full flex items-center justify-center">
        <div className="relative w-full max-w-7xl mx-auto px-4">
          <div className="relative h-[70vh] md:h-[75vh]" style={{ transformStyle: 'preserve-3d' }}>
            {slides.map((slide, index) => {
              const style = getSlideStyle(index);
              const isActive = index === currentIndex;

              return (
                <motion.div
                  key={slide.id}
                  className="absolute inset-0 mx-auto w-full md:w-[85%] lg:w-[75%]"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  initial={false}
                  animate={style}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        scale: isActive ? 1.05 : 1,
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                      }}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -30 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 lg:p-16"
                        >
                          <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="hero-title text-white mb-4 md:mb-6"
                          >
                            {slide.title}
                          </motion.h2>

                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="hero-subtitle text-gray-300 mb-6 md:mb-8 max-w-2xl"
                          >
                            {slide.subtitle}
                          </motion.p>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            className="flex flex-col sm:flex-row gap-4"
                          >
                            <Link
                              to="/contact"
                              className="btn-primary inline-flex items-center justify-center shadow-lg hover:shadow-ss-gold/50"
                            >
                              {slide.cta}
                            </Link>
                            <a
                              href="tel:+919845590892"
                              className="btn-secondary inline-flex items-center justify-center gap-2"
                            >
                              <Phone size={18} />
                              Call Now
                            </a>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <button
          onClick={() => {
            setIsAutoPlaying(false);
            prevSlide();
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-ss-gold hover:text-ss-navy transition-all duration-300 flex items-center justify-center group shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={() => {
            setIsAutoPlaying(false);
            nextSlide();
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-ss-gold hover:text-ss-navy transition-all duration-300 flex items-center justify-center group shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[60] flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index);
            }}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-12 md:w-16 h-1.5 md:h-2 bg-ss-gold'
                : 'w-8 md:w-10 h-1.5 md:h-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ss-navy to-transparent pointer-events-none"></div>
    </section>
  );
}
