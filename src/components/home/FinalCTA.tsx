import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Minus } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-16 metallic-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(90deg, #C89B3C 0px, transparent 1px, transparent 60px),
                           repeating-linear-gradient(0deg, #C89B3C 0px, transparent 1px, transparent 60px)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bebas text-white mb-4 uppercase tracking-wide leading-[0.95]">
            Your Project Cannot Wait<br />
            For Material — <span className="text-ss-gold">We Ensure It Doesn't</span>
          </h2>

          <p className="text-sm md:text-base text-[#F4F5F7] mb-8 max-w-2xl leading-tight font-inter font-medium">
            Two decades of reliable supply. Thousands of completed projects. One commitment: your construction never stops.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Link
              to="/contact"
              className="btn-industrial inline-flex items-center justify-center gap-2 bg-ss-gold text-ss-navy px-8 py-3 font-oswald font-bold uppercase text-xs tracking-wider border-ss-gold"
            >
              Request Immediate Quote
              <ArrowRight className="w-4 h-4" strokeWidth={3} />
            </Link>
            <a
              href="tel:+918242123456"
              className="btn-industrial inline-flex items-center justify-center gap-2 bg-ss-navy text-ss-gold px-8 py-3 font-oswald font-bold uppercase text-xs tracking-wider border-ss-gold"
            >
              <Phone className="w-4 h-4" strokeWidth={3} />
              Call Now: +91-824-2123456
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
            {[
              'Since 2003',
              '1000+ Projects',
              'Same Day Loading',
              'Certified Quality'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
                className="bg-white/10 backdrop-blur-sm p-3 panel-inset border border-ss-gold/30"
              >
                <p className="text-white font-oswald font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Minus className="w-3 h-3" strokeWidth={3} />
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
