import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-gray-300 border-t border-gold/20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <img src="/logo.png" alt="Super Steels" className="h-12 md:h-16 mb-4 md:mb-6" />
            <p className="text-xs sm:text-sm leading-relaxed text-gray-400">
              Premium structural steel supplier serving coastal Karnataka since 2003. Built on trust, reliability, and unwavering quality.
            </p>
          </div>

          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6 uppercase tracking-wider" style={{ fontFamily: 'Oswald' }}>
              Quick Links
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li><Link to="/" className="text-xs sm:text-sm hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/solutions" className="text-xs sm:text-sm hover:text-gold transition-colors">Solutions</Link></li>
              <li><Link to="/products" className="text-xs sm:text-sm hover:text-gold transition-colors">Products</Link></li>
              <li><Link to="/projects" className="text-xs sm:text-sm hover:text-gold transition-colors">Projects</Link></li>
              <li><Link to="/why-us" className="text-xs sm:text-sm hover:text-gold transition-colors">Why Us</Link></li>
              <li><Link to="/contact" className="text-xs sm:text-sm hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6 uppercase tracking-wider" style={{ fontFamily: 'Oswald' }}>
              Products
            </h3>
            <ul className="space-y-2 md:space-y-3 text-xs sm:text-sm text-gray-400">
              <li>TMT Bars</li>
              <li>Structural Steel</li>
              <li>Steel Plates</li>
              <li>Steel Pipes</li>
              <li>Roofing Materials</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-base md:text-lg font-semibold mb-4 md:mb-6 uppercase tracking-wider" style={{ fontFamily: 'Oswald' }}>
              Contact Info
            </h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start gap-2 md:gap-3 text-xs sm:text-sm">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0 text-gold" />
                <span>N.H.66, 4th Mile, Kulur<br />Mangalore - 575 013</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3 text-xs sm:text-sm">
                <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 text-gold" />
                <div className="flex flex-col">
                  <a href="tel:+919845590892" className="hover:text-gold transition-colors">
                    +91 9845590892
                  </a>
                  <a href="tel:+919901806851" className="hover:text-gold transition-colors">
                    +91 99018 06851
                  </a>
                  <a href="tel:08242450678" className="hover:text-gold transition-colors">
                    0824 - 2450678
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3 text-xs sm:text-sm">
                <Mail className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0 text-gold" />
                <div className="flex flex-col">
                  <a href="mailto:supersteels@rocketmail.com" className="hover:text-gold transition-colors">
                    supersteels@rocketmail.com
                  </a>
                  <a href="mailto:info@supersteels.in" className="hover:text-gold transition-colors">
                    info@supersteels.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 md:gap-3 text-xs sm:text-sm">
                <Clock className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0 text-gold" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
            © {currentYear} Super Steels. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs sm:text-sm text-gray-400">
            <span>Since 2003</span>
            <span>•</span>
            <span>20+ Years Experience</span>
            <span>•</span>
            <span>Trusted Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
