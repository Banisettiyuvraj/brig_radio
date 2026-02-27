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

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isAtTop, setIsAtTop] = useState(true);

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

  return (
    <div className="min-h-screen bg-white">
      <AmbientBackground />
      {/* Scroll-reactive Header Container */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${isAtTop ? 'translate-y-0' : '-translate-y-full'
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
      <Footer />
    </div>
  );
}

export default App;
