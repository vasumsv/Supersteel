import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: '8mm TMT Bar',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/8mm1.png',
  },
  {
    name: '10mm TMT Bar',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/10mm.png',
  },
  {
    name: '12mm TMT Bar',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/12mm.png',
  },
  {
    name: '16mm TMT Bar',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/16mm.png',
  },
  {
    name: 'I-Beam',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/I-BEAM.png',
  },
  {
    name: 'MS Channel',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/MS%20CHANNEL.png',
  },
  {
    name: 'MS Angles',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/Ms%20angles.png',
  },
  {
    name: 'Pipes & Tubes',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/PIPES%20AND%20TUBBES.png',
  },
  {
    name: 'Roofing Sheet',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/BLUE%20ROOFING%20SHEET.png',
  },
  {
    name: 'Binding Wire',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/BINDING%20WIRES.png',
  },
];

export default function ProductsSlider() {
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || isPaused) return;

    const scrollWidth = slider.scrollWidth;
    const clientWidth = slider.clientWidth;
    let scrollPosition = 0;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += 1;
        if (scrollPosition >= scrollWidth - clientWidth) {
          scrollPosition = 0;
        }
        slider.scrollLeft = scrollPosition;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isPaused]);

  const duplicatedProducts = [...products, ...products, ...products];

  return (
    <section className="relative py-16 md:py-20 bg-[#F4F5F7] overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-ss-navy mb-4 leading-tight" style={{ fontFamily: 'Oswald' }}>
            OUR STEEL <span className="text-ss-gold">PRODUCTS</span>
          </h2>
          <p className="text-base md:text-lg text-[#6B6F74] max-w-2xl" style={{ fontFamily: 'Inter' }}>
            High-quality steel products for construction and industrial applications
          </p>
        </motion.div>
      </div>

      <div
        ref={sliderRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="overflow-x-hidden cursor-pointer"
        style={{ scrollBehavior: 'auto' }}
      >
        <div className="flex gap-6 px-4">
          {duplicatedProducts.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="aspect-[4/3] bg-white flex items-center justify-center p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white border-t border-gray-100">
                <h3 className="text-base font-bold text-ss-navy uppercase tracking-wide text-center">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/products"
            className="inline-block px-10 py-4 bg-ss-navy text-white font-semibold uppercase tracking-wider text-sm hover:bg-ss-gold hover:text-ss-navy transition-all"
            style={{ fontFamily: 'Barlow Semi Condensed' }}
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
