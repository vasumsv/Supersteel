import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { productsSchema, breadcrumbSchema } from '../utils/seoSchemas';

export default function Products() {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' }
  ]);
  const tmtBars = [
    { size: '6mm', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/6mm.png' },
    { size: '8mm', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/8mm1.png' },
    { size: '10mm', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/10mm.png' },
    { size: '12mm', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/12mm.png' },
    { size: '16mm', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/16mm.png' },
    { size: '20mm', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/20mm.png' },
    { size: '25mm', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/25mm.png' },
    { size: '32mm', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tMT%20BAR/32mm.png' },
  ];

  const structuralSections = [
    { name: 'MS Angles', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/Ms%20angles.png' },
    { name: 'MS Flats', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/MS%20Flats.png' },
    { name: 'MS Round', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/MS%20ROUND.png' },
    { name: 'MS Square', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/MS%20SQUARE.png' },
    { name: 'MS Channel', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/MS%20CHANNEL.png' },
    { name: 'Round Rods', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/rOUND%20RODS.jpg' },
    { name: 'I-Beam', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/I-BEAM.png' },
    { name: 'Brite Rods', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/BRITE%20RODS.png' },
    { name: 'Hexagonal Rods', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/HEZAGONAL%20RODS.png' },
    { name: 'Square Rods', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/SQUARE%20RODS.png' },
  ];

  const pipesAndTubes = [
    { name: 'Pipes & Tubes', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/PIPES%20AND%20TUBBES.png' },
    { name: 'GI Square Pipe', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/GI%20SQUARE%20PIPE.png' },
    { name: 'GI Round Pipe', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/GI%20ROUND%20PIPE.png' },
    { name: 'MS Square Pipe', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/MS%20SQUARE%20PIPE.png' },
    { name: 'MS Round Pipe', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/sTRUCTURAL%20SECTIONS/MS%20ROUND%20PIPE.png' },
  ];

  const roofingSheets = [
    { name: 'Blue Roofing Sheet', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/BLUE%20ROOFING%20SHEET.png' },
    { name: 'Red Roofing Sheet', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/RED%20SHEET.png' },
    { name: 'Corrugated Roofing Sheet', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/ROOF%20SHEET%201.jpg' },
  ];

  const cementBrands = [
    { name: 'Ambuja Cement', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/cement/13.jpg' },
    { name: 'UltraTech Cement', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/cement/14.jpg' },
    { name: 'ACC Cement', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/cement/15.jpg' },
    { name: 'Ramco Cement', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/cement/16.jpg' },
  ];

  const tmtGrades = [
    { name: 'FE 550 Grade TMT Bar', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tmt%20options%20and%20binding%20wires/fe%20550%20grade%20tmt%20bar%20.png' },
    { name: 'FE 550D Grade TMT Bar', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tmt%20options%20and%20binding%20wires/fe%20550%20grade%20tmt%20bar%20.png' },
    { name: 'CRS Grade TMT Bar', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tmt%20options%20and%20binding%20wires/crs%20grade%20tmt%20bar.png' },
    { name: 'Epoxy Coated TMT Bar', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tmt%20options%20and%20binding%20wires/epoxy%20coated%20tmt%20bar.png' },
    { name: 'Cut and Bent TMT Bar', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tmt%20options%20and%20binding%20wires/cur%20and%20bent%20tmt%20bar.png' },
    { name: '4MM TMT Coil', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tmt%20options%20and%20binding%20wires/4mm%20TMT%20Coil.png' },
  ];

  const bindingWire = [
    { name: 'Binding Wire', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/BINDING%20WIRES.png' },
    { name: 'MS Tata Binding Wire', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tmt%20options%20and%20binding%20wires/ms%20tata%20binding%20wire.png' },
    { name: 'Kamadhenu Binding Wire', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tmt%20options%20and%20binding%20wires/kamadhenu%20binding%20wire.png' },
    { name: 'Sunvik Binding Wire', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tmt%20options%20and%20binding%20wires/sunbik%20binding%20wire.png' },
    { name: 'GI Binding Wire', image: 'https://raw.githubusercontent.com/vasumsv/Vnova-Technologies/refs/heads/main/Super%20steel/tmt%20options%20and%20binding%20wires/gi%20binding%20wire.png' },
  ];

  return (
    <>
      <SEO
        title="Steel Products Catalog | TMT Bars, Structural Steel - Super Steels Mangalore"
        description="Explore Super Steels' complete product range: TMT bars (6mm-32mm), structural steel sections, pipes, roofing sheets, cement, and binding wire. ISI certified quality materials."
        keywords="TMT bars Mangalore, structural steel Karnataka, steel pipes Udupi, roofing sheets, MS angles, steel channels, construction materials"
        canonical="/products"
        schemaMarkup={[productsSchema, breadcrumbs]}
      />
      <div className="pt-24 bg-white">
      <section className="py-16 bg-gradient-to-br from-ss-navy via-[#1a2e4a] to-ss-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 uppercase tracking-tight px-2">
              Product Catalog
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 px-4">
              Premium quality construction materials for builders, contractors, and engineers
            </p>
          </motion.div>
        </div>
      </section>

      <section id="tmt-grades" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ss-navy mb-2 md:mb-3 uppercase">
              Grades and Types for TMT Bar Available
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#6B6F74] max-w-3xl">
              Multiple grades and forms of TMT bars to suit every construction requirement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {tmtGrades.map((grade, index) => (
              <motion.div
                key={grade.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-gray-100"
              >
                <div className="h-[260px] bg-[#F4F5F7] flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={grade.image}
                    alt={grade.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-white border-t border-gray-100">
                  <h3 className="text-base md:text-lg font-bold text-ss-navy uppercase tracking-wide">{grade.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="tmt-bars" className="py-16 bg-[#F4F5F7]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ss-navy mb-2 md:mb-3 uppercase">
              TMT Bars
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#6B6F74] max-w-3xl">
              High strength reinforcement bars used for construction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {tmtBars.map((bar, index) => (
              <motion.div
                key={bar.size}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="h-[280px] bg-white flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={bar.image}
                    alt={`${bar.size} TMT Bar`}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-white border-t border-gray-100">
                  <h3 className="text-xl font-bold text-ss-navy uppercase tracking-wide">{bar.size}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="structural-sections" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ss-navy mb-2 md:mb-3 uppercase">
              Structural Sections
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#6B6F74] max-w-3xl">
              Steel sections for construction and fabrication needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {structuralSections.map((section, index) => (
              <motion.div
                key={section.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="h-[280px] bg-[#F4F5F7] flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-white border-t border-gray-100">
                  <h3 className="text-base md:text-lg font-bold text-ss-navy uppercase tracking-wide">{section.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pipes-tubes" className="py-16 bg-[#F4F5F7]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ss-navy mb-2 md:mb-3 uppercase">
              Pipes & Tubes
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#6B6F74] max-w-3xl">
              Steel pipes and tubes for plumbing and structural applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {pipesAndTubes.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="h-[280px] bg-white flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-white border-t border-gray-100">
                  <h3 className="text-base md:text-lg font-bold text-ss-navy uppercase tracking-wide">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="roofing-sheets" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ss-navy mb-2 md:mb-3 uppercase">
              Roofing Sheets
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#6B6F74] max-w-3xl">
              Durable roofing sheets for industrial and residential structures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {roofingSheets.map((sheet, index) => (
              <motion.div
                key={sheet.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="h-[280px] bg-[#F4F5F7] flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={sheet.image}
                    alt={sheet.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-white border-t border-gray-100">
                  <h3 className="text-base md:text-lg font-bold text-ss-navy uppercase tracking-wide">{sheet.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="cement" className="py-16 bg-[#F4F5F7]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ss-navy mb-2 md:mb-3 uppercase">
              Cement
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#6B6F74] max-w-3xl">
              Premium cement brands for all construction needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {cementBrands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="h-[280px] bg-white flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-white border-t border-gray-100">
                  <h3 className="text-base md:text-lg font-bold text-ss-navy uppercase tracking-wide text-center">{brand.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="binding-wire" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ss-navy mb-2 md:mb-3 uppercase">
              Binding Wire
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#6B6F74] max-w-3xl">
              Quality binding wire for reinforcement tying
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {bindingWire.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
              >
                <div className="h-[280px] bg-[#F4F5F7] flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-white border-t border-gray-100">
                  <h3 className="text-base md:text-lg font-bold text-ss-navy uppercase tracking-wide">{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-ss-navy via-[#1a2e4a] to-ss-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase">
              Need a Custom Quote?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us for bulk orders and custom requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-ss-gold text-ss-navy px-8 py-4 rounded font-bold uppercase text-sm hover:bg-ss-gold/90 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:+918242123456"
                className="inline-flex items-center justify-center gap-2 bg-white text-ss-navy px-8 py-4 rounded font-bold uppercase text-sm hover:bg-white/90 transition-colors"
              >
                Call +91-824-2123456
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
