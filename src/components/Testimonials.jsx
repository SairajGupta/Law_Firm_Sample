import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Section } from './ui/Section';
import { Card } from './ui/Card';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t('home.testimonials.t1Quote'),
      author: t('home.testimonials.t1Author'),
      rating: 5
    },
    {
      quote: t('home.testimonials.t2Quote'),
      author: t('home.testimonials.t2Author'),
      rating: 5
    },
    {
      quote: t('home.testimonials.t3Quote'),
      author: t('home.testimonials.t3Author'),
      rating: 5
    }
  ];

  return (
    <Section id="testimonials" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-base md:text-lg font-semibold tracking-widest text-luxury-gold uppercase mb-4">
          {t('home.testimonials.sectionSubtitle')}
        </h2>
        <h3 className="text-4xl md:text-5xl font-heading text-primary-navy mb-6">
          {t('home.testimonials.title1')} <span className="italic">{t('home.testimonials.titleGold')}</span>
        </h3>
      </div>

      <div className="relative w-full max-w-[100vw] overflow-hidden -mx-6 md:-mx-10 lg:-mx-12" dir="ltr">
        {/* Gradient Masks to fade edges */}
        <div className="absolute top-0 left-0 w-16 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-16 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        
        <div
          className="flex w-max animate-marquee hover:[animation-play-state:paused]"
        >
          {/* Group 1 */}
          <div className="flex gap-8 pr-8 w-max">
            {testimonials.map((t, index) => (
              <div key={index} className="w-[300px] md:w-[450px] flex-shrink-0" dir={document.documentElement.dir || 'ltr'}>
                <Card className="h-full flex flex-col justify-between p-8 md:p-10 bg-background border-none shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                      ))}
                    </div>
                    <p className="text-text-main font-body text-base leading-relaxed mb-8 italic">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="border-t border-border-light pt-6">
                    <p className="text-sm font-semibold text-primary-navy">{t.author}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Group 2 (Duplicate for infinite seamless loop) */}
          <div className="flex gap-8 pr-8 w-max">
            {testimonials.map((t, index) => (
              <div key={index} className="w-[300px] md:w-[450px] flex-shrink-0" dir={document.documentElement.dir || 'ltr'}>
                <Card className="h-full flex flex-col justify-between p-8 md:p-10 bg-background border-none shadow-sm hover:shadow-md transition-shadow">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                      ))}
                    </div>
                    <p className="text-text-main font-body text-base leading-relaxed mb-8 italic">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="border-t border-border-light pt-6">
                    <p className="text-sm font-semibold text-primary-navy">{t.author}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
