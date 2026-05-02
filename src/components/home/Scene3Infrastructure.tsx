import { motion } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'Railway Projects',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/projects%20types/Indian-Railways.jpg',
  },
  {
    title: 'Bridge Infrastructure',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/projects%20types/Bridge%20Infrastructure.png',
  },
  {
    title: 'Highway Construction',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/projects%20types/high.jpg',
  },
  {
    title: 'Airport Development',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/projects%20types/air%5Bort.png',
  },
  {
    title: 'Dam Construction',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/projects%20types/Dam%20Construction.jpg',
  },
  {
    title: 'Commercial Complexes',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/projects%20types/Commercial%20Complexes%20%20.jpg',
  },
  {
    title: 'Residential Complexes',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/projects%20types/Residential%20Complexes%20%20.jpeg',
  },
  {
    title: 'Manufacturing Units',
    image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/projects%20types/Manufacturing%20Units.webp',
  },
];

export default function Scene3Infrastructure() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative bg-primary py-12 md:py-16">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(200, 155, 60, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(200, 155, 60, 0.1) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-wide"
            style={{ fontFamily: 'Oswald', letterSpacing: '0.05em' }}
          >
            POWERING<br />
            <span className="text-gold">INFRASTRUCTURE DEVELOPMENT</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Inter', fontWeight: 300 }}>
            Steel materials supporting projects across multiple infrastructure sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[200px] sm:h-[240px] md:h-[280px] group overflow-hidden"
          >
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-none text-center px-4" style={{ fontFamily: 'Oswald' }}>
                {projects[0].title}
              </h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[200px] sm:h-[240px] md:h-[280px] group overflow-hidden"
          >
            <img
              src={projects[1].image}
              alt={projects[1].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-none text-center px-4" style={{ fontFamily: 'Oswald' }}>
                {projects[1].title}
              </h3>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {projects.slice(2).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative h-[160px] sm:h-[200px] md:h-[220px] group overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-none text-center px-2" style={{ fontFamily: 'Oswald' }}>
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
