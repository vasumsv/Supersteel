import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, HardHat, Wrench, Building, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../utils/seoSchemas';

export default function Solutions() {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Solutions', url: '/solutions' }
  ]);
  const solutions = [
    {
      icon: Building,
      title: 'FOR BUILDERS & DEVELOPERS',
      subtitle: 'Reliable steel supply for large-scale construction projects',
      problem: 'Managing material procurement across multiple phases while maintaining quality and timelines.',
      solution: 'We provide phase-wise material planning, dedicated account management, and priority scheduling for bulk orders.',
      benefits: [
        'Bulk order discounts',
        'Phase-wise delivery scheduling',
        'Dedicated support team',
        'Material planning consultation',
        'Flexible payment terms',
      ],
      cta: 'Plan Your Next Project',
    },
    {
      icon: HardHat,
      title: 'FOR CONTRACTORS',
      subtitle: 'Fast, reliable supply for time-sensitive projects',
      problem: 'Last-minute material requirements that can halt construction and impact project timelines.',
      solution: 'Same-day loading for urgent orders with buffer stock of commonly used materials.',
      benefits: [
        'Same-day loading for urgent needs',
        'Emergency hotline support',
        'Quick quote turnaround',
        'Flexible payment terms',
        'Small to large quantity supply',
      ],
      cta: 'Get Immediate Supply',
    },
    {
      icon: Wrench,
      title: 'FOR FABRICATORS',
      subtitle: 'Precision materials for specialized fabrication work',
      problem: 'Need exact sizes and specifications for fabrication work without wastage or delays.',
      solution: 'Custom cutting services, precise weight supply, and material availability consultation.',
      benefits: [
        'Exact size specifications',
        'Custom cutting services',
        'Certified mill test reports',
        'Regular stock updates',
        'Technical specification support',
      ],
      cta: 'Discuss Your Requirements',
    },
    {
      icon: Users,
      title: 'FOR PROJECT MANAGERS',
      subtitle: 'End-to-end steel supply management',
      problem: 'Coordinating material delivery across multiple vendors while ensuring quality consistency.',
      solution: 'Single-source comprehensive steel supply with quality assurance and timeline management.',
      benefits: [
        'One-stop steel solution',
        'Quality consistency guarantee',
        'Documentation support',
        'Timeline commitment',
        'Regular progress updates',
      ],
      cta: 'Simplify Your Supply Chain',
    },
  ];

  return (
    <>
      <SEO
        title="Steel Supply Solutions for Builders, Contractors & Fabricators - Super Steels"
        description="Customized steel supply solutions for builders, contractors, fabricators, and project managers. Same-day loading, bulk discounts, dedicated support. Serving Mangalore & coastal Karnataka."
        keywords="steel supply solutions, bulk steel orders, contractor steel supply, fabricator materials, builder steel supply Mangalore"
        canonical="/solutions"
        schemaMarkup={breadcrumbs}
      />
      <div className="pt-32 bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-ss-navy via-gray-900 to-ss-navy">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-wide leading-tight"
              style={{ fontFamily: 'Oswald', letterSpacing: '0.05em' }}
            >
              SOLUTIONS TAILORED FOR<br />
              <span className="text-ss-gold">EVERY PROJECT</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light" style={{ fontFamily: 'Inter' }}>
              Reliable steel supply solutions designed for builders, contractors, fabricators, and project managers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Cards Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                {/* Card Header */}
                <div className="p-8 bg-gradient-to-br from-ss-navy to-gray-900 border-b border-gray-700">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-ss-gold rounded-lg flex items-center justify-center mb-6 shadow-lg"
                  >
                    <solution.icon className="w-8 h-8 text-ss-navy" />
                  </motion.div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-wide"
                    style={{ fontFamily: 'Oswald' }}
                  >
                    {solution.title}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: 'Inter' }}>
                    {solution.subtitle}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-8 space-y-6 bg-white">
                  {/* Challenge Section */}
                  <div>
                    <h3 className="text-sm font-bold text-ss-gold mb-2 uppercase tracking-widest" style={{ fontFamily: 'Oswald' }}>
                      The Challenge
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm" style={{ fontFamily: 'Inter' }}>
                      {solution.problem}
                    </p>
                  </div>

                  {/* Solution Section */}
                  <div>
                    <h3 className="text-sm font-bold text-ss-gold mb-2 uppercase tracking-widest" style={{ fontFamily: 'Oswald' }}>
                      Our Solution
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-sm" style={{ fontFamily: 'Inter' }}>
                      {solution.solution}
                    </p>
                  </div>

                  {/* Key Benefits */}
                  <div>
                    <h3 className="text-sm font-bold text-ss-navy mb-4 uppercase tracking-widest" style={{ fontFamily: 'Oswald' }}>
                      Key Benefits
                    </h3>
                    <ul className="space-y-3">
                      {solution.benefits.map((benefit, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-ss-gold flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: 'Inter' }}>
                            {benefit}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2 bg-ss-gold text-ss-navy px-6 py-3 rounded-lg font-bold uppercase text-sm hover:bg-yellow-500 transition-all duration-300 hover:gap-4 mt-4 shadow-md hover:shadow-lg"
                    style={{ fontFamily: 'Oswald' }}
                  >
                    {solution.cta}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-ss-navy via-gray-900 to-ss-navy">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-wide leading-tight"
              style={{ fontFamily: 'Oswald', letterSpacing: '0.05em' }}
            >
              LET'S BUILD YOUR<br />
              <span className="text-ss-gold">NEXT PROJECT</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light max-w-2xl mx-auto" style={{ fontFamily: 'Inter' }}>
              Talk to our team about your steel supply requirements and project timelines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-ss-gold text-ss-navy px-8 py-4 rounded-lg font-bold uppercase text-sm hover:bg-yellow-500 transition-all duration-300 hover:gap-5 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: 'Oswald' }}
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="tel:+918242123456"
                  className="group inline-flex items-center justify-center gap-3 bg-transparent border-2 border-ss-gold text-ss-gold px-8 py-4 rounded-lg font-bold uppercase text-sm hover:bg-ss-gold hover:text-ss-navy transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ fontFamily: 'Oswald' }}
                >
                  <Phone className="w-5 h-5" />
                  Call +91-824-2123456
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
