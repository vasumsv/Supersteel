import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle, FileCheck } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      icon: Shield,
      title: 'ISI Certified',
      description: 'All steel products ISI marked ensuring Indian Standards compliance',
    },
    {
      icon: Award,
      title: 'Authorized Dealer',
      description: 'Official dealer certificates from leading manufacturers',
    },
    {
      icon: CheckCircle,
      title: 'Brand Authorized',
      description: 'Authorized supplier for SAIL, TATA, JSW, Jindal and more',
    },
    {
      icon: FileCheck,
      title: 'Mill Certified',
      description: 'Complete documentation verifying grade and quality',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-ss-navy mb-4 uppercase tracking-wide"
            style={{ fontFamily: 'Oswald' }}
          >
            Certified & <span className="text-ss-gold">Authorized</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: 'Inter' }}>
            Established in 2003, with 23 years of trusted service delivering quality steel materials
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border-2 border-gray-200 hover:border-ss-gold hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-ss-gold rounded-lg flex items-center justify-center mb-4 mx-auto">
                <cert.icon className="w-6 h-6 text-ss-navy" />
              </div>
              <h3
                className="text-lg font-bold text-ss-navy mb-2 uppercase tracking-wide text-center"
                style={{ fontFamily: 'Oswald' }}
              >
                {cert.title}
              </h3>
              <p className="text-sm text-gray-700 text-center leading-relaxed" style={{ fontFamily: 'Inter' }}>
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
