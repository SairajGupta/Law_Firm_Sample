import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CorporateLaw from './pages/expertise/CorporateLaw';
import CommercialLaw from './pages/expertise/CommercialLaw';
import RealEstate from './pages/expertise/RealEstate';
import Arbitration from './pages/expertise/Arbitration';
import FamilyLaw from './pages/expertise/FamilyLaw';
import CriminalDefense from './pages/expertise/CriminalDefense';
import BookConsultation from './pages/BookConsultation';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change unless there is a hash
    if (!location.hash) {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise/corporate-law" element={<CorporateLaw />} />
        <Route path="/expertise/commercial-law" element={<CommercialLaw />} />
        <Route path="/expertise/real-estate" element={<RealEstate />} />
        <Route path="/expertise/arbitration" element={<Arbitration />} />
        <Route path="/expertise/family-law" element={<FamilyLaw />} />
        <Route path="/expertise/criminal-defense" element={<CriminalDefense />} />
        <Route path="/book-consultation" element={<BookConsultation />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
