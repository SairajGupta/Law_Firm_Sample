import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldAlert, AlertTriangle, HelpCircle, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function LegalDisclaimer() {
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
            <span className="text-luxury-gold font-medium">Legal Disclaimer</span>
          </nav>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-luxury-gold/20 text-luxury-gold px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-luxury-gold/30 mb-4">
              <ShieldAlert size={14} className="text-luxury-gold" />
              Important Statutory Notice
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white leading-tight mb-4 drop-shadow-sm">
              Legal <span className="text-luxury-gold italic">Disclaimer</span>
            </h1>
            <p className="text-white/80 font-body text-base md:text-lg max-w-2xl">
              Essential compliance limitations, professional disclaimers regarding published scholarship, and guidelines on case outcome representations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Disclaimer Content */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-12 max-w-5xl mx-auto font-body text-text-main">
        <div className="bg-white p-8 md:p-14 rounded-2xl shadow-soft-xl border border-border-light space-y-12">

          {/* Highlight Box */}
          <div className="p-6 md:p-8 bg-amber-50/80 border-l-4 border-amber-600 rounded-xl text-amber-950 flex flex-col md:flex-row md:items-center gap-4 shadow-soft-sm">
            <AlertTriangle className="text-amber-700 w-8 h-8 flex-shrink-0" />
            <div className="text-sm md:text-base leading-relaxed">
              <strong className="font-semibold block mb-1 font-heading text-lg">No Legal Advice Intended:</strong>
              The material accessible across this portal is furnished exclusively for informational commentary and scholarly dialogue. Nothing published herein constitutes tailored legal counsel, procedural guidance, or fiscal arbitration instructions.
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy flex items-center gap-3">
              <CheckCircle2 className="text-luxury-gold w-6 h-6 flex-shrink-0" />
              1. Case Results & Performance Representations
            </h2>
            <p className="leading-relaxed text-base md:text-lg">
              Any case results, judicial award summaries, financial recovery figures, or transactional milestones highlighted on our Case Results page or within individual attorney biographies represent historical professional achievements under uniquely specific facts and evidential circumstances. <strong>Past success neither warrants, promises, nor guarantees a similar judicial outcome</strong> in any future controversy or commercial representation. Every dispute turns on unique evidentiary merits and jurisdiction-specific regulatory applications.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy">
              2. Accuracy of Statutory Interpretation & Publications
            </h2>
            <p className="leading-relaxed">
              While Al Mansoori & Partners exercises diligent effort to ensure all scholarly articles, tax commentaries, and regulatory analysis reflect contemporaneous legislative enactments at the time of authoring, UAE Federal law and municipal Free Zone ordinances (DIFC, ADGM, RERA) undergo continuous statutory evolution. Readers must not undertake significant business restructurings, property transfers, or litigation filings based solely upon website publications without first engaging experienced legal representation to conduct an updated diagnostic of current law.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy">
              3. Confidentiality of Unsolicited Communications
            </h2>
            <p className="leading-relaxed">
              Transmission of correspondence via general firm contact forms or unsolicited electronic mail to individual practice groups does not automatically establish formal confidentiality protection or attorney-client privilege. Do not submit highly sensitive forensic evidence, non-public commercial valuations, or unencrypted proprietary secrets until a formal Letter of Engagement has been signed and a secure data room has been allocated by our practice team.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy">
              4. External Domain References
            </h2>
            <p className="leading-relaxed">
              Certain regulatory articles may contain hyperlinks directing readers to judicial registries, Government official portals (such as the Ministry of Economy or Dubai Courts), or international arbitral tribunals (DIAC, ICC). Al Mansoori & Partners exercises no administrative authority over third-party architectures and assumes no legal liability for the operational continuity or content security of external web portals.
            </p>
          </div>

          <div className="pt-8 border-t border-border-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-light-gray/60 p-6 rounded-xl text-sm font-body">
            <div>
              <strong className="text-primary-navy block mb-1">Professional Practice Licensing:</strong>
              Registered with the Dubai Legal Affairs Department and authorized across DIFC and ADGM courts.
            </div>
            <Link 
              to="/book-consultation"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-navy text-white hover:bg-luxury-gold hover:text-white rounded-full font-semibold transition-colors flex-shrink-0 shadow-sm"
            >
              <span>Consult an Advocate</span>
              <ChevronRight size={14} />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
