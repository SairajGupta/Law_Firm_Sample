import { motion } from 'framer-motion';
import { Section } from './ui/Section';

export default function About() {
  return (
    <Section id="about" className="bg-white py-12 md:py-16 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
        
        {/* Left Side: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="aspect-square lg:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden relative shadow-2xl border border-border-light group">
            <img 
              src="/About.jpg" 
              alt="Luxury Law Office" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-8 -right-8 bg-primary-navy text-white p-8 rounded-2xl shadow-soft-lg hidden md:block">
            <p className="text-4xl font-heading mb-1 text-luxury-gold">1998</p>
            <p className="text-sm font-medium">Established in Dubai</p>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-base md:text-lg font-semibold tracking-widest text-luxury-gold uppercase mb-3">About The Firm</h2>
          <h3 className="text-3xl md:text-4xl font-heading text-primary-navy mb-5 leading-tight">
            A Legacy of <br /> Uncompromising <span className="italic">Excellence</span>
          </h3>
          
          <div className="space-y-5 text-text-muted font-body mb-8 text-base">
            <p>
              Founded on the principles of integrity, strategy, and discretion, Al Mansoori & Partners has established itself as one of Dubai's most prestigious law firms.
            </p>
            <p>
              We provide bespoke legal solutions to a discerning clientele, including international corporations, high-net-worth individuals, and regional entities. Our approach is characterized by rigorous analysis, innovative strategies, and an unwavering commitment to achieving our clients' objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 border-t border-border-light pt-6">
            <div>
              <h4 className="text-base font-heading text-primary-navy mb-1">Our Mission</h4>
              <p className="text-sm text-text-muted">To deliver unparalleled legal representation with absolute discretion and strategic foresight.</p>
            </div>
            <div>
              <h4 className="text-base font-heading text-primary-navy mb-1">Our Vision</h4>
              <p className="text-sm text-text-muted">To remain the benchmark of legal excellence in the Middle East and beyond.</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-border-light flex items-center justify-between">
            <div>
              <p className="font-heading text-xl text-primary-navy font-semibold">Tariq Al Mansoori</p>
              <p className="text-sm text-luxury-gold">Managing Partner</p>
            </div>
            <div className="w-36 mix-blend-multiply">
              <img src="/tsign.jpeg" alt="Tariq Al Mansoori Signature" className="w-full h-auto object-contain mix-blend-multiply" />
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
