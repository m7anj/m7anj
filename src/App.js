import React from 'react';
import './App.css';
import Nav from './comps/Nav/Nav';
import Hero from './comps/Hero/Hero';
import Experience from './comps/Experience/Experience';
import Projects from './comps/Projects/Projects';
import Contact from './comps/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;