import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    category: 'Apartment Projects',
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Multi-story residential developments',
  },
  {
    category: 'Warehouses',
    image: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Large-scale storage facilities',
  },
  {
    category: 'Factories',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Industrial manufacturing units',
  },
  {
    category: 'Commercial Buildings',
    image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Office complexes and retail spaces',
  },
];

export default function ProjectShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="section-title text-white mb-6">
            <span className="text-gold">Projects</span> That Define Excellence
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Proven track record across major construction categories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="relative h-[500px] group overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.category}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-12 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <h3 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue' }}>
                  {project.category}
                </h3>
                <p className="text-lg text-gray-300 mb-6">{project.description}</p>
                <div className="w-20 h-1 bg-gold"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link to="/projects" className="btn-primary">
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
