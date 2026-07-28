import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export default function BookConsultation() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <motion.div 
          initial="hidden" animate="visible" variants={fadeUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-base md:text-lg font-semibold tracking-widest text-luxury-gold uppercase mb-3">Confidential Advisory</h2>
          <h1 className="text-4xl md:text-5xl font-heading text-primary-navy mb-6">
            Book a <span className="italic text-luxury-gold">Consultation</span>
          </h1>
          <p className="text-text-muted text-lg">
            Schedule a private, confidential consultation with our senior partners to discuss your legal requirements.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft-lg border border-border-light overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5 h-full">
            
            {/* Left side info */}
            <div className="bg-primary-navy text-white p-10 md:col-span-2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-heading mb-6 text-luxury-gold">Contact Information</h3>
                <p className="text-white/80 font-body mb-10 text-sm leading-relaxed">
                  Our team is ready to provide you with the most strategic and robust legal counsel in Dubai. Fill out the form, and a dedicated associate will be in touch shortly.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-luxury-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-sm">Our Office</p>
                      <p className="text-white/70 text-sm mt-1">Level 42, ICD Brookfield Place<br />DIFC, Dubai, UAE</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-luxury-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-sm">Direct Line</p>
                      <p className="text-white/70 text-sm mt-1">+971 4 332 5555</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-luxury-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-sm">Email Inquiry</p>
                      <p className="text-white/70 text-sm mt-1">consult@almansoori.ae</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="p-10 md:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-luxury-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading text-primary-navy mb-4">Request Received</h3>
                  <p className="text-text-muted">
                    Thank you for reaching out. A senior associate will contact you within 24 hours to schedule your consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary-navy">First Name</label>
                      <input required type="text" className="w-full h-12 px-4 rounded-xl border border-border-light bg-light-gray/50 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary-navy">Last Name</label>
                      <input required type="text" className="w-full h-12 px-4 rounded-xl border border-border-light bg-light-gray/50 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary-navy">Email Address</label>
                      <input required type="email" className="w-full h-12 px-4 rounded-xl border border-border-light bg-light-gray/50 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary-navy">Phone Number</label>
                      <input type="tel" className="w-full h-12 px-4 rounded-xl border border-border-light bg-light-gray/50 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors" placeholder="+971 50 000 0000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary-navy">Practice Area</label>
                    <div className="relative">
                      <select className="w-full h-12 px-4 rounded-xl border border-border-light bg-light-gray/50 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors appearance-none cursor-pointer">
                        <option value="" disabled selected>Select an area of expertise</option>
                        <option value="corporate">Corporate Law</option>
                        <option value="commercial">Commercial Law</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="arbitration">Arbitration & Disputes</option>
                        <option value="family">Family & Private Wealth</option>
                        <option value="criminal">Criminal Defense</option>
                        <option value="other">Other</option>
                      </select>
                      <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-primary-navy">Brief Description of Matter</label>
                    <textarea required rows={4} className="w-full p-4 rounded-xl border border-border-light bg-light-gray/50 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors resize-none" placeholder="Please provide a brief, non-confidential summary of your legal needs..."></textarea>
                  </div>

                  <Button variant="gold" className="w-full md:w-auto" type="submit">
                    Request Consultation
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
