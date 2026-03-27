import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Social from './components/Social';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import MobileNav from './components/MobileNav';
import './App.css';

function App() {
  const [showResume, setShowResume] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showResume ? 'hidden' : '';
  }, [showResume]);

  return (
    <div className='home'>
      <Header scrolled={scrolled} onResumeClick={() => setShowResume(true)} />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Social onResumeClick={() => setShowResume(true)} />
      </main>
      <Footer />
      <MobileNav />
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </div>
  );
}

export default App;