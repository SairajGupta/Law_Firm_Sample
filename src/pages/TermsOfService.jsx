import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileCheck, Scale, AlertCircle, ChevronRight } from 'lucide-react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Header Section */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden pt-28 pb-16 bg-primary-navy">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat opacity-15 mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 z-0"></div>

        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-white/70 font-body mb-6">
            <Link to="/" className="hover:text-luxury-gold transition-colors">Home</Link>
            <ChevronRight size={14} className="text-luxury-gold flex-shrink-0" />
            <span className="text-luxury-gold font-medium">Terms of Service</span>
          </nav>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-luxury-gold/20 text-luxury-gold px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-luxury-gold/30 mb-4">
              <FileCheck size={14} className="text-luxury-gold" />
              Digital Engagement & Terms
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white leading-tight mb-4 drop-shadow-sm">
              Terms of <span className="text-luxury-gold italic">Service</span>
            </h1>
            <p className="text-white/80 font-body text-base md:text-lg max-w-2xl">
              Legal rules and jurisdictional frameworks governing access to Al Mansoori & Partners digital portals and initial engagement procedures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-12 max-w-5xl mx-auto font-body text-text-main">
        <div className="bg-white p-8 md:p-14 rounded-2xl shadow-soft-xl border border-border-light space-y-12">
          
          <div className="pb-6 border-b border-border-light flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-text-muted">
            <span><strong>Version:</strong> 4.2 (Revised January 2026)</span>
            <span><strong>Applicability:</strong> All digital portal visitors and consultation applicants</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy flex items-center gap-3">
              <Scale className="text-luxury-gold w-6 h-6 flex-shrink-0" />
              1. Acceptance of Terms & Conditions
            </h2>
            <p className="leading-relaxed text-base md:text-lg">
              By navigating, bookmarking, or communicating through the digital interfaces operated by Al Mansoori & Partners, you acknowledge complete adherence to these Terms of Service. If you do not accept these foundational operational provisions in full, you must immediately cease navigation of our scholarly articles and firm directories.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy flex items-center gap-3">
              <AlertCircle className="text-luxury-gold w-6 h-6 flex-shrink-0" />
              2. Absence of Formal Legal Engagement
            </h2>
            <p className="leading-relaxed">
              Accessing our digital domain, reading case summaries, or submitting an initial advisory inquiry via our Book Consultation interface does **not** create or impute an attorney-client relationship between you and Al Mansoori & Partners. Formal legal representation commences exclusively upon the bilateral execution of a written letter of engagement signed by an authorized senior partner, accompanied by complete statutory conflict and AML clearance.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy">
              3. Intellectual Property & Brand Ownership
            </h2>
            <p className="leading-relaxed">
              All contents published across this platform—including legal scholarship commentaries, partner biographies, proprietary corporate governance frameworks, photographic archives, and our corporate trademark insignias—are the sole intellectual property of Al Mansoori & Partners, protected by UAE federal copyright legislation and WIPO treaties. Unauthorized commercial reproduction, systemic data extraction, or misappropriation of our scholarly briefs is actionable at law.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy">
              4. Prohibited Uses & Digital Security
            </h2>
            <p className="leading-relaxed">
              Visitors agree to interact with our online services solely for legitimate commercial inquiry, legal scholarship verification, and professional engagement. It is strictly prohibited to introduce intrusive scripts, conduct automated vulnerability scans against our contact gateways, or utilize firm electronic communication conduits for unsolicited promotional solicitations.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy">
              5. Governing Law and Exclusive Jurisdiction
            </h2>
            <p className="leading-relaxed">
              These Terms of Service are construed in absolute compliance with the laws of the Emirate of Dubai and applicable federal laws of the United Arab Emirates. Any formal dispute arising out of or directly relating to the operation, accuracy, or technical performance of this digital portal shall be subject to the exclusive jurisdiction of the Dubai International Financial Centre (DIFC) Courts.
            </p>
          </div>

          <div className="pt-8 border-t border-border-light flex items-center justify-between text-sm text-text-muted font-body">
            <span>Al Mansoori & Partners General Counsel</span>
            <Link to="/book-consultation" className="text-primary-navy font-semibold hover:text-luxury-gold transition-colors">
              Have legal inquiries? Book Consultation →
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
