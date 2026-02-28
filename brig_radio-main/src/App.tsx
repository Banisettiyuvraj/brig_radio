import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TopHeader from './sections/TopHeader';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Problems from './sections/Problems';
import Solutions from './sections/Solutions';
import AppPreview from './sections/AppPreview';
import HowItWorks from './sections/HowItWorks';
import Security from './sections/Security';
import WhyCampusWave from './sections/WhyCampusWave';
import AboutCollege from './sections/AboutCollege';
import Leadership from './sections/Leadership';
import Team from './sections/Team';
import DownloadCTA from './sections/DownloadCTA';
import Footer from './sections/Footer';
import AmbientBackground from './components/AmbientBackground';

import './App.css';

import type { LegalPageType } from './sections/legalContent';
import LegalLayout from './sections/LegalLayout';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [currentView, setCurrentView] = useState<{ type: 'home' | 'legal'; page?: LegalPageType }>({ type: 'home' });

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Configure ScrollTrigger defaults
    ScrollTrigger.defaults({
      toggleActions: 'play none none none',
    });

    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleLegalClick = (type: LegalPageType) => {
    setCurrentView({ type: 'legal', page: type });
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToHome = () => {
    setCurrentView({ type: 'home' });
    window.scrollTo({ top: 0, behavior: 'instant' });
    // Re-refresh scroll trigger for landing page
    setTimeout(() => ScrollTrigger.refresh(), 100);
  };

  if (currentView.type === 'legal' && currentView.page) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div
          className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${isAtTop ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <TopHeader />
        </div>
        <LegalLayout type={currentView.page} onBack={handleBackToHome} />
        <Footer onLegalClick={handleLegalClick} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <AmbientBackground />
      {/* Sticky Header Container */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] bg-white border-b border-gray-100 transition-transform duration-500 ease-in-out ${isAtTop ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <TopHeader />
        <Navbar />
      </div>

      {/* Main Content */}
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <AppPreview />
        <HowItWorks />
        <Security />
        <WhyCampusWave />
        <AboutCollege />
        <Leadership />
        <Team />
        <DownloadCTA />
      </main>

      {/* Footer */}
      <Footer onLegalClick={handleLegalClick} />
    </div>
  );
}

export default App;
