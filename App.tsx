
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </>
  );
};

export default App;
