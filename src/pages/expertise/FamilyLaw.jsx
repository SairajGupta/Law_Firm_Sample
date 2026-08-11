import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components/ui/Button';

export default function FamilyLaw() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const services = [
    t('expertise.family.services.0'),
    t('expertise.family.services.1'),
    t('expertise.family.services.2'),
    t('expertise.family.services.3'),
    t('expertise.family.services.4')
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('/Family.jpg')] bg-cover bg-center bg-no-repeat z-0"></div>
        <div className="absolute inset-0 bg-primary-navy/35 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/50 via-transparent to-primary-navy/60 z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-10">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-4"
          >
            {t('expertise.family.heroTitle')} <span className="text-luxury-gold italic">{t('expertise.family.heroTitleGold')}</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 font-light leading-relaxed"
          >
            {t('expertise.family.heroSubtitle')}
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-12 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-8 space-y-8 text-text-main font-body text-lg leading-relaxed"
          >
            <h2 className="text-3xl font-heading text-primary-navy mb-6">
              {t('expertise.family.mainHeading')}
            </h2>
            <p>
              {t('expertise.family.p1')}
            </p>
            <p>
              {t('expertise.family.p2')}
            </p>
            
            <h3 className="text-2xl font-heading text-primary-navy mt-10 mb-4">
              {t('expertise.family.coreServicesHeading')}
            </h3>
            <ul className="space-y-4 list-none">
              {services.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-luxury-gold me-3 mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="mt-8">
              {t('expertise.family.p3')}
            </p>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-4"
          >
            <div className="bg-white p-8 border border-border-light shadow-soft-lg rounded-xl sticky top-28">
              <h3 className="text-xl font-heading text-primary-navy mb-4">
                {t('expertise.family.sidebarTitle')}
              </h3>
              <p className="text-text-muted mb-6 text-sm leading-relaxed">
                {t('expertise.family.sidebarDesc')}
              </p>
              <Button variant="gold" className="w-full" onClick={() => navigate('/book-consultation')}>
                {t('expertise.family.bookConsultation')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
