import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is your consultation process?",
    answer: "Our initial consultation is designed to understand your unique situation comprehensively. We listen attentively, analyze the preliminary facts, and outline potential strategic directions. Absolute confidentiality is maintained from the very first contact."
  },
  {
    question: "Do you represent international clients?",
    answer: "Yes. A significant portion of our clientele consists of multinational corporations, foreign investors, and international high-net-worth individuals requiring representation or structuring within the UAE."
  },
  {
    question: "How are your fees structured?",
    answer: "We offer tailored fee structures depending on the complexity and nature of the engagement. This may include hourly billing, fixed fees for specific transactions, or retainer agreements. Transparency is a core principle in all our billing practices."
  },
  {
    question: "What languages does your firm support?",
    answer: "Our team consists of multilingual professionals proficient in English, Arabic, French, and Russian, ensuring seamless communication with our diverse international clientele."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Section id="faq" className="bg-white">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Left Side */}
        <div className="w-full lg:w-1/3">
          <h2 className="text-base md:text-lg font-semibold tracking-widest text-luxury-gold uppercase mb-4">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-heading text-primary-navy mb-6">
            Common <span className="italic">Inquiries</span>
          </h3>
          <p className="text-text-muted mb-8">
            Clear, concise answers to frequently asked questions regarding our practice and engagement processes.
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
                    className="w-full px-8 py-6 flex items-center justify-between focus:outline-none"
                    onClick={() => setActiveIndex(isActive ? null : index)}
                  >
                    <span className={`font-heading text-lg font-semibold text-left transition-colors ${isActive ? 'text-luxury-gold' : 'text-primary-navy'}`}>
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
                        <div className="px-8 pb-6 text-text-muted font-body text-sm leading-relaxed">
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
