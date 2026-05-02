import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroNew() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 overlay-dark"></div>
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1
              className="hero-title text-white mb-4 md:mb-6 px-2"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              The Strength Behind<br />
              <span className="text-gold">Coastal Karnataka's</span><br />
              Construction
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 font-light max-w-3xl mx-auto px-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Reliable iron and steel supply supporting infrastructure across coastal Karnataka.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Request Quote
              </Link>
              <a href="tel:+918242123456" className="btn-secondary flex items-center justify-center gap-3 w-full sm:w-auto">
                <Phone size={20} />
                Call Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1E2230] to-transparent"></div>
    </section>
  );
}
