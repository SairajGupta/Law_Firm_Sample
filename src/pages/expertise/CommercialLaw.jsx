import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export default function CommercialLaw() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('/Commercial.jpg')] bg-cover bg-center bg-no-repeat z-0"></div>
        <div className="absolute inset-0 bg-primary-navy/35 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/50 via-transparent to-primary-navy/60 z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-10">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-4"
          >
            Commercial <span className="text-luxury-gold italic">Law</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 font-light"
          >
            Strategic structuring and negotiation of complex domestic and cross-border commercial transactions.
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
            <h2 className="text-3xl font-heading text-primary-navy mb-6">Facilitating Global Trade and Commerce</h2>
            <p>
              Dubai's position as a global commercial hub requires legal counsel that is as dynamic and forward-thinking as the market itself. Our Commercial Law practice is dedicated to structuring, negotiating, and executing the transactions that drive our clients' businesses forward.
            </p>
            <p>
              We advise on a broad spectrum of commercial arrangements, from routine day-to-day trading agreements to complex, multi-jurisdictional strategic partnerships. Our deep understanding of local market practices, coupled with international legal standards, ensures that our clients' commercial interests are robustly protected.
            </p>
            
            <h3 className="text-2xl font-heading text-primary-navy mt-10 mb-4">Our Core Services</h3>
            <ul className="space-y-4 list-none">
              {[
                "Commercial Contracts & Agreements",
                "Agency, Distributorship & Franchising",
                "International Trade & Customs",
                "Intellectual Property Licensing",
                "Technology & Software Agreements"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-luxury-gold mr-3 mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="mt-8">
              Whether you are entering the UAE market for the first time or expanding your existing operations, our team provides the incisive legal strategy required to mitigate risk and maximize commercial advantage.
            </p>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-4"
          >
            <div className="bg-white p-8 border border-border-light shadow-soft-lg rounded-xl sticky top-28">
              <h3 className="text-xl font-heading text-primary-navy mb-4">Need Commercial Legal Assistance?</h3>
              <p className="text-text-muted mb-6 text-sm">
                Schedule a confidential consultation with our commercial law specialists to discuss your business requirements.
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
