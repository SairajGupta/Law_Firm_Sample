import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative min-h-screen lg:h-screen min-h-[700px] flex items-center justify-center overflow-hidden pt-32 pb-16 lg:pt-20 lg:pb-0">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat"></div>
      <div className="absolute inset-0 bg-primary-navy/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 via-primary-navy/20 to-primary-navy/50"></div>

      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        
        {/* Content */}
        <motion.div 
          className="w-full md:w-3/4 lg:w-2/3 z-10 pt-10"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h1 
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-white leading-[1.2] md:leading-[1.1] mb-6 drop-shadow-sm"
          >
            Trusted <span className="text-luxury-gold">Legal</span> <br className="hidden md:block" /> Excellence in <span className="text-luxury-gold italic">Dubai</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-xl font-light"
          >
            Providing world-class legal counsel to high-net-worth individuals, multinational corporations, and government clients.
          </motion.p>
          
          <motion.div 
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 mb-12 md:mb-16"
          >
            <Button variant="gold" size="lg" className="w-full sm:w-auto">Book Consultation</Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto border-white/50 text-white hover:bg-white hover:text-primary-navy bg-transparent backdrop-blur-sm">Explore Practice Areas</Button>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            variants={fadeUp}
            className="grid grid-cols-2 md:flex gap-6 md:gap-12 border-t border-white/20 pt-8"
          >
            <div>
              <p className="text-3xl md:text-4xl font-heading font-semibold text-luxury-gold drop-shadow-sm">20+</p>
              <p className="text-sm font-body text-white/80 mt-1 uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-heading font-semibold text-luxury-gold drop-shadow-sm">500+</p>
              <p className="text-sm font-body text-white/80 mt-1 uppercase tracking-wider">Cases Won</p>
            </div>
            <div className="col-span-2 md:col-span-1">
              <p className="text-3xl md:text-4xl font-heading font-semibold text-luxury-gold drop-shadow-sm">98%</p>
              <p className="text-sm font-body text-white/80 mt-1 uppercase tracking-wider">Client Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Cutout Person on the Right (Moved outside the inner container for proper anchoring) */}
      <motion.div 
        className="hidden lg:block absolute right-0 bottom-0 z-10 w-[55%] lg:w-[50%] xl:w-[45%] max-w-[900px] pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <img 
          src="/hero-person.png" 
          alt="Professional Lawyer"
          className="w-full h-auto object-contain object-right-bottom drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
          style={{ maskImage: 'linear-gradient(to top, black 95%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top, black 95%, transparent 100%)' }}
        />
      </motion.div>

    </section>
  );
}
