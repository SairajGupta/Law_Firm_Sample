import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { FaXTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

export default function Contact() {
  return (
    <Section id="contact" className="bg-background py-24">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-heading text-primary-navy mb-4">Get in Touch</h2>
        <p className="text-primary-navy/70 text-lg">
          To schedule a confidential consultation, please contact our chambers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Contact Info & Map */}
        <div className="space-y-8 flex flex-col h-full">
          
          {/* Contact Details Card */}
          <div className="bg-primary-navy text-white rounded-3xl p-8 shadow-soft-lg relative overflow-hidden flex-1">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-luxury-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-2xl font-heading text-white mb-8 relative z-10">Contact Details</h3>
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                </div>
                <p className="text-light-gray/80 text-sm leading-relaxed">Boulevard Plaza, Tower 1<br />Level 24, Downtown Dubai<br />PO Box 123456, UAE</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-luxury-gold" />
                </div>
                <p className="text-light-gray/80 text-sm">+971 4 123 4567</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-luxury-gold" />
                </div>
                <p className="text-light-gray/80 text-sm">inquiries@almansoori.law</p>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/10 relative z-10 flex gap-4">
              <a href="#" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-luxury-gold flex items-center justify-center text-primary-navy hover:bg-primary-navy hover:text-luxury-gold border border-transparent hover:border-luxury-gold transition-all shadow-soft-lg group hover:shadow-[0_0_15px_rgba(204,163,82,0.4)]">
                <FaXTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-luxury-gold flex items-center justify-center text-primary-navy hover:bg-primary-navy hover:text-luxury-gold border border-transparent hover:border-luxury-gold transition-all shadow-soft-lg group hover:shadow-[0_0_15px_rgba(204,163,82,0.4)]">
                <FaLinkedinIn className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://wa.me/971501234567" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-luxury-gold flex items-center justify-center text-primary-navy hover:bg-primary-navy hover:text-luxury-gold border border-transparent hover:border-luxury-gold transition-all shadow-soft-lg group hover:shadow-[0_0_15px_rgba(204,163,82,0.4)]">
                <FaWhatsapp className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Map Card */}
          <div className="rounded-3xl overflow-hidden shadow-soft-lg border border-border-light h-[250px] relative flex-shrink-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1786539300587!2d55.27218677605021!3d25.197196631696232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42873130d7b9%3A0x6b240ff11e737c!2sBoulevard%20Plaza%20Tower%201!5e0!3m2!1sen!2sae!4v1709640960010!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) opacity(0.9)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LawHabibi Office Location"
              className="absolute inset-0"
            ></iframe>
          </div>
          
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-12 shadow-soft-lg border border-border-light h-full flex flex-col justify-center">
          <h3 className="text-3xl font-heading text-primary-navy mb-8">Send a Message</h3>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-navy">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-5 py-4 bg-background border border-border-light rounded-xl focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-navy">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-5 py-4 bg-background border border-border-light rounded-xl focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary-navy">Subject</label>
              <input 
                type="text" 
                className="w-full px-5 py-4 bg-background border border-border-light rounded-xl focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors"
                placeholder="Inquiry regarding..."
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary-navy">Message</label>
              <textarea 
                rows="5"
                className="w-full px-5 py-4 bg-background border border-border-light rounded-xl focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-colors resize-none"
                placeholder="How can we assist you?"
              ></textarea>
            </div>
            
            <Button variant="primary" className="w-full md:w-auto mt-6 px-8 py-4 text-base">
              Submit Inquiry
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}
