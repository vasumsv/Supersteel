import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Products', href: '/products' },
    { name: 'Brands', href: '/brands' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Knowledge Center', href: '/knowledge' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? 'bg-ss-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-ss-navy/90 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Super Steels" className="h-14 md:h-16 lg:h-20 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link text-white hover:text-ss-gold transition-colors font-semibold text-sm uppercase tracking-wide ${
                  isActive(item.href) ? 'text-ss-gold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden lg:block px-6 py-3 bg-ss-gold text-ss-navy font-bold uppercase tracking-wider text-sm hover:bg-ss-gold/90 transition-all"
          >
            Get Quote
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-ss-navy border-t border-ss-gold/20 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-white hover:text-ss-gold transition-colors font-semibold ${
                  isActive(item.href) ? 'text-ss-gold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block mx-4 mt-3 text-center bg-ss-gold text-ss-navy px-6 py-3 font-bold uppercase tracking-wider text-sm"
            >
              Get Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
