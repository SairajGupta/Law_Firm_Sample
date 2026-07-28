import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export default function FamilyLaw() {
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
            Family & <span className="text-luxury-gold italic">Private Wealth</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 font-light"
          >
            Discreet and sensitive handling of private family matters, wealth protection, and succession.
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
            <h2 className="text-3xl font-heading text-primary-navy mb-6">Discretion, Empathy, and Protection</h2>
            <p>
              Family legal matters demand more than just legal expertise; they require absolute discretion, empathy, and a nuanced understanding of family dynamics. Our Family Law practice is dedicated to protecting the personal and financial interests of our high-net-worth clients during life's most challenging transitions.
            </p>
            <p>
              We handle complex divorces involving substantial assets, multi-jurisdictional elements, and intricate corporate structures. Furthermore, our Private Wealth division assists prominent families in structuring their assets to ensure seamless succession and the preservation of generational wealth.
            </p>
            
            <h3 className="text-2xl font-heading text-primary-navy mt-10 mb-4">Our Core Services</h3>
            <ul className="space-y-4 list-none">
              {[
                "High-Net-Worth Divorce & Separation",
                "Child Custody & Guardianship",
                "Pre-Nuptial & Post-Nuptial Agreements",
                "Wealth Structuring & Succession Planning",
                "Wills, Trusts & Estate Administration"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-luxury-gold mr-3 mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="mt-8">
              Our approach is always discreet and resolution-focused, aiming to protect our clients' privacy and minimize emotional distress while achieving the most favorable legal and financial outcomes.
            </p>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-4"
          >
            <div className="bg-white p-8 border border-border-light shadow-soft-lg rounded-xl sticky top-28">
              <h3 className="text-xl font-heading text-primary-navy mb-4">Confidential Assistance</h3>
              <p className="text-text-muted mb-6 text-sm">
                Schedule a private, completely confidential consultation with our senior family law partners.
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
