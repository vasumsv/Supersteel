import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function Scene1Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className="relative w-full overflow-hidden flex items-center justify-center min-h-[500px] h-[65vh] pt-24 md:pt-28 lg:pt-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-4 md:mb-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Oswald' }}>
              THE STRENGTH BEHIND<br />
              <span className="text-gold">COASTAL KARNATAKA'S</span><br />
              INFRASTRUCTURE
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4"
            style={{ fontFamily: 'Inter' }}
          >
            23 years of delivering ISI certified steel materials from authorized dealers. Serving construction and infrastructure projects across South Canara, Udupi and Uttara Kannada since 2003.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
          >
            <Link to="/contact" className="btn-primary w-full sm:w-auto text-center">
              Request Quote
            </Link>
            <a href="tel:+918242123456" className="btn-secondary flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto">
              <Phone size={18} className="md:w-5 md:h-5" />
              Call Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
