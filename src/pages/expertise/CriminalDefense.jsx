import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export default function CriminalDefense() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-background min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary-navy/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat opacity-20 mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-10">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-4"
          >
            Criminal <span className="text-luxury-gold italic">Defense</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 font-light"
          >
            Vigorous defense in high-stakes white-collar and corporate criminal proceedings.
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
            <h2 className="text-3xl font-heading text-primary-navy mb-6">Uncompromising Defense in Critical Matters</h2>
            <p>
              Facing criminal allegations, particularly in the corporate sphere, can be the most critical challenge a business or executive will ever confront. Our Criminal Defense practice specializes in representing high-profile individuals and corporations facing serious regulatory investigations and criminal charges.
            </p>
            <p>
              We provide aggressive, strategic defense representation while meticulously managing the parallel risks of reputational damage and civil liability. Our advocates have unparalleled experience before the UAE criminal courts and a deep understanding of local investigative procedures.
            </p>
            
            <h3 className="text-2xl font-heading text-primary-navy mt-10 mb-4">Our Core Services</h3>
            <ul className="space-y-4 list-none">
              {[
                "White-Collar Crime & Corporate Fraud",
                "Embezzlement & Breach of Trust",
                "Anti-Money Laundering (AML) Compliance & Defense",
                "Extradition & Interpol Red Notices",
                "Cybercrime & Data Breaches"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-luxury-gold mr-3 mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="mt-8">
              We intervene at the earliest possible stage of an investigation, often resolving matters discreetly before formal charges are ever filed. When litigation is unavoidable, we mount a vigorous, uncompromising defense at trial.
            </p>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-4"
          >
            <div className="bg-white p-8 border border-border-light shadow-soft-lg rounded-xl sticky top-28">
              <h3 className="text-xl font-heading text-primary-navy mb-4">Immediate Legal Assistance</h3>
              <p className="text-text-muted mb-6 text-sm">
                If you are facing investigation or charges, contact our defense team immediately for urgent counsel.
              </p>
              <Button variant="gold" className="w-full" onClick={() => navigate('/book-consultation')}>
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
