import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Square } from 'lucide-react';

export default function ProductsShowcase() {
  const products = [
    {
      name: 'TMT Bars',
      description: 'High-strength reinforcement bars for concrete structures',
      grades: 'Fe 415, Fe 500, Fe 550',
      image: 'linear-gradient(135deg, #C89B3C 0%, #A07828 100%)',
    },
    {
      name: 'Structural Steel',
      description: 'Beams, channels, angles for framework construction',
      grades: 'ISMC, ISMB, ISA, ISNT',
      image: 'linear-gradient(135deg, #6B6F74 0%, #111111 100%)',
    },
    {
      name: 'Sheets & Plates',
      description: 'MS sheets, chequered plates, GP and HR sheets',
      grades: 'Various thicknesses',
      image: 'linear-gradient(135deg, #C89B3C 0%, #6B6F74 100%)',
    },
    {
      name: 'Steel Pipes',
      description: 'Seamless and welded pipes for plumbing and structures',
      grades: 'Various sizes & grades',
      image: 'linear-gradient(135deg, #111111 0%, #6B6F74 100%)',
    },
    {
      name: 'Roofing Materials',
      description: 'Galvanized sheets, color-coated roofing solutions',
      grades: 'GI, GP, Color coated',
      image: 'linear-gradient(135deg, #6B6F74 0%, #C89B3C 100%)',
    },
  ];

  return (
    <section className="py-16 metallic-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bebas text-white mb-3 uppercase tracking-wide leading-[0.95]">
            Complete Range of <span className="text-ss-gold">Steel Products</span>
          </h2>
          <p className="text-sm text-[#F4F5F7] max-w-2xl font-inter font-medium">
            From foundation to roofing, we supply everything your construction needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
              className="group bg-white overflow-hidden panel-inset"
            >
              <div
                className="h-32 flex items-center justify-center relative overflow-hidden"
                style={{ background: product.image }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <h3 className="text-2xl font-bebas text-white uppercase tracking-wide relative z-10 leading-none">
                  {product.name}
                </h3>
              </div>
              <div className="p-4">
                <p className="text-xs text-[#6B6F74] mb-2 leading-tight font-inter font-medium">{product.description}</p>
                <p className="spec-label text-[#111111] mb-3">
                  Grades: <span className="text-ss-gold">{product.grades}</span>
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-ss-gold font-oswald font-bold uppercase text-[0.65rem] tracking-wider hover:translate-x-1 transition-transform"
                >
                  <Square className="w-2 h-2" fill="currentColor" />
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <Link
            to="/products"
            className="btn-industrial inline-flex items-center gap-2 bg-ss-gold text-ss-navy px-8 py-3 font-oswald font-bold uppercase text-xs tracking-wider border-ss-gold"
          >
            View All Products
            <ArrowRight className="w-4 h-4" strokeWidth={3} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
