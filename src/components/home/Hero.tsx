import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, FileText, Minus } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center metallic-dark overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-ss-gold"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-[#6B6F74]"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-ss-gold"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-[#6B6F74]"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-ss-gold"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bebas text-white mb-6 leading-[0.95] uppercase tracking-wide">
              The Strength Behind<br />
              <span className="text-ss-gold">Mangalore's Construction</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-base md:text-lg text-[#F4F5F7] mb-8 max-w-2xl leading-tight font-inter"
          >
            Reliable iron and steel supply for builders across coastal Karnataka for over two decades
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <Link
              to="/contact"
              className="btn-industrial inline-flex items-center justify-center gap-2 bg-ss-gold text-ss-navy px-8 py-3 font-oswald font-bold uppercase text-xs tracking-wider border-ss-gold"
            >
              <FileText className="w-4 h-4" strokeWidth={3} />
              Request Quote
            </Link>
            <a
              href="tel:+918242123456"
              className="btn-industrial inline-flex items-center justify-center gap-2 bg-ss-navy text-ss-gold px-8 py-3 font-oswald font-bold uppercase text-xs tracking-wider border-ss-gold"
            >
              <Phone className="w-4 h-4" strokeWidth={3} />
              Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap gap-4 text-xs text-[#6B6F74]"
          >
            <div className="flex items-center gap-1.5">
              <Minus className="w-3 h-3 text-ss-gold" strokeWidth={3} />
              <span className="font-inter font-semibold tracking-wide">Since 2003</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Minus className="w-3 h-3 text-ss-gold" strokeWidth={3} />
              <span className="font-inter font-semibold tracking-wide">Same Day Loading Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Minus className="w-3 h-3 text-ss-gold" strokeWidth={3} />
              <span className="font-inter font-semibold tracking-wide">Accurate Weight Supply</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Minus className="w-3 h-3 text-ss-gold" strokeWidth={3} />
              <span className="font-inter font-semibold tracking-wide">Direct Mill Procurement</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#6B6F74]"></div>
    </section>
  );
}
