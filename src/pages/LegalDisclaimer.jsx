import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ShieldAlert, AlertTriangle, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function LegalDisclaimer() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Header Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden pt-28 pb-16 bg-primary-navy">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat opacity-15 mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 z-0"></div>

        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <nav className="flex items-center gap-2 text-xs md:text-sm text-white/70 font-body mb-6">
            <Link to="/" className="hover:text-luxury-gold transition-colors">{t('pages.disclaimer.homeLink')}</Link>
            <ChevronRight size={14} className="text-luxury-gold flex-shrink-0 rtl:rotate-180" />
            <span className="text-luxury-gold font-medium">{t('pages.disclaimer.badge')}</span>
          </nav>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-luxury-gold/20 text-luxury-gold px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-luxury-gold/30 mb-4">
              <ShieldAlert size={14} className="text-luxury-gold" />
              {t('pages.disclaimer.badge')}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white leading-tight mb-4 drop-shadow-sm">
              {t('pages.disclaimer.title1')} <span className="text-luxury-gold italic">{t('pages.disclaimer.titleGold')}</span>
            </h1>
            <p className="text-white/80 font-body text-base md:text-lg max-w-2xl leading-relaxed">
              {t('pages.disclaimer.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Disclaimer Content */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-12 max-w-5xl mx-auto font-body text-text-main">
        <div className="bg-white p-8 md:p-14 rounded-2xl shadow-soft-xl border border-border-light space-y-12">

          {/* Highlight Box */}
          <div className="p-6 md:p-8 bg-amber-50/80 border-s-4 border-amber-600 rounded-xl text-amber-950 flex flex-col md:flex-row md:items-center gap-4 shadow-soft-sm">
            <AlertTriangle className="text-amber-700 w-8 h-8 flex-shrink-0" />
            <div className="text-sm md:text-base leading-relaxed">
              <strong className="font-semibold block mb-1 font-heading text-lg">{t('pages.disclaimer.boxTitle')}</strong>
              {t('pages.disclaimer.boxDesc')}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy flex items-center gap-3">
              <CheckCircle2 className="text-luxury-gold w-6 h-6 flex-shrink-0" />
              {t('pages.disclaimer.s1Title')}
            </h2>
            <p className="leading-relaxed text-base md:text-lg">
              {t('pages.disclaimer.s1Desc')}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy">
              {t('pages.disclaimer.s2Title')}
            </h2>
            <p className="leading-relaxed">
              {t('pages.disclaimer.s2Desc')}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy">
              {t('pages.disclaimer.s3Title')}
            </h2>
            <p className="leading-relaxed">
              {t('pages.disclaimer.s3Desc')}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy">
              {t('pages.disclaimer.s4Title')}
            </h2>
            <p className="leading-relaxed">
              {t('pages.disclaimer.s4Desc')}
            </p>
          </div>

          <div className="pt-8 border-t border-border-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-light-gray/60 p-6 rounded-xl text-sm font-body">
            <div className="leading-relaxed">
              {t('pages.disclaimer.footerLicensing')}
            </div>
            <Link 
              to="/book-consultation"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-navy text-white hover:bg-luxury-gold hover:text-white rounded-full font-semibold transition-colors flex-shrink-0 shadow-sm"
            >
              <span>{t('pages.disclaimer.footerBtn')}</span>
              <ChevronRight size={14} className="rtl:rotate-180" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
