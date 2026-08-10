import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Clock, Calendar, Share2, Check, Bookmark, ChevronRight, ShieldAlert } from 'lucide-react';
import { usePublications } from '../data/publications';

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const publications = usePublications();
  const [copied, setCopied] = useState(false);

  // Find article by id, fallback to first article if not found
  const article = publications.find(p => p.id === id) || publications[0];

  // Get related articles
  const relatedArticles = publications
    .filter(p => p.id !== article.id)
    .slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-28 pb-16 bg-primary-navy">
        <div className="absolute inset-0 bg-[url('/hero-bg.png')] bg-cover bg-center bg-no-repeat opacity-10 mix-blend-overlay z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0"></div>
        
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-12 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-white/70 font-body mb-6 flex-wrap">
            <Link to="/" className="hover:text-luxury-gold transition-colors">{t('pages.articleDetail.homeLink')}</Link>
            <ChevronRight size={14} className="text-luxury-gold flex-shrink-0 rtl:rotate-180" />
            <Link to="/publications" className="hover:text-luxury-gold transition-colors">{t('pages.articleDetail.publicationsLink')}</Link>
            <ChevronRight size={14} className="text-luxury-gold flex-shrink-0 rtl:rotate-180" />
            <span className="text-luxury-gold font-medium truncate max-w-[200px] md:max-w-none">{article.category}</span>
          </nav>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <div className="flex items-center gap-4 flex-wrap mb-4">
              <span className="bg-luxury-gold/20 text-luxury-gold px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-luxury-gold/30">
                {article.category}
              </span>
              <span className="text-white/80 text-xs md:text-sm flex items-center gap-1.5 font-body">
                <Calendar size={14} className="text-luxury-gold" />
                {article.date}
              </span>
              <span className="text-white/80 text-xs md:text-sm flex items-center gap-1.5 font-body">
                <Clock size={14} className="text-luxury-gold" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-white leading-tight mb-6 drop-shadow-sm">
              {article.title}
            </h1>

            {/* Author details in header */}
            {article.author && (
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img 
                  src={article.author.image || "/hero-person.png"} 
                  alt={article.author.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-luxury-gold/50 bg-primary-navy shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-semibold text-white font-heading">{article.author.name}</h4>
                  <p className="text-xs text-luxury-gold/90 font-body">{article.author.role}</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-20 px-6 md:px-10 lg:px-12 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Article Body (Left 8 Columns) */}
          <motion.article 
            initial="hidden" animate="visible" variants={fadeUp}
            className="lg:col-span-8 space-y-8 text-text-main font-body"
          >
            {/* Featured Image */}
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-soft-xl border border-border-light relative mb-8">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 to-transparent"></div>
            </div>

            {/* Key Takeaways Box */}
            {article.takeaways && (
              <div className="bg-white p-6 md:p-8 rounded-2xl border-s-4 border-luxury-gold shadow-soft-md border border-border-light my-8">
                <div className="flex items-center gap-2 mb-4 text-primary-navy font-heading font-semibold text-lg">
                  <Bookmark size={20} className="text-luxury-gold" />
                  <h3>{t('pages.articleDetail.takeawaysTitle')}</h3>
                </div>
                <ul className="space-y-3">
                  {article.takeaways.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm md:text-base text-text-main leading-relaxed">
                      <span className="text-luxury-gold font-bold mt-1 text-sm">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Paragraphs and Headings */}
            <div className="space-y-8 text-lg leading-relaxed font-normal">
              {article.content && article.content.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-heading font-semibold text-primary-navy pt-4 border-t border-border-light/50">
                    {section.heading}
                  </h3>
                  <p className="text-text-main/90 leading-relaxed text-base md:text-lg">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Share and Action Toolbar */}
            <div className="pt-8 mt-12 border-t border-border-light flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-6 rounded-xl shadow-soft-sm">
              <div className="text-sm font-semibold text-primary-navy font-body">
                {t('pages.articleDetail.shareTitle')}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all ${
                    copied 
                      ? "bg-emerald-600 text-white shadow-sm" 
                      : "bg-primary-navy text-white hover:bg-primary-navy/90 shadow-sm"
                  }`}
                >
                  {copied ? <Check size={16} /> : <Share2 size={16} />}
                  <span>{copied ? t('pages.articleDetail.linkCopied') : t('pages.articleDetail.shareArticle')}</span>
                </button>
                <Button variant="outline-gold" size="sm" onClick={() => navigate('/publications')}>
                  {t('pages.articleDetail.viewAll')}
                </Button>
              </div>
            </div>

            {/* Legal Disclaimer */}
            <div className="p-6 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs text-amber-900/80 leading-relaxed flex items-start gap-3 font-body">
              <ShieldAlert size={18} className="text-amber-700 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-amber-900 block mb-1">{t('pages.articleDetail.disclaimerTitle')}</strong>
                {t('pages.articleDetail.disclaimerDesc')}
              </div>
            </div>
          </motion.article>

          {/* Right Sidebar (4 Columns) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-8">
              
              {/* Consultation Callout Card */}
              <div className="bg-gradient-to-br from-primary-navy to-primary-navy/95 text-white p-8 rounded-2xl shadow-soft-xl border border-luxury-gold/30 relative overflow-hidden">
                <div className="absolute end-0 bottom-0 w-32 h-32 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-luxury-gold/20 via-transparent to-transparent pointer-events-none"></div>
                <h3 className="text-xl font-heading text-white mb-3 font-semibold">
                  {t('pages.articleDetail.sidebarTitle', { category: article.category })}
                </h3>
                <p className="text-white/80 text-sm font-body mb-6 leading-relaxed">
                  {t('pages.articleDetail.sidebarDesc')}
                </p>
                <Button variant="gold" className="w-full font-semibold shadow-md py-3" onClick={() => navigate('/book-consultation')}>
                  {t('pages.articleDetail.sidebarBtn')}
                </Button>
              </div>

              {/* Related Publications Card */}
              <div className="bg-white p-6 md:p-7 rounded-2xl border border-border-light shadow-soft-lg">
                <h3 className="text-lg font-heading text-primary-navy font-semibold mb-5 pb-3 border-b border-border-light flex items-center justify-between">
                  <span>{t('pages.articleDetail.relatedTitle')}</span>
                  <span className="text-luxury-gold text-sm">✦</span>
                </h3>
                <div className="space-y-6">
                  {relatedArticles.map((rel) => (
                    <Link key={rel.id} to={`/publications/${rel.id}`} className="block group">
                      <div className="space-y-2">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-luxury-gold block">
                          {rel.category}
                        </span>
                        <h4 className="text-sm md:text-base font-heading text-primary-navy group-hover:text-luxury-gold transition-colors font-semibold line-clamp-2 leading-snug">
                          {rel.title}
                        </h4>
                        <span className="text-xs text-text-muted flex items-center gap-1 font-body">
                          <Clock size={11} className="text-luxury-gold" />
                          {rel.readTime} • {rel.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border-light text-center">
                  <Link to="/publications" className="text-xs font-semibold uppercase tracking-widest text-primary-navy hover:text-luxury-gold transition-colors inline-flex items-center gap-1">
                    <span>{t('pages.articleDetail.exploreAll')}</span>
                    <ChevronRight size={12} className="rtl:rotate-180" />
                  </Link>
                </div>
              </div>

            </div>
          </aside>
          
        </div>
      </section>
    </div>
  );
}
