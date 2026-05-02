import { motion } from 'framer-motion';

const organizations = [
  {
    name: 'MRPL',
    logo: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/companies/mrpl.png',
  },
  {
    name: 'SEZ',
    logo: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/companies/sez.png',
  },
  {
    name: 'NMPA',
    logo: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/companies/nmpa.jpeg',
  },
  {
    name: 'KIOCL',
    logo: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/companies/kiocl.png',
  },
];

export default function Scene5TrustedOrgs() {
  return (
    <section className="relative py-12 md:py-16 bg-primary">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(200, 155, 60, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(200, 155, 60, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight" style={{ fontFamily: 'Oswald' }}>
            SUPPORTING PROJECTS<br />
            <span className="text-ss-gold">ASSOCIATED WITH</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {organizations.map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 sm:p-8 bg-white hover:shadow-xl transition-all group"
            >
              <img
                src={org.logo}
                alt={org.name}
                className="w-full h-auto object-contain max-h-20 sm:max-h-24 md:max-h-28 opacity-90 group-hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
