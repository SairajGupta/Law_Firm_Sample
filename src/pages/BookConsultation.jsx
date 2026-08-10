import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/Button';

export default function BookConsultation() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="relative min-h-screen bg-[url('/BookC.jpg')] bg-cover bg-center bg-no-repeat pt-32 pb-24 text-text-main overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary-navy/20 pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 relative z-10">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-sm md:text-base font-semibold tracking-widest text-luxury-gold uppercase mb-3 drop-shadow-sm">
            {t('pages.consultation.badge')}
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-5 drop-shadow-md">
            {t('pages.consultation.title1')} <span className="italic text-luxury-gold">{t('pages.consultation.titleGold')}</span>
          </h1>
          <p className="text-white/90 text-base md:text-lg font-light drop-shadow-sm max-w-2xl mx-auto leading-relaxed">
            {t('pages.consultation.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 h-full">
            
            {/* Left side info */}
            <div className="bg-primary-navy text-white p-10 md:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-heading mb-6 text-luxury-gold">
                  {t('pages.consultation.leftTitle')}
                </h3>
                <p className="text-white/80 font-body mb-10 text-sm leading-relaxed">
                  {t('pages.consultation.leftDesc')}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-luxury-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-sm">{t('pages.consultation.ourOfficeLabel')}</p>
                      <p className="text-white/70 text-sm mt-1 whitespace-pre-line">{t('pages.consultation.officeAddress')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-luxury-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-sm">{t('pages.consultation.directLineLabel')}</p>
                      <p className="text-white/70 text-sm mt-1">+971 4 000 0000 <span className="text-luxury-gold/80 text-xs ms-1">{t('pages.consultation.demoTag')}</span></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-luxury-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-sm">{t('pages.consultation.emailInquiryLabel')}</p>
                      <p className="text-white/70 text-sm mt-1">{t('pages.consultation.emailAddress')} <span className="text-luxury-gold/80 text-xs ms-1">{t('pages.consultation.demoTag')}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="p-10 md:col-span-3">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-10 px-4 space-y-6"
                >
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shadow-soft-md border border-emerald-100">
                    <svg className="w-10 h-10 text-emerald-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="space-y-2 max-w-md">
                    <h3 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy">
                      {t('pages.consultation.successTitle')}
                    </h3>
                    <p className="text-text-muted text-base leading-relaxed">
                      {t('pages.consultation.successDesc')}
                    </p>
                  </div>

                  <div className="pt-2 w-full max-w-md">
                    <div className="p-3.5 bg-amber-50 border border-amber-200/80 rounded-xl text-amber-900 text-xs md:text-sm flex items-center justify-center gap-2 font-body shadow-2xs">
                      <span>{t('pages.consultation.demoNote')}</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-sm font-semibold text-primary-navy hover:text-luxury-gold underline underline-offset-4 transition-colors font-body"
                  >
                    {t('pages.consultation.submitAnother')}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary-navy block text-start">{t('pages.consultation.firstNameLabel')}</label>
                      <input required type="text" className="w-full h-12 px-4 rounded-xl border border-border-light bg-light-gray/50 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors text-start" placeholder={t('pages.consultation.firstNamePlaceholder')} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary-navy block text-start">{t('pages.consultation.lastNameLabel')}</label>
                      <input required type="text" className="w-full h-12 px-4 rounded-xl border border-border-light bg-light-gray/50 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors text-start" placeholder={t('pages.consultation.lastNamePlaceholder')} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary-navy block text-start">{t('pages.consultation.emailLabel')}</label>
                      <input required type="email" className="w-full h-12 px-4 rounded-xl border border-border-light bg-light-gray/50 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors text-start" placeholder={t('pages.consultation.emailPlaceholder')} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary-navy block text-start">{t('pages.consultation.phoneLabel')}</label>
                      <input type="tel" className="w-full h-12 px-4 rounded-xl border border-border-light bg-light-gray/50 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors text-start" placeholder={t('pages.consultation.phonePlaceholder')} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary-navy block text-start">{t('pages.consultation.practiceAreaLabel')}</label>
                    <div className="relative">
                      <select defaultValue="" className="w-full h-12 px-4 rounded-xl border border-border-light bg-light-gray/50 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors appearance-none cursor-pointer text-start">
                        <option value="" disabled>{t('pages.consultation.selectAreaPlaceholder')}</option>
                        <option value="corporate">{t('pages.consultation.optCorporate')}</option>
                        <option value="commercial">{t('pages.consultation.optCommercial')}</option>
                        <option value="real-estate">{t('pages.consultation.optRealEstate')}</option>
                        <option value="arbitration">{t('pages.consultation.optArbitration')}</option>
                        <option value="family">{t('pages.consultation.optFamily')}</option>
                        <option value="criminal">{t('pages.consultation.optCriminal')}</option>
                        <option value="other">{t('pages.consultation.optOther')}</option>
                      </select>
                      <svg className="w-5 h-5 absolute end-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary-navy block text-start">{t('pages.consultation.descLabel')}</label>
                    <textarea required rows={4} className="w-full p-4 rounded-xl border border-border-light bg-light-gray/50 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors resize-none text-start" placeholder={t('pages.consultation.descPlaceholder')}></textarea>
                  </div>

                  <Button variant="gold" className="w-full md:w-auto" type="submit">
                    {t('pages.consultation.requestBtn')}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
