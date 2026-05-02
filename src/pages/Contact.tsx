import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../utils/seoSchemas';

export default function Contact() {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' }
  ]);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Super Steels",
      "telephone": "+91-9845590892",
      "email": "supersteels@rocketmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "N.H.66, 4th Mile, Kulur",
        "addressLocality": "Mangalore",
        "addressRegion": "Karnataka",
        "postalCode": "575013",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <SEO
        title="Contact Super Steels | Steel Supplier in Mangalore, Karnataka"
        description="Get in touch with Super Steels for steel supply needs. Call +91-9845590892 or visit us at N.H.66, 4th Mile, Kulur, Mangalore - 575 013. Same-day loading available."
        keywords="contact Super Steels, steel supplier Mangalore contact, TMT bars Mangalore phone, steel dealer location"
        canonical="/contact"
        schemaMarkup={[breadcrumbs, contactSchema]}
      />
      <div className="pt-32">
      <section className="section-spacing bg-gradient-to-br from-ss-navy via-ss-charcoal to-ss-navy">
        <div className="container mx-auto px-4 content-max-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="section-title text-white mb-6">
              Get in <span className="text-ss-gold">Touch</span>
            </h1>
            <p className="hero-subtitle max-w-2xl mx-auto">
              Call us or visit our location for immediate assistance
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 content-max-width">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                info: '+91 9845590892',
                detail: '+91 99018 06851 | 0824 - 2450678',
                link: 'tel:+919845590892',
              },
              {
                icon: Mail,
                title: 'Email Us',
                info: 'supersteels@rocketmail.com',
                detail: 'info@supersteels.in',
                link: 'mailto:supersteels@rocketmail.com',
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                info: 'N.H.66, 4th Mile, Kulur',
                detail: 'Mangalore - 575 013',
                link: 'https://maps.app.goo.gl/C87GnBrEZ1ronBwaA',
              },
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 lg:p-10 text-center hover:bg-gray-50 transition-all group border-2 border-gray-200 hover:border-ss-gold"
              >
                <contact.icon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-ss-gold mx-auto mb-4 md:mb-5 lg:mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-ss-navy mb-2 md:mb-3 uppercase">
                  {contact.title}
                </h3>
                <p className="text-base md:text-lg text-ss-gold font-semibold mb-2">{contact.info}</p>
                <p className="text-xs sm:text-sm text-gray-600">{contact.detail}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-white border-t-2 border-gray-200">
        <div className="container mx-auto px-4 content-max-width">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-ss-navy mb-6">
              Visit Our <span className="text-ss-gold">Location</span>
            </h2>
            <p className="text-lg text-gray-600">
              Find us on Google Maps for easy navigation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[450px] md:h-[550px] overflow-hidden shadow-2xl border-2 border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.4662944697987!2d74.86357831482228!3d12.862686990911545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35d6cbd5e89b5%3A0xacbd06fb06de77d5!2sSuper%20Steels!5e0!3m2!1sen!2sus!4v1647890123456!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Super Steels Location"
            ></iframe>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 md:mt-8 text-center"
          >
            <a
              href="https://maps.app.goo.gl/C87GnBrEZ1ronBwaA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <MapPin className="w-4 h-4 md:w-5 md:h-5" />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
