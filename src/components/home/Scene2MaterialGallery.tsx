import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const materials = [
  {
    title: 'TMT Bars',
    subtitle: 'High-Strength Reinforcement',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/10mm.png',
    size: 'large',
  },
  {
    title: 'Structural Sections',
    subtitle: 'Beams, Channels & Angles',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/Ms%20angles.png',
    size: 'medium',
  },
  {
    title: 'Pipes & Tubes',
    subtitle: 'Seamless & Welded',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/PIPES%20AND%20TUBBES.png',
    size: 'small',
  },
  {
    title: 'Roofing Sheets',
    subtitle: 'Metal Roofing Solutions',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/ROOF%20SHEET%201.jpg',
    size: 'medium',
  },
  {
    title: 'Cement',
    subtitle: 'Premium Grade',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/cement/13.jpg',
    size: 'large',
  },
  {
    title: 'Binding Wire',
    subtitle: 'Construction Grade',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/BINDING%20WIRES.png',
    size: 'small',
  },
];

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'large':
      return 'col-span-2 row-span-2 h-[250px] md:h-[400px] lg:h-[500px]';
    case 'medium':
      return 'col-span-1 row-span-1 h-[180px] md:h-[250px] lg:h-[300px]';
    case 'small':
      return 'col-span-1 row-span-1 h-[150px] md:h-[180px] lg:h-[220px]';
    default:
      return 'col-span-1 row-span-1 h-[180px] md:h-[250px]';
  }
};

export default function Scene2MaterialGallery() {
  return (
    <section className="relative py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-ss-navy mb-3 md:mb-4 leading-tight" style={{ fontFamily: 'Oswald' }}>
            MATERIALS THAT BUILD<br />
            <span className="text-ss-gold">STRONG STRUCTURES</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#6B6F74] max-w-2xl" style={{ fontFamily: 'Inter' }}>
            From reinforcement bars to structural steel sections, we supply materials for residential, commercial and infrastructure projects.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4 auto-rows-auto">
          {materials.map((material, index) => (
            <motion.div
              key={material.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden ${getSizeClasses(material.size)}`}
            >
              <img
                src={material.image}
                alt={material.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6">
                <div className="text-[9px] sm:text-[10px] md:text-xs text-ss-gold uppercase tracking-widest mb-0.5 md:mb-1" style={{ fontFamily: 'Barlow Semi Condensed' }}>
                  {material.subtitle}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-white mb-1 md:mb-2 leading-tight" style={{ fontFamily: 'Oswald' }}>
                  {material.title}
                </h3>
                <Link
                  to="/products"
                  className="inline-block text-white text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider hover:text-ss-gold transition-colors"
                  style={{ fontFamily: 'Barlow Semi Condensed' }}
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 md:mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Link
            to="/products"
            className="inline-block px-6 sm:px-8 md:px-10 py-3 md:py-4 bg-ss-navy text-white font-semibold uppercase tracking-wider text-xs sm:text-sm hover:bg-ss-gold hover:text-ss-navy transition-all"
            style={{ fontFamily: 'Barlow Semi Condensed' }}
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
