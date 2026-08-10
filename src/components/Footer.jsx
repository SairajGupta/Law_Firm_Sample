import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2v-8.37H6.46M7.83 6.17a1.63 1.63 0 1 0 1.63 1.63c-.01-.9-.74-1.63-1.63-1.63z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export default function Footer() {
  const { t, i18n } = useTranslation();

  const handleScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (window.location.pathname !== '/') {
        window.location.href = '/' + href;
      } else {
        const targetId = href.substring(1);
        const elem = document.getElementById(targetId);
        if (elem && window.lenis) {
          window.lenis.scrollTo(elem, { offset: -80 });
        } else if (elem) {
          const y = elem.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  };

  const toggleLang = () => {
    const nextLng = i18n.language && i18n.language.startsWith('ar') ? 'en' : 'ar';
    i18n.changeLanguage(nextLng);
  };

  return (
    <footer className="bg-dark-navy text-white pt-16 pb-24 md:pb-10 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.svg" alt="Al Mansoori & Partners Logo" className="w-14 h-14" />
              <h2 className="font-heading text-2xl font-semibold tracking-wide text-white leading-none">
                AL MANSOORI <br /> <span className="text-luxury-gold text-xs tracking-widest uppercase mt-1.5 block">& Partners</span>
              </h2>
            </div>
            <p className="text-light-gray/70 text-sm leading-relaxed mb-6 max-w-sm font-body">
              {t('common.footer.description')}
            </p>
            <div className="text-xs text-luxury-gold tracking-widest uppercase font-semibold">
              {t('common.footer.slogan')}
            </div>
          </div>
          
          {/* Site Sections */}
          <div className="lg:col-span-3">
            <h4 className="text-luxury-gold font-heading text-lg mb-5 border-b border-white/10 pb-2">{t('common.footer.firmSections')}</h4>
            <ul className="space-y-2.5 text-sm text-light-gray/70 font-body">
              <li><a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.aboutFirm')}</a></li>
              <li><a href="#why-choose-us" onClick={(e) => handleScroll(e, '#why-choose-us')} className="hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.whyChooseUs')}</a></li>
              <li><a href="#results" onClick={(e) => handleScroll(e, '#results')} className="hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.caseResults')}</a></li>
              <li><a href="#testimonials" onClick={(e) => handleScroll(e, '#testimonials')} className="hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.clientTestimonials')}</a></li>
              <li><Link to="/publications" className="hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.legalPublications')}</Link></li>
              <li><a href="#faq" onClick={(e) => handleScroll(e, '#faq')} className="hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.faq')}</a></li>
              <li><a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.contactSupport')}</a></li>
            </ul>
          </div>
          
          {/* Practice Areas */}
          <div className="lg:col-span-3">
            <h4 className="text-luxury-gold font-heading text-lg mb-5 border-b border-white/10 pb-2">{t('common.footer.practiceAreas')}</h4>
            <ul className="space-y-2.5 text-sm text-light-gray/70 font-body">
              <li><Link to="/expertise/corporate-law" className="hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.corporateLawMa')}</Link></li>
              <li><Link to="/expertise/commercial-law" className="hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.commercialLawIp')}</Link></li>
              <li><Link to="/expertise/real-estate" className="hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.realEstateConveyancing')}</Link></li>
              <li><Link to="/expertise/arbitration" className="hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.internationalArbitration')}</Link></li>
              <li><Link to="/expertise/family-law" className="hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.privateClientFamily')}</Link></li>
              <li><Link to="/expertise/criminal-defense" className="hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.whiteCollarCriminal')}</Link></li>
            </ul>
          </div>
          
          {/* Legal & Consultation */}
          <div className="lg:col-span-2">
            <h4 className="text-luxury-gold font-heading text-lg mb-5 border-b border-white/10 pb-2">{t('common.footer.legalAdvisory')}</h4>
            <ul className="space-y-2.5 text-sm text-light-gray/70 font-body">
              <li><Link to="/book-consultation" className="text-white font-semibold hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.bookConsultation')}</Link></li>
              <li className="pt-2"><Link to="/privacy-policy" className="hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.privacyPolicy')}</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.termsOfService')}</Link></li>
              <li><Link to="/legal-disclaimer" className="hover:text-luxury-gold transition-colors block py-0.5">{t('common.footer.legalDisclaimer')}</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-light-gray/60 font-body">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <p>{t('common.footer.copyright', { year: new Date().getFullYear() })} <span className="text-luxury-gold/80 ms-1">{t('common.footer.demoProject')}</span></p>
            <button 
              onClick={toggleLang}
              className="px-3 py-1 rounded-full border border-white/20 hover:border-luxury-gold text-white/80 hover:text-luxury-gold transition-all text-[11px] uppercase tracking-wider font-semibold"
            >
              {t('common.nav.lang')}
            </button>
          </div>
          
          {/* Social Icons Toolbar */}
          <div className="flex items-center gap-3.5">
            <a 
              href="#demo-linkedin" 
              onClick={(e) => { e.preventDefault(); alert(t('common.footer.alertSocial', { channel: 'LinkedIn' })); }}
              aria-label="LinkedIn (Demo)"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-luxury-gold/50 hover:bg-luxury-gold flex items-center justify-center text-white/90 hover:text-white transition-all duration-300 shadow-sm hover:scale-105"
            >
              <LinkedinIcon />
            </a>
            <a 
              href="#demo-twitter" 
              onClick={(e) => { e.preventDefault(); alert(t('common.footer.alertSocial', { channel: 'Twitter / X' })); }}
              aria-label="Twitter / X (Demo)"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-luxury-gold/50 hover:bg-luxury-gold flex items-center justify-center text-white/90 hover:text-white transition-all duration-300 shadow-sm hover:scale-105"
            >
              <TwitterIcon />
            </a>
            <a 
              href="#demo-instagram" 
              onClick={(e) => { e.preventDefault(); alert(t('common.footer.alertSocial', { channel: 'Instagram' })); }}
              aria-label="Instagram (Demo)"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-luxury-gold/50 hover:bg-luxury-gold flex items-center justify-center text-white/90 hover:text-white transition-all duration-300 shadow-sm hover:scale-105"
            >
              <InstagramIcon />
            </a>
            <a 
              href="#demo-facebook" 
              onClick={(e) => { e.preventDefault(); alert(t('common.footer.alertSocial', { channel: 'Facebook' })); }}
              aria-label="Facebook (Demo)"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-luxury-gold/50 hover:bg-luxury-gold flex items-center justify-center text-white/90 hover:text-white transition-all duration-300 shadow-sm hover:scale-105"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
