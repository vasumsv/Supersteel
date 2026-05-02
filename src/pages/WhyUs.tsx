import { motion } from 'framer-motion';
import { Shield, Award, Clock, Scale, Users, CheckCircle, AlertTriangle, TrendingUp, Zap, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { breadcrumbSchema, faqSchema } from '../utils/seoSchemas';

export default function WhyUs() {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Why Us', url: '/why-us' }
  ]);

  const faqs = faqSchema([
    {
      question: 'Why should I choose Super Steels over other suppliers?',
      answer: 'Super Steels offers 23+ years of experience, ISI certified steel, accurate weight guarantee, same-day loading for urgent orders, and direct mill procurement eliminating middlemen.'
    },
    {
      question: 'What makes Super Steels different?',
      answer: 'We guarantee correct weight, correct grade, and correct delivery time. Every shipment is weighed precisely, all steel is ISI certified from reputed mills, and materials arrive when promised.'
    },
    {
      question: 'Why is ISI certification important?',
      answer: 'ISI certification ensures compliance with Indian Standards, structural safety, legal compliance for building approval, and insurance requirements for commercial projects.'
    }
  ]);
  const trustMetrics = [
    { value: '23+', label: 'Years Experience', subtext: 'Established 2003' },
    { value: '500+', label: 'Contractors Trust Us', subtext: 'And growing' },
    { value: 'Same Day', label: 'Loading Available', subtext: 'For urgent orders' },
    { value: '100%', label: 'ISI Certified Steel', subtext: 'Quality guaranteed' },
  ];

  const features = [
    {
      icon: Clock,
      title: '23 Years of Excellence',
      description: 'Established in 2003, delivering reliable structural steel supply across coastal Karnataka',
    },
    {
      icon: Shield,
      title: 'Direct Mill Procurement',
      description: 'Sourced directly from certified mills, eliminating middlemen and ensuring authenticity',
    },
    {
      icon: Scale,
      title: 'Accurate Weight Guarantee',
      description: 'Every shipment weighed precisely - you get exactly what you pay for',
    },
    {
      icon: Zap,
      title: 'Same Day Loading',
      description: 'Buffer stock of common materials means urgent orders get immediate dispatch',
    },
    {
      icon: Users,
      title: 'Trusted by Contractors',
      description: '500+ regular contractors rely on us for their steel supply needs',
    },
    {
      icon: Award,
      title: 'Certified & Authorized',
      description: 'ISI certified steel from authorized dealers with all brand certifications and dealer certificates',
    },
  ];

  const principles = [
    {
      icon: Scale,
      title: 'Correct Weight',
      description: 'No short-weight supply. Every kilogram matters to your project budget and trust.',
    },
    {
      icon: Award,
      title: 'Correct Grade',
      description: 'Only certified steel from reputed mills. Structural safety is never negotiable.',
    },
    {
      icon: Clock,
      title: 'Correct Time',
      description: 'Material arrives when promised. Your construction schedule depends on it.',
    },
  ];

  const brands = [
    'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/1.jpg',
    'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/2.jpg',
    'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/3.jpg',
    'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/4.jpg',
    'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/5.jpg',
    'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/6.jpg',
    'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/7.jpg',
    'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/8.jpg',
    'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/9.jpg',
    'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/10.jpg',
    'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/brands/11.jpg',
  ];

  const certifications = [
    {
      title: 'ISI Certification',
      description: 'All steel products are ISI marked ensuring compliance with Indian Standards',
    },
    {
      title: 'Authorized Dealer',
      description: 'Official dealer certificates from leading steel manufacturers across India',
    },
    {
      title: 'Brand Authorizations',
      description: 'Authorized to supply products from SAIL, TATA, JSW, Jindal and other premium brands',
    },
    {
      title: 'Mill Test Certificates',
      description: 'Comprehensive documentation verifying grade, composition and quality standards',
    },
  ];

  const certifiedBenefits = [
    'ISI mark ensures compliance with Indian Standards',
    'Mill test certificates verify grade and composition',
    'Structural safety depends on correct steel grade',
    'Legal compliance for building approval',
    'Insurance requirements for commercial projects',
  ];

  const uncertifiedRisks = [
    'Structural failure risk in earthquakes',
    'Building approval rejection',
    'Legal liability for contractors',
    'Insurance claim rejection',
    'Project demolition orders in extreme cases',
  ];

  return (
    <>
      <SEO
        title="Why Choose Super Steels | 23+ Years of Trust in Mangalore Steel Supply"
        description="Discover why 500+ contractors trust Super Steels: ISI certified steel, accurate weight guarantee, same-day loading, 23+ years experience. Authorized dealer for TATA, JSW, SAIL steel."
        keywords="why choose Super Steels, ISI certified steel Mangalore, reliable steel supplier, contractor steel supply, certified steel dealer"
        canonical="/why-us"
        schemaMarkup={[breadcrumbs, faqs]}
      />
      <div className="pt-32 bg-white">
      {/* Hero Section */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ss-navy via-gray-900 to-ss-navy">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        </div>
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
              Why Contractors Trust<br />
              <span className="text-ss-gold">Super Steels</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-light" style={{ fontFamily: 'Inter' }}>
              23 years of reliable structural steel supply powering infrastructure projects across coastal Karnataka since 2003
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Metrics Section */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="text-4xl md:text-5xl font-bold text-ss-gold mb-2"
                  style={{ fontFamily: 'Oswald' }}
                >
                  {metric.value}
                </div>
                <div
                  className="text-base md:text-lg font-bold text-ss-navy mb-1 uppercase tracking-wide"
                  style={{ fontFamily: 'Oswald' }}
                >
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'Inter' }}>
                  {metric.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-ss-navy mb-4 uppercase tracking-wide"
              style={{ fontFamily: 'Oswald' }}
            >
              Why Choose <span className="text-ss-gold">Super Steels</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: 'Inter' }}>
              Six compelling reasons contractors choose us over the competition
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-ss-gold"
              >
                <div className="w-14 h-14 bg-ss-gold rounded-lg flex items-center justify-center mb-5 shadow-md">
                  <feature.icon className="w-7 h-7 text-ss-navy" />
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold text-ss-navy mb-3 uppercase tracking-wide"
                  style={{ fontFamily: 'Oswald' }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-ss-navy mb-4 uppercase tracking-wide"
              style={{ fontFamily: 'Oswald' }}
            >
              Our <span className="text-ss-gold">Core Principles</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: 'Inter' }}>
              Three non-negotiable commitments that define how we serve every customer
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-gradient-to-br from-ss-navy to-gray-900 p-8 rounded-lg text-center shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-ss-gold rounded-full flex items-center justify-center shadow-lg">
                  <principle.icon className="w-8 h-8 text-ss-navy" />
                </div>
                <h3
                  className="text-2xl font-bold text-white mb-4 uppercase tracking-wide"
                  style={{ fontFamily: 'Oswald' }}
                >
                  {principle.title}
                </h3>
                <p className="text-gray-200 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 md:py-24 bg-white">
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
              Our <span className="text-ss-gold">Certifications</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: 'Inter' }}>
              Fully certified and authorized to supply premium steel products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border-2 border-gray-200 hover:border-ss-gold hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-ss-gold rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-6 h-6 text-ss-navy" />
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

      {/* Brand Authority Section */}
      <section className="py-16 md:py-24 bg-gray-50">
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
              Authorized Dealer for <span className="text-ss-gold">Leading Brands</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: 'Inter' }}>
              We supply certified steel products from India's most trusted manufacturers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {brands.map((brandUrl, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white p-4 md:p-6 rounded-lg border-2 border-gray-200 flex items-center justify-center hover:border-ss-gold hover:shadow-lg transition-all duration-300 aspect-video"
              >
                <img
                  src={brandUrl}
                  alt={`Brand partner ${index + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certified vs Uncertified Steel */}
      <section className="py-16 md:py-24 bg-gray-50">
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
              Why <span className="text-ss-gold">Certification Matters</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto" style={{ fontFamily: 'Inter' }}>
              Understanding the difference between certified and uncertified steel
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-lg shadow-lg border-l-4 border-ss-gold"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-ss-gold rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-ss-navy" />
                </div>
                <h3
                  className="text-2xl font-bold text-ss-navy uppercase tracking-wide"
                  style={{ fontFamily: 'Oswald' }}
                >
                  Certified Steel Benefits
                </h3>
              </div>
              <div className="space-y-4">
                {certifiedBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-ss-gold flex-shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-lg shadow-lg border-l-4 border-red-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-7 h-7 text-white" />
                </div>
                <h3
                  className="text-2xl font-bold text-ss-navy uppercase tracking-wide"
                  style={{ fontFamily: 'Oswald' }}
                >
                  Uncertified Steel Risks
                </h3>
              </div>
              <div className="space-y-4">
                {uncertifiedRisks.map((risk, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                      {risk}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ss-navy via-gray-900 to-ss-navy">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        </div>
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
              Build Your Next Project<br />
              <span className="text-ss-gold">With Confidence</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light max-w-2xl mx-auto" style={{ fontFamily: 'Inter' }}>
              Join hundreds of contractors who trust Super Steels for reliable steel supply
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-ss-gold text-ss-navy px-10 py-5 rounded-lg font-bold uppercase text-base hover:bg-yellow-500 transition-all duration-300 hover:gap-5 shadow-2xl hover:shadow-ss-gold/50"
                style={{ fontFamily: 'Oswald' }}
              >
                Start Your First Order
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
