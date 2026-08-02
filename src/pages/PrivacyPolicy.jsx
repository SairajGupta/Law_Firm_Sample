import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, ChevronRight } from 'lucide-react';

export default function PrivacyPolicy() {
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
            <span className="text-luxury-gold font-medium">Privacy Policy</span>
          </nav>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-luxury-gold/20 text-luxury-gold px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-luxury-gold/30 mb-4">
              <Shield size={14} className="text-luxury-gold" />
              Data Protection & Confidentiality
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white leading-tight mb-4 drop-shadow-sm">
              Privacy & <span className="text-luxury-gold italic">Data Policy</span>
            </h1>
            <p className="text-white/80 font-body text-base md:text-lg max-w-2xl">
              Al Mansoori & Partners applies uncompromising security standards to safeguard client confidentiality and adhere strictly to applicable data protection regimes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Legal Policy Content */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-12 max-w-5xl mx-auto font-body text-text-main">
        <div className="bg-white p-8 md:p-14 rounded-2xl shadow-soft-xl border border-border-light space-y-12">
          
          {/* Effective Date Note */}
          <div className="pb-6 border-b border-border-light flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-text-muted">
            <span><strong>Effective Date:</strong> January 1, 2026</span>
            <span><strong>Jurisdiction:</strong> Dubai, United Arab Emirates (DIFC / ADGM / Mainland)</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy flex items-center gap-3">
              <Lock className="text-luxury-gold w-6 h-6 flex-shrink-0" />
              1. Our Commitment to Client Confidentiality
            </h2>
            <p className="leading-relaxed text-base md:text-lg">
              At Al Mansoori & Partners, strict preservation of confidentiality is the foundational cornerstone of our legal representation. We observe all mandatory obligations under the UAE Legal Profession Charter, Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data (PDPL), and the DIFC/ADGM Data Protection Regulations. Any operational, personal, or corporate intelligence intrusted to our firm is treated as legally privileged and tightly classified.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy flex items-center gap-3">
              <Eye className="text-luxury-gold w-6 h-6 flex-shrink-0" />
              2. Information We Collect
            </h2>
            <p className="leading-relaxed">
              In the course of delivering strategic representation and managing website inquiries, we may harvest and process the following categories of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-text-main/90 leading-relaxed">
              <li><strong>Corporate & Personal Identifiers:</strong> Names, passport details, enterprise registry documentation, professional titles, and primary communication coordinates provided during onboarding or initial advisory inquiries.</li>
              <li><strong>Due Diligence & Compliance Documentation:</strong> Statutory Know-Your-Customer (KYC) records, Anti-Money Laundering (AML) identification files, and corporate structural disclosures mandated by UAE regulatory agencies.</li>
              <li><strong>Digital Telemetry:</strong> Anonymized analytical metadata collected when accessing our online scholarly portals, including browser architecture, regional IP provenance, and interaction timestamps.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy">
              3. Processing and Utilization of Data
            </h2>
            <p className="leading-relaxed">
              Personal and enterprise data collected by Al Mansoori & Partners is utilized exclusively for professional legal representation, statutory conflict-of-interest assessments, transaction underwriting, and judicial advocacy. Under no circumstances does our practice commercialize, lease, or syndicate client data archives to third-party direct marketers or non-affiliated commercial networks.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy">
              4. Data Preservation & Security Architecture
            </h2>
            <p className="leading-relaxed">
              Our IT servers and physical document repositories operate under institutional-grade encryption and strict dual-authentication administrative access. Client files are retained for the legally prescribed statutory duration (typically a minimum of ten years following matter completion), after which physical files are incinerated and digital records are cryptographically wiped under formal protocol.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy">
              5. Your Statutory Rights & Access Requests
            </h2>
            <p className="leading-relaxed">
              Under applicable UAE and offshore zone regulations, entitled individuals maintain the legal right to request inspection, rectification, or restrictive processing of their personal files held by our firm, subject always to prevailing attorney-client professional legal privilege statutes.
            </p>
          </div>

          <div className="pt-8 border-t border-border-light bg-light-gray p-6 md:p-8 rounded-xl">
            <h3 className="text-xl font-heading font-semibold text-primary-navy mb-2">
              Data Protection Officer & Compliance Contact
            </h3>
            <p className="text-sm md:text-base text-text-main mb-4">
              For administrative inquiries concerning this policy or to submit a verified data processing query, direct communication to our firm's compliance committee:
            </p>
            <div className="text-sm font-semibold text-primary-navy space-y-1">
              <p>Al Mansoori & Partners — Office of the Data Protection Officer</p>
              <p className="text-luxury-gold">Email: compliance@almansoorilaw.ae</p>
              <p>Address: DIFC Gate Tower 4, Level 38, Dubai, United Arab Emirates</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
