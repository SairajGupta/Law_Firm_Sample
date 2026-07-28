import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export default function CorporateLaw() {
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
            Corporate <span className="text-luxury-gold italic">Law</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 font-light"
          >
            Comprehensive counsel for multinational corporations on governance, M&A, and compliance.
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
            <h2 className="text-3xl font-heading text-primary-navy mb-6">Strategic Corporate Guidance in Dubai</h2>
            <p>
              At Al Mansoori & Partners, our Corporate Law practice is the cornerstone of our firm. We understand that in today's rapidly evolving global market, businesses require more than just legal advice; they need strategic partners who understand their commercial objectives.
            </p>
            <p>
              Our distinguished team of corporate attorneys brings decades of collective experience in navigating the complex regulatory landscape of the UAE and the broader Middle East. We provide bespoke solutions tailored to the unique challenges faced by multinational corporations, family conglomerates, and emerging enterprises.
            </p>
            
            <h3 className="text-2xl font-heading text-primary-navy mt-10 mb-4">Our Core Services</h3>
            <ul className="space-y-4 list-none">
              {[
                "Mergers & Acquisitions (M&A)",
                "Corporate Restructuring & Reorganization",
                "Joint Ventures & Strategic Alliances",
                "Corporate Governance & Compliance",
                "Private Equity & Venture Capital Transactions"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-luxury-gold mr-3 mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="mt-8">
              We approach every transaction with rigorous attention to detail and a commitment to protecting our clients' interests while facilitating their strategic growth initiatives.
            </p>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-4"
          >
            <div className="bg-white p-8 border border-border-light shadow-soft-lg rounded-xl sticky top-28">
              <h3 className="text-xl font-heading text-primary-navy mb-4">Need Corporate Legal Assistance?</h3>
              <p className="text-text-muted mb-6 text-sm">
                Schedule a confidential consultation with our corporate law specialists to discuss your business requirements.
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
