import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { publications } from '../data/publications';

export default function AllPublications() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Corporate Law', 'Commercial Law', 'Real Estate', 'Arbitration', 'Criminal Defense'];

  const filteredPublications = selectedCategory === 'All' 
    ? publications 
    : publications.filter(pub => pub.category === selectedCategory);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('/About.jpg')] bg-cover bg-center bg-no-repeat z-0"></div>
        <div className="absolute inset-0 bg-primary-navy/35 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/50 via-transparent to-primary-navy/60 z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 bg-luxury-gold/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-luxury-gold mb-4 border border-luxury-gold/30">
              <BookOpen size={14} className="text-luxury-gold" />
              Legal Scholarship & Commentary
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-4 drop-shadow-md">
              Legal <span className="text-luxury-gold italic">Publications</span> & Insights
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto drop-shadow-sm">
              In-depth legal analysis, regulatory commentary, and high-level strategic guidance authored by our senior partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-12 max-w-[1280px] mx-auto">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-body transition-all ${
                selectedCategory === category
                  ? 'bg-primary-navy text-white shadow-md font-medium border border-primary-navy'
                  : 'bg-white text-text-main hover:bg-primary-navy/5 border border-border-light hover:border-luxury-gold/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPublications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/publications/${pub.id}`} className="block h-full group focus:outline-none focus:ring-2 focus:ring-luxury-gold rounded-2xl">
                <Card className="h-full p-0 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-soft-xl border border-border-light/80 hover:border-luxury-gold/40">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={pub.image} 
                      alt={pub.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full text-xs font-semibold text-primary-navy shadow-sm border border-border-light">
                      {pub.category}
                    </div>
                  </div>
                  <div className="p-7 flex-grow flex flex-col bg-white">
                    <div className="flex items-center justify-between text-xs text-text-muted mb-3 font-body">
                      <span>{pub.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-luxury-gold" />
                        {pub.readTime}
                      </span>
                    </div>
                    <h4 className="text-xl font-heading text-primary-navy mb-3 font-semibold group-hover:text-luxury-gold transition-colors leading-snug">
                      {pub.title}
                    </h4>
                    <p className="text-sm text-text-muted mb-6 line-clamp-3 leading-relaxed font-body flex-grow">
                      {pub.summary}
                    </p>
                    <div className="mt-auto pt-4 border-t border-border-light/50 flex items-center justify-between text-sm font-semibold text-primary-navy group-hover:text-luxury-gold transition-colors">
                      <span>Read Full Article</span>
                      <div className="w-8 h-8 rounded-full bg-primary-navy/5 group-hover:bg-luxury-gold/10 flex items-center justify-center transition-colors">
                        <ArrowRight className="w-4 h-4 text-primary-navy group-hover:text-luxury-gold transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-20 text-text-muted font-body">
            No publications found in this category.
          </div>
        )}

        {/* Bottom CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-primary-navy to-primary-navy/95 text-white rounded-2xl p-8 md:p-12 shadow-soft-xl border border-luxury-gold/30 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-luxury-gold/10 via-transparent to-transparent pointer-events-none"></div>
          <div className="max-w-2xl relative z-10 text-center md:text-left">
            <span className="text-luxury-gold text-xs font-semibold tracking-widest uppercase block mb-2">Tailored Counsel</span>
            <h3 className="text-2xl md:text-3xl font-heading mb-3 text-white">Require Deeper Insights for Your Enterprise?</h3>
            <p className="text-white/80 font-body text-sm md:text-base leading-relaxed">
              Connect directly with the primary legal authors of our scholarly articles for confidential, strategic consultation on your organization's legal matters.
            </p>
          </div>
          <div className="relative z-10 w-full md:w-auto flex-shrink-0">
            <Button variant="gold" size="lg" onClick={() => navigate('/book-consultation')} className="w-full md:w-auto shadow-md">
              Book Confidential Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
