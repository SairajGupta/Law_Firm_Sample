import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const [activeSection, setActiveSection] = useState('home');

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

    navLinks.forEach((link) => {
      const id = link.href.substring(1);
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

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
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleMobileScroll(e, link.href)}
                    className={`font-body text-base font-medium py-2 transition-colors border-b border-border-light/50 last:border-0 ${
                      isActive ? "text-luxury-gold" : "text-primary-navy hover:text-luxury-gold"
                    }`}
                  >
                    {link.name}
                  </a>
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
