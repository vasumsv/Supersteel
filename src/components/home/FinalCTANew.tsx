import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTANew() {
  return (
    <section className="py-40 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="section-title text-primary mb-8">
            Need Steel for<br />
            <span className="text-gold">Your Project?</span>
          </h2>

          <p className="text-2xl text-gray-600 mb-12 font-light">
            Talk to our team today for reliable supply and fast dispatch.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="btn-primary">
              Request Quote
            </Link>
            <a href="tel:+918242123456" className="px-6 py-4 border-2 border-primary text-primary font-semibold uppercase tracking-wider text-sm hover:bg-primary hover:text-white transition-all flex items-center gap-3" style={{ fontFamily: 'Oswald' }}>
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
