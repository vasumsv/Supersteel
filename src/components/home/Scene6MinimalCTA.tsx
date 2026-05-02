import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Scene6MinimalCTA() {
  return (
    <section className="relative bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-3 md:mb-4" style={{ fontFamily: 'Oswald' }}>
              NEED STEEL FOR<br />
              <span className="text-gold">YOUR NEXT PROJECT?</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4" style={{ fontFamily: 'Inter' }}>
              Contact our team today for reliable supply and fast dispatch.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10"
          >
            <a
              href="tel:+918242123456"
              className="group p-6 md:p-8 border-2 border-primary hover:bg-primary transition-all text-center"
            >
              <Phone className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 text-primary group-hover:text-white transition-colors" />
              <div className="text-[10px] sm:text-xs text-gray-600 group-hover:text-white uppercase tracking-widest mb-2" style={{ fontFamily: 'Barlow Semi Condensed' }}>
                Call Us
              </div>
              <div className="text-xl sm:text-2xl font-bold text-primary group-hover:text-white transition-colors" style={{ fontFamily: 'Oswald' }}>
                +91 824 212 3456
              </div>
            </a>

            <Link
              to="/contact"
              className="group p-6 md:p-8 border-2 border-gold hover:bg-gold transition-all text-center"
            >
              <Mail className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 md:mb-4 text-gold group-hover:text-white transition-colors" />
              <div className="text-[10px] sm:text-xs text-gray-600 group-hover:text-white uppercase tracking-widest mb-2" style={{ fontFamily: 'Barlow Semi Condensed' }}>
                Email Us
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gold group-hover:text-white transition-colors" style={{ fontFamily: 'Oswald' }}>
                Get A Quote
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 text-gray-600 flex-wrap justify-center">
              <div className="w-8 md:w-12 h-px bg-gray-300"></div>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest" style={{ fontFamily: 'Barlow Semi Condensed' }}>
                Same Day Dispatch Available
              </span>
              <div className="w-8 md:w-12 h-px bg-gray-300"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
