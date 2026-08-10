import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Section } from './ui/Section';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('home.faq.q1'),
      answer: t('home.faq.a1')
    },
    {
      question: t('home.faq.q2'),
      answer: t('home.faq.a2')
    },
    {
      question: t('home.faq.q3'),
      answer: t('home.faq.a3')
    },
    {
      question: t('home.faq.q4'),
      answer: t('home.faq.a4')
    }
  ];

  return (
    <Section id="faq" className="bg-white">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-base md:text-lg font-semibold tracking-widest text-luxury-gold uppercase mb-4">
            {t('home.faq.sectionSubtitle')}
          </h2>
          <h3 className="text-4xl md:text-5xl font-heading text-primary-navy mb-6">
            {t('home.faq.title1')} <span className="italic">{t('home.faq.titleGold')}</span>
          </h3>
          <p className="text-text-muted mb-8 leading-relaxed">
            {t('home.faq.desc')}
          </p>
        </div>

        {/* Right Side: Accordion */}
        <div className="w-full lg:w-2/3">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={index} 
                  className="border border-border-light rounded-2xl overflow-hidden bg-background"
                >
                  <button
                    className="w-full px-8 py-6 flex items-center justify-between gap-4 focus:outline-none"
                    onClick={() => setActiveIndex(isActive ? null : index)}
                  >
                    <span className={`font-heading text-lg font-semibold text-start transition-colors ${isActive ? 'text-luxury-gold' : 'text-primary-navy'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${isActive ? 'border-luxury-gold bg-luxury-gold text-white' : 'border-border-light text-primary-navy'}`}>
                      {isActive ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-8 pb-6 text-text-muted font-body text-sm leading-relaxed text-start">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </Section>
  );
}
