
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Experience from './components/Experience.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Certifications from './components/Certifications.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import ProjectShowcase from './components/ProjectShowcase.tsx';
import ChatBot from './components/ChatBot.tsx';

function App() {
  const [view, setView] = useState<'home' | 'showcase'>('home');

  useEffect(() => {
    document.title = "Satish Chauhan | Social Media & Content Enthusiast";
    // Scroll to top when view changes
    window.scrollTo(0, 0);
  }, [view]);

  if (view === 'showcase') {
    return <ProjectShowcase onBack={() => setView('home')} />;
  }

  return (
    <div className="antialiased">
      <Navbar onShowcaseClick={() => setView('showcase')} />
      <main>
        <Hero onShowcaseClick={() => setView('showcase')} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
