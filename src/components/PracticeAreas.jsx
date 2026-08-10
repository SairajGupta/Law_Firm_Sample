import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { 
  Building2, 
  Briefcase, 
  Home, 
  Scale, 
  Users, 
  ShieldAlert
} from 'lucide-react';

export default function PracticeAreas() {
  const { t } = useTranslation();

  const practices = [
    {
      slug: 'corporate-law',
      title: t('home.practiceAreas.corporateTitle'),
      description: t('home.practiceAreas.corporateDesc'),
      icon: Building2
    },
    {
      slug: 'commercial-law',
      title: t('home.practiceAreas.commercialTitle'),
      description: t('home.practiceAreas.commercialDesc'),
      icon: Briefcase
    },
    {
      slug: 'real-estate',
      title: t('home.practiceAreas.realEstateTitle'),
      description: t('home.practiceAreas.realEstateDesc'),
      icon: Home
    },
    {
      slug: 'arbitration',
      title: t('home.practiceAreas.arbitrationTitle'),
      description: t('home.practiceAreas.arbitrationDesc'),
      icon: Scale
    },
    {
      slug: 'family-law',
      title: t('home.practiceAreas.familyTitle'),
      description: t('home.practiceAreas.familyDesc'),
      icon: Users
    },
    {
      slug: 'criminal-defense',
      title: t('home.practiceAreas.criminalTitle'),
      description: t('home.practiceAreas.criminalDesc'),
      icon: ShieldAlert
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Section id="practice-areas" className="bg-background py-12 md:py-16 lg:py-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-base md:text-lg font-semibold tracking-widest text-luxury-gold uppercase mb-3">
          {t('home.practiceAreas.sectionSubtitle')}
        </h2>
        <h3 className="text-3xl md:text-4xl font-heading text-primary-navy mb-4">
          {t('home.practiceAreas.title1')} <span className="italic">{t('home.practiceAreas.titleGold')}</span>
        </h3>
        <p className="text-text-muted text-base leading-relaxed">
          {t('home.practiceAreas.desc')}
        </p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {practices.map((practice, index) => {
          const Icon = practice.icon;
          return (
            <motion.div key={practice.slug || index} variants={itemVariants}>
              <Link to={`/expertise/${practice.slug}`} className="block h-full outline-none focus:ring-2 focus:ring-luxury-gold rounded-2xl">
                <Card className="h-full flex flex-col items-start p-6 lg:p-8 hover:border-luxury-gold/50 hover:shadow-xl hover:shadow-luxury-gold/20 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center mb-5 ring-1 ring-luxury-gold/50 shadow-lg shadow-luxury-gold/20 group-hover:bg-primary-navy group-hover:ring-luxury-gold transition-all duration-300">
                    <Icon className="w-5 h-5 text-primary-navy group-hover:text-luxury-gold transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-heading text-primary-navy group-hover:text-luxury-gold transition-colors duration-300 mb-3 font-semibold">{practice.title}</h4>
                  <p className="text-text-muted group-hover:text-luxury-gold/90 transition-colors duration-300 text-sm leading-relaxed mb-6 flex-grow">{practice.description}</p>
                  
                  <span className="text-sm font-medium text-primary-navy group-hover:text-luxury-gold transition-colors mt-auto inline-flex items-center">
                    {t('home.practiceAreas.learnMore')}
                    <svg className="w-4 h-4 ms-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
