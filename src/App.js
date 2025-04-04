import React from 'react';
import './App.css';

import Hero from './comps/Hero/Hero';

import About from './comps/Skills/Skills';

import Experience from './comps/Experience/Experience';

import Projects from './comps/Projects/Projects';

import Footer from './comps/Footer/Footer';

function App() {
  return (
    <div className="App">
      
      <main className="main-content">
        <Hero />
        <About />
      </main>

      <section className="experience-section">
        <div className="experience-content">
          <Experience />
        </div>
      </section>

      <section className="projects-section">
        <div className="projects-content">
          <Projects />
        </div>
      </section>

      <section className="footer-section">
        <div className="projects-content">
          <Footer />
        </div>
      </section>

    </ div>

  );
}

export default App;