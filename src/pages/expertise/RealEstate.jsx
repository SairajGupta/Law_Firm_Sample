import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export default function RealEstate() {
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
        <div className="absolute inset-0 bg-[url('/RealEstate.jpg')] bg-cover bg-center bg-no-repeat z-0"></div>
        <div className="absolute inset-0 bg-primary-navy/35 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/50 via-transparent to-primary-navy/60 z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-10">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-4"
          >
            Real <span className="text-luxury-gold italic">Estate</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 font-light"
          >
            Expert guidance on high-value property acquisitions, development, and financing in the UAE.
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
            <h2 className="text-3xl font-heading text-primary-navy mb-6">Navigating the UAE Property Market</h2>
            <p>
              The UAE real estate market is renowned for its scale, ambition, and complexity. Al Mansoori & Partners provides comprehensive legal support across the entire lifecycle of real estate assets, from initial acquisition and financing through development, leasing, and final disposition.
            </p>
            <p>
              We represent major developers, institutional investors, high-net-worth individuals, and corporate occupiers in their most significant real estate transactions. Our deep understanding of local laws, regulatory frameworks, and market dynamics ensures that our clients' investments are secure and their projects proceed without legal hindrance.
            </p>
            
            <h3 className="text-2xl font-heading text-primary-navy mt-10 mb-4">Our Core Services</h3>
            <ul className="space-y-4 list-none">
              {[
                "Commercial & Residential Acquisitions",
                "Real Estate Development & Construction",
                "Property Financing & Mortgages",
                "Commercial Leasing & Tenancy Disputes",
                "Strata & Jointly Owned Property Regulations"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-luxury-gold mr-3 mt-1">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="mt-8">
              Our proactive approach identifies potential issues before they arise, allowing our clients to proceed with confidence in one of the world's most dynamic property markets.
            </p>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-4"
          >
            <div className="bg-white p-8 border border-border-light shadow-soft-lg rounded-xl sticky top-28">
              <h3 className="text-xl font-heading text-primary-navy mb-4">Need Real Estate Legal Assistance?</h3>
              <p className="text-text-muted mb-6 text-sm">
                Schedule a confidential consultation with our real estate law specialists to discuss your property matters.
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
