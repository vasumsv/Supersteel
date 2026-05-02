import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const brands = [
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/1.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/2.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/3.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/4.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/5.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/6.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/7.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/8.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/9.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/10.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/11.jpg',
  },
  {
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/12.jpg',
  },
];

export default function BrandsSlider() {
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

    const interval = setInterval(scroll, 25);
    return () => clearInterval(interval);
  }, [isPaused]);

  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight" style={{ fontFamily: 'Oswald' }}>
            TRUSTED <span className="text-gold">BRANDS</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl" style={{ fontFamily: 'Inter' }}>
            We supply high-quality steel and construction materials from leading industry brands
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
          {duplicatedBrands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[280px] bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              <div className="aspect-[4/3] bg-white flex items-center justify-center p-6">
                <img
                  src={brand.image}
                  alt="Brand"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
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
            to="/brands"
            className="inline-block px-10 py-4 bg-primary text-white font-semibold uppercase tracking-wider text-sm hover:bg-gold hover:text-primary transition-all"
            style={{ fontFamily: 'Barlow Semi Condensed' }}
          >
            View All Brands
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
