import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Section } from './ui/Section';

export default function About() {
  const { t } = useTranslation();

  return (
    <Section id="about" className="bg-white py-12 md:py-16 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
        
        {/* Left Side: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="aspect-square lg:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden relative shadow-2xl border border-border-light group">
            <img 
              src="/About.jpg" 
              alt="Luxury Law Office" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-8 -end-8 bg-primary-navy text-white p-8 rounded-2xl shadow-soft-lg hidden md:block z-10">
            <p className="text-4xl font-heading mb-1 text-luxury-gold">{t('home.about.yearEst')}</p>
            <p className="text-sm font-medium">{t('home.about.establishedText')}</p>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-base md:text-lg font-semibold tracking-widest text-luxury-gold uppercase mb-3">
            {t('home.about.badge')}
          </h2>
          <h3 className="text-3xl md:text-4xl font-heading text-primary-navy mb-5 leading-tight">
            {t('home.about.title1')} <br /> {t('home.about.title2')} <span className="italic">{t('home.about.titleGold')}</span>
          </h3>
          
          <div className="space-y-5 text-text-muted font-body mb-8 text-base leading-relaxed">
            <p>
              {t('home.about.p1')}
            </p>
            <p>
              {t('home.about.p2')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 border-t border-border-light pt-6">
            <div>
              <h4 className="text-base font-heading text-primary-navy mb-1 font-semibold">{t('home.about.missionTitle')}</h4>
              <p className="text-sm text-text-muted leading-relaxed">{t('home.about.missionDesc')}</p>
            </div>
            <div>
              <h4 className="text-base font-heading text-primary-navy mb-1 font-semibold">{t('home.about.visionTitle')}</h4>
              <p className="text-sm text-text-muted leading-relaxed">{t('home.about.visionDesc')}</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border-light flex items-center justify-between">
            <div>
              <p className="font-heading text-xl text-primary-navy font-semibold">{t('home.about.partnerName')}</p>
              <p className="text-sm text-luxury-gold">{t('home.about.partnerTitle')}</p>
            </div>
            <div className="w-36 mix-blend-multiply">
              <img src="/tsign.jpeg" alt="Tariq Al Mansoori Signature" className="w-full h-auto object-contain mix-blend-multiply" />
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
