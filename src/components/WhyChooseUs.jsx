import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { CheckCircle } from 'lucide-react';

const features = [
  "Absolute Confidentiality",
  "Strategic Legal Advice",
  "International Expertise",
  "Tailored Solutions",
  "Unwavering Client Focus",
  "Transparent Communication"
];

export default function WhyChooseUs() {
  return (
    <Section id="why-choose-us" className="bg-primary-navy text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-7/12"
        >
          <h2 className="text-base md:text-lg font-semibold tracking-widest text-luxury-gold uppercase mb-4">Why Choose Us</h2>
          <h3 className="text-4xl md:text-5xl font-heading text-white mb-6 leading-tight">
            The Advantage of <br /> <span className="italic text-luxury-gold">Experience</span>
          </h3>
          
          <p className="text-light-gray/80 font-body text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
            We don't just practice law; we engineer strategic advantages. Our firm is built on a foundation of uncompromising standards and a relentless pursuit of our clients' success.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <CheckCircle className="w-6 h-6 text-luxury-gold flex-shrink-0" />
                <span className="font-medium text-base text-white/90">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-5/12"
        >
          <div className="aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden relative shadow-2xl border border-white/15 group">
            <img 
              src="/whyus.jpg" 
              alt="Why Choose Us" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
