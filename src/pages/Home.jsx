import { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import PracticeAreas from '../components/PracticeAreas';
import WhyChooseUs from '../components/WhyChooseUs';
import CaseResults from '../components/CaseResults';
import Testimonials from '../components/Testimonials';
import Publications from '../components/Publications';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          if (window.lenis) {
            window.lenis.scrollTo(element, { offset: -80, immediate: true });
          } else {
            const y = element.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: 'instant' });
          }
        }
      }, 100);
    }
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <PracticeAreas />
      <WhyChooseUs />
      <CaseResults />
      <Testimonials />
      <Publications />
      <FAQ />
      <Contact />
    </main>
  );
}
