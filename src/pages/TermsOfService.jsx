import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FileCheck, Scale, AlertCircle, ChevronRight } from 'lucide-react';

export default function TermsOfService() {
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
            <Link to="/" className="hover:text-luxury-gold transition-colors">{t('pages.terms.homeLink')}</Link>
            <ChevronRight size={14} className="text-luxury-gold flex-shrink-0 rtl:rotate-180" />
            <span className="text-luxury-gold font-medium">{t('pages.terms.badge')}</span>
          </nav>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-luxury-gold/20 text-luxury-gold px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-luxury-gold/30 mb-4">
              <FileCheck size={14} className="text-luxury-gold" />
              {t('pages.terms.badge')}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white leading-tight mb-4 drop-shadow-sm">
              {t('pages.terms.title1')} <span className="text-luxury-gold italic">{t('pages.terms.titleGold')}</span>
            </h1>
            <p className="text-white/80 font-body text-base md:text-lg max-w-2xl leading-relaxed">
              {t('pages.terms.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-12 max-w-5xl mx-auto font-body text-text-main">
        <div className="bg-white p-8 md:p-14 rounded-2xl shadow-soft-xl border border-border-light space-y-12">
          
          <div className="pb-6 border-b border-border-light flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-text-muted">
            <span>{t('pages.terms.version')}</span>
            <span>{t('pages.terms.applicability')}</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy flex items-center gap-3">
              <Scale className="text-luxury-gold w-6 h-6 flex-shrink-0" />
              {t('pages.terms.s1Title')}
            </h2>
            <p className="leading-relaxed text-base md:text-lg">
              {t('pages.terms.s1Desc')}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy flex items-center gap-3">
              <AlertCircle className="text-luxury-gold w-6 h-6 flex-shrink-0" />
              {t('pages.terms.s2Title')}
            </h2>
            <p className="leading-relaxed">
              {t('pages.terms.s2Desc')}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy">
              {t('pages.terms.s3Title')}
            </h2>
            <p className="leading-relaxed">
              {t('pages.terms.s3Desc')}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy">
              {t('pages.terms.s4Title')}
            </h2>
            <p className="leading-relaxed">
              {t('pages.terms.s4Desc')}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy">
              {t('pages.terms.s5Title')}
            </h2>
            <p className="leading-relaxed">
              {t('pages.terms.s5Desc')}
            </p>
          </div>

          <div className="pt-8 border-t border-border-light flex items-center justify-between text-sm text-text-muted font-body">
            <span>{t('pages.terms.footerCounsel')}</span>
            <Link to="/book-consultation" className="text-primary-navy font-semibold hover:text-luxury-gold transition-colors inline-flex items-center gap-1">
              <span>{t('pages.terms.footerLink')}</span>
              <ChevronRight size={14} className="rtl:rotate-180" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
