import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { 
  Building2, 
  Briefcase, 
  Home, 
  Scale, 
  Users, 
  ShieldAlert, 
  Plane 
} from 'lucide-react';

const practices = [
  {
    title: 'Corporate Law',
    description: 'Comprehensive counsel for multinational corporations on governance, M&A, and compliance.',
    icon: Building2
  },
  {
    title: 'Commercial Law',
    description: 'Strategic structuring and negotiation of complex domestic and cross-border commercial transactions.',
    icon: Briefcase
  },
  {
    title: 'Real Estate',
    description: 'Expert guidance on high-value property acquisitions, development, and financing in the UAE.',
    icon: Home
  },
  {
    title: 'Arbitration',
    description: 'Formidable representation in international and domestic arbitration centers.',
    icon: Scale
  },
  {
    title: 'Family Law',
    description: 'Discreet and sensitive handling of private family matters, wealth protection, and succession.',
    icon: Users
  },
  {
    title: 'Criminal Defense',
    description: 'Vigorous defense in high-stakes white-collar and corporate criminal proceedings.',
    icon: ShieldAlert
  },
];

export default function PracticeAreas() {
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
        <h2 className="text-base md:text-lg font-semibold tracking-widest text-luxury-gold uppercase mb-3">Areas of Expertise</h2>
        <h3 className="text-3xl md:text-4xl font-heading text-primary-navy mb-4">
          World-Class <span className="italic">Legal Counsel</span>
        </h3>
        <p className="text-text-muted text-base">
          We offer highly specialized legal services across a spectrum of practice areas, tailored to the sophisticated needs of our clients.
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
            <motion.div key={index} variants={itemVariants}>
              <Link to={`/expertise/${practice.title.toLowerCase().replace(' ', '-')}`} className="block h-full outline-none focus:ring-2 focus:ring-luxury-gold rounded-2xl">
                <Card className="h-full flex flex-col items-start p-6 lg:p-8 hover:border-luxury-gold/50 hover:shadow-xl hover:shadow-luxury-gold/20 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-full bg-light-gray flex items-center justify-center mb-5 ring-1 ring-luxury-gold/50 shadow-lg shadow-luxury-gold/20 group-hover:bg-primary-navy group-hover:ring-luxury-gold transition-all duration-300">
                    <Icon className="w-5 h-5 text-primary-navy group-hover:text-luxury-gold transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-heading text-primary-navy group-hover:text-luxury-gold transition-colors duration-300 mb-3 font-semibold">{practice.title}</h4>
                  <p className="text-text-muted group-hover:text-luxury-gold/90 transition-colors duration-300 text-sm leading-relaxed mb-6 flex-grow">{practice.description}</p>
                  
                  <span className="text-sm font-medium text-primary-navy group-hover:text-luxury-gold transition-colors mt-auto inline-flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
