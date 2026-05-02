import { motion } from 'framer-motion';
import { Home, Building2, Factory, Construction, Wrench, Square } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: Home,
      name: 'Residential',
      description: 'Individual homes, villas, and apartment complexes',
    },
    {
      icon: Building2,
      name: 'Commercial',
      description: 'Offices, retail spaces, and commercial buildings',
    },
    {
      icon: Factory,
      name: 'Industrial',
      description: 'Factories, warehouses, and industrial facilities',
    },
    {
      icon: Construction,
      name: 'Infrastructure',
      description: 'Roads, bridges, and public infrastructure projects',
    },
    {
      icon: Wrench,
      name: 'Fabricators',
      description: 'Steel fabrication shops and engineering works',
    },
  ];

  return (
    <section className="py-16 metallic-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bebas text-[#111111] mb-3 uppercase tracking-wide leading-[0.95]">
            Serving <span className="text-ss-gold">Every Sector</span>
          </h2>
          <p className="text-sm text-[#6B6F74] max-w-2xl font-inter font-medium">
            Trusted by contractors and builders across multiple construction segments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white p-4 text-center panel-inset group hover:border-ss-gold transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-3 metallic-grey panel-inset flex items-center justify-center group-hover:bg-ss-gold transition-colors">
                <industry.icon className="w-8 h-8 text-ss-gold group-hover:text-white transition-colors" strokeWidth={2.5} />
              </div>
              <h3 className="spec-label text-[#111111] mb-1.5">
                {industry.name}
              </h3>
              <p className="text-xs text-[#6B6F74] leading-tight font-inter font-medium">{industry.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="mt-8 bg-white p-6 md:p-8 panel-inset border-l-2 border-ss-gold"
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bebas text-[#111111] mb-3 uppercase tracking-wide leading-none">
                Service Area
              </h3>
              <p className="text-sm text-[#6B6F74] leading-tight font-inter font-medium">
                We serve builders and contractors across <strong>South Canara</strong>, <strong>Udupi</strong>,
                and <strong>Uttara Kannada</strong> districts with reliable steel supply and prompt delivery.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="metallic-grey panel-inset p-4">
                <div className="text-4xl font-bebas text-ss-gold mb-1 leading-none tracking-wide">3</div>
                <div className="spec-label text-[#6B6F74]">Districts</div>
              </div>
              <div className="metallic-grey panel-inset p-4">
                <div className="text-4xl font-bebas text-ss-gold mb-1 leading-none tracking-wide">50+</div>
                <div className="spec-label text-[#6B6F74]">Towns</div>
              </div>
              <div className="metallic-grey panel-inset p-4">
                <div className="text-4xl font-bebas text-ss-gold mb-1 leading-none tracking-wide">100%</div>
                <div className="spec-label text-[#6B6F74]">Coverage</div>
              </div>
              <div className="metallic-grey panel-inset p-4">
                <div className="text-4xl font-bebas text-ss-gold mb-1 leading-none tracking-wide">24/7</div>
                <div className="spec-label text-[#6B6F74]">Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
