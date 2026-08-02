import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'Experience', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  const servicesDropdown = [
    { name: 'Corporate Law', href: '/expertise/corporate-law' },
    { name: 'Commercial Law', href: '/expertise/commercial-law' },
    { name: 'Real Estate', href: '/expertise/real-estate' },
    { name: 'Arbitration', href: '/expertise/arbitration' },
    { name: 'Family Law', href: '/expertise/family-law' },
    { name: 'Criminal Defense', href: '/expertise/criminal-defense' },
  ];

  const [activeSection, setActiveSection] = useState('home');

  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is intersecting
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Trigger when the element crosses 80px from top (below navbar)
      { rootMargin: '-80px 0px -70% 0px' }
    );

    const timeout = setTimeout(() => {
      navLinks.forEach((link) => {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) observer.observe(element);
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [location.pathname]);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const id = href.substring(1);
    
    if (window.location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }

    setActiveSection(id); // Instantly update UI on click
    const element = document.getElementById(id);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: -80 });
      } else {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const handleMobileScroll = (e, href) => {
    handleScroll(e, href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex-shrink-0 flex items-center gap-2">
            <img src="/logo.svg" alt="Al Mansoori & Partners Logo" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-sm" />
            <h1 className={`font-heading text-lg md:text-xl font-semibold tracking-wide leading-none transition-colors ${scrolled ? 'text-primary-navy' : 'text-white drop-shadow-md'}`}>
              AL MANSOORI <br /> <span className="text-luxury-gold text-[9px] md:text-[10px] tracking-widest uppercase mt-1 block">& Partners</span>
            </h1>
          </a>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              const isPracticeAreas = link.name === 'Practice Areas';

              if (isPracticeAreas) {
                return (
                  <div
                    key={link.name}
                    className="relative py-2"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className={`font-body text-sm font-medium transition-colors flex items-center gap-1 ${
                        isActive || isDropdownOpen || location.pathname.startsWith('/expertise')
                          ? "text-luxury-gold drop-shadow-md"
                          : scrolled
                          ? "text-text-main hover:text-luxury-gold"
                          : "text-white hover:text-luxury-gold drop-shadow-md"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </a>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-0 top-full -mt-1 w-64 bg-white/95 backdrop-blur-md border border-border-light shadow-soft-xl rounded-xl py-2 z-50 overflow-hidden"
                        >
                          <div className="px-4 py-2 mb-1 border-b border-border-light/50 flex items-center justify-between">
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-luxury-gold">
                              Our Expertise
                            </span>
                          </div>
                          <div className="flex flex-col">
                            {servicesDropdown.map((service) => {
                              const isServiceActive = location.pathname === service.href;
                              return (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  onClick={() => setIsDropdownOpen(false)}
                                  className={`px-4 py-2 text-sm font-body transition-all flex items-center justify-between group ${
                                    isServiceActive
                                      ? "text-luxury-gold font-semibold bg-luxury-gold/5"
                                      : "text-primary-navy hover:text-luxury-gold hover:bg-primary-navy/5 hover:translate-x-0.5"
                                  }`}
                                >
                                  <span>{service.name}</span>
                                  <span
                                    className={`text-xs text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity ${
                                      isServiceActive ? "opacity-100" : ""
                                    }`}
                                  >
                                    ✦
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`font-body text-sm font-medium transition-colors ${
                    isActive
                      ? "text-luxury-gold drop-shadow-md"
                      : scrolled
                      ? "text-text-main hover:text-luxury-gold"
                      : "text-white hover:text-luxury-gold drop-shadow-md"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Button variant="gold" size="sm" onClick={() => navigate('/book-consultation')}>
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`hover:text-luxury-gold transition-colors focus:outline-none ${scrolled ? 'text-primary-navy' : 'text-white drop-shadow-md'}`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border-light shadow-soft-lg overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                const isPracticeAreas = link.name === 'Practice Areas';
                return (
                  <div key={link.name} className="flex flex-col border-b border-border-light/50 last:border-0">
                    <div className="flex items-center justify-between py-2">
                      <a
                        href={link.href}
                        onClick={(e) => handleMobileScroll(e, link.href)}
                        className={`font-body text-base font-medium transition-colors ${
                          isActive || (isPracticeAreas && location.pathname.startsWith('/expertise'))
                            ? "text-luxury-gold"
                            : "text-primary-navy hover:text-luxury-gold"
                        }`}
                      >
                        {link.name}
                      </a>
                      {isPracticeAreas && (
                        <button
                          onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                          className="p-1 text-primary-navy hover:text-luxury-gold focus:outline-none"
                          aria-label="Toggle practice areas dropdown"
                        >
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-200 ${
                              isMobileDropdownOpen ? "rotate-180 text-luxury-gold" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {isPracticeAreas && isMobileDropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 pb-2 flex flex-col space-y-2 overflow-hidden border-l-2 border-luxury-gold/40 ml-2 my-1"
                      >
                        {servicesDropdown.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileDropdownOpen(false);
                            }}
                            className={`text-sm py-1.5 transition-colors flex items-center gap-2 ${
                              location.pathname === service.href
                                ? "text-luxury-gold font-semibold"
                                : "text-text-muted hover:text-primary-navy"
                            }`}
                          >
                            <span className="text-[10px] text-luxury-gold">✦</span>
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
              <div className="pt-2 md:hidden">
                <Button variant="gold" className="w-full" onClick={() => {
                  navigate('/book-consultation');
                  setIsMobileMenuOpen(false);
                }}>
                  Book Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
