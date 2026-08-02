import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { ArrowRight } from 'lucide-react';
import { publications } from '../data/publications';

export default function Publications() {
  const displayedPublications = publications.slice(0, 3);

  return (
    <Section id="insights" className="bg-primary-navy relative overflow-hidden">
      <div className="flex justify-between items-end mb-12 relative z-10">
        <div>
          <h2 className="text-base md:text-lg font-semibold tracking-widest text-luxury-gold uppercase mb-4">Insights</h2>
          <h3 className="text-4xl md:text-5xl font-heading text-white">
            Legal <span className="italic">Publications</span>
          </h3>
        </div>
        <Link to="/publications" className="hidden md:flex items-center text-sm font-medium text-white/90 hover:text-luxury-gold transition-colors">
          View All Publications
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {displayedPublications.map((pub, index) => (
          <motion.div
            key={pub.id || index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Link to={`/publications/${pub.id}`} className="block h-full group focus:outline-none focus:ring-2 focus:ring-luxury-gold rounded-2xl">
              <Card className="h-full p-0 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl border border-white/10 hover:border-luxury-gold/60 bg-white">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={pub.image} 
                    alt={pub.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full text-xs font-semibold text-primary-navy shadow-sm border border-border-light/50">
                    {pub.category}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col bg-white">
                  <p className="text-xs text-text-muted mb-3 font-body">{pub.date}</p>
                  <h4 className="text-xl font-heading text-primary-navy mb-4 font-semibold group-hover:text-luxury-gold transition-colors">
                    {pub.title}
                  </h4>
                  <span className="mt-auto flex items-center text-sm font-medium text-primary-navy group-hover:text-luxury-gold transition-colors">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </span>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center md:hidden relative z-10">
        <Link 
          to="/publications"
          className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-navy rounded-full text-sm font-semibold hover:bg-luxury-gold hover:text-white transition-all shadow-md"
        >
          View All Publications
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </Section>
  );
}
