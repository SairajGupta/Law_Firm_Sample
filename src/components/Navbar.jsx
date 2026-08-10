import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/Button';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const toggleLang = () => {
    const nextLng = i18n.language && i18n.language.startsWith('ar') ? 'en' : 'ar';
    i18n.changeLanguage(nextLng);
  };

  const navLinks = [
    { key: 'home', name: t('common.nav.home'), href: '#home' },
    { key: 'about', name: t('common.nav.about'), href: '#about' },
    { key: 'practiceAreas', name: t('common.nav.practiceAreas'), href: '#practice-areas' },
    { key: 'experience', name: t('common.nav.experience'), href: '#why-choose-us' },
    { key: 'testimonials', name: t('common.nav.testimonials'), href: '#testimonials' },
    { key: 'insights', name: t('common.nav.insights'), href: '#insights' },
    { key: 'contact', name: t('common.nav.contact'), href: '#contact' },
  ];

  const servicesDropdown = [
    { key: 'corporate', name: t('common.nav.corporateLaw'), href: '/expertise/corporate-law' },
    { key: 'commercial', name: t('common.nav.commercialLaw'), href: '/expertise/commercial-law' },
    { key: 'realEstate', name: t('common.nav.realEstate'), href: '/expertise/real-estate' },
    { key: 'arbitration', name: t('common.nav.arbitration'), href: '/expertise/arbitration' },
    { key: 'family', name: t('common.nav.familyLaw'), href: '/expertise/family-law' },
    { key: 'criminal', name: t('common.nav.criminalDefense'), href: '/expertise/criminal-defense' },
  ];

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
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
  }, [location.pathname, i18n.language]);

  const handleScroll = (e, href) => {
    e.preventDefault();
    const id = href.substring(1);
    
    if (window.location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }

    setActiveSection(id);
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
          <Link 
            to="/" 
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                if (window.lenis) {
                  window.lenis.scrollTo(0, { offset: 0 });
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }
            }}
            className="flex-shrink-0 flex items-center gap-2"
          >
            <img src="/logo.svg" alt="Al Mansoori & Partners Logo" className="w-8 h-8 md:w-10 md:h-10 drop-shadow-sm" />
            <h1 className={`font-heading text-lg md:text-xl font-semibold tracking-wide leading-none transition-colors ${scrolled ? 'text-primary-navy' : 'text-white drop-shadow-md'}`}>
              AL MANSOORI <br /> <span className="text-luxury-gold text-[9px] md:text-[10px] tracking-widest uppercase mt-1 block">& Partners</span>
            </h1>
          </Link>
          
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isPracticeAreas = link.key === 'practiceAreas';
              const isActive = (location.pathname === '/' && activeSection === link.href.substring(1)) || 
                (link.key === 'insights' && location.pathname.startsWith('/publications')) || 
                (isPracticeAreas && location.pathname.startsWith('/expertise'));

              if (isPracticeAreas) {
                return (
                  <div
                    key={link.key}
                    className="relative py-2"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)}
                      className={`relative py-1 font-body text-sm font-medium transition-colors flex items-center gap-1 ${
                        isActive || isDropdownOpen
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
                      <motion.span
                        initial={false}
                        animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-luxury-gold rounded-full origin-center"
                      />
                    </a>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute start-0 top-full -mt-1 w-64 bg-white/95 backdrop-blur-md border border-border-light shadow-soft-xl rounded-xl py-2 z-50 overflow-hidden"
                        >
                          <div className="px-4 py-2 mb-1 border-b border-border-light/50 flex items-center justify-between">
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-luxury-gold">
                              {t('common.nav.ourExpertise')}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            {servicesDropdown.map((service) => {
                              const isServiceActive = location.pathname === service.href;
                              return (
                                <Link
                                  key={service.key}
                                  to={service.href}
                                  onClick={() => setIsDropdownOpen(false)}
                                  className={`px-4 py-2 text-sm font-body transition-all flex items-center justify-between group ${
                                    isServiceActive
                                      ? "text-luxury-gold font-semibold bg-luxury-gold/5"
                                      : "text-primary-navy hover:text-luxury-gold hover:bg-primary-navy/5 ltr:hover:translate-x-0.5 rtl:hover:-translate-x-0.5"
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
                  key={link.key}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`relative py-1 font-body text-sm font-medium transition-colors ${
                    isActive
                      ? "text-luxury-gold drop-shadow-md"
                      : scrolled
                      ? "text-text-main hover:text-luxury-gold"
                      : "text-white hover:text-luxury-gold drop-shadow-md"
                  }`}
                >
                  {link.name}
                  <motion.span
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-luxury-gold rounded-full origin-center"
                  />
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className={`px-3.5 py-1.5 rounded-full border border-luxury-gold/60 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                scrolled 
                  ? 'text-primary-navy hover:bg-luxury-gold hover:text-white bg-luxury-gold/5' 
                  : 'text-white hover:bg-luxury-gold/20 border-white/40 hover:border-luxury-gold bg-white/10 backdrop-blur-sm'
              }`}
              title="Switch Language"
            >
              {t('common.nav.lang')}
            </button>
            <Button variant="gold" size="sm" onClick={() => navigate('/book-consultation')}>
              {t('common.nav.bookConsultation')}
            </Button>
          </div>

          {/* Mobile Menu Toggle & Lang Switcher */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={toggleLang}
              className={`px-3 py-1 rounded-full border border-luxury-gold/60 text-xs font-semibold uppercase tracking-wider transition-all duration-300 md:hidden ${
                scrolled 
                  ? 'text-primary-navy bg-luxury-gold/5' 
                  : 'text-white bg-white/10 backdrop-blur-sm border-white/40'
              }`}
            >
              {t('common.nav.lang')}
            </button>
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
                const isPracticeAreas = link.key === 'practiceAreas';
                const isActive = (location.pathname === '/' && activeSection === link.href.substring(1)) || 
                  (link.key === 'insights' && location.pathname.startsWith('/publications')) || 
                  (isPracticeAreas && location.pathname.startsWith('/expertise'));
                return (
                  <div key={link.key} className="flex flex-col border-b border-border-light/50 last:border-0">
                    <div className="flex items-center justify-between py-2">
                      <a
                        href={link.href}
                        onClick={(e) => handleMobileScroll(e, link.href)}
                        className={`relative inline-block py-1 font-body text-base font-medium transition-colors ${
                          isActive
                            ? "text-luxury-gold font-semibold"
                            : "text-primary-navy hover:text-luxury-gold"
                        }`}
                      >
                        {link.name}
                        <motion.span
                          initial={false}
                          animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-luxury-gold rounded-full origin-center"
                        />
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
                        className="ps-4 pb-2 flex flex-col space-y-2 overflow-hidden border-s-2 border-luxury-gold/40 ms-2 my-1"
                      >
                        {servicesDropdown.map((service) => (
                          <Link
                            key={service.key}
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
                  {t('common.nav.bookConsultation')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
