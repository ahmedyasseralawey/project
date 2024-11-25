import React from 'react';
import { SearchProvider } from './contexts/SearchContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Certifications from './components/Certifications';
import Courses from './components/Courses';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <SearchProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <Certifications />
        <Courses />
        <Skills />
        <Services />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </SearchProvider>
  );
};

export default App;