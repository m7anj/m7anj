import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './comps/Nav/Nav';
import Hero from './comps/Hero/Hero';
import Experience from './comps/Experience/Experience';
import Projects from './comps/Projects/Projects';
import Contact from './comps/Contact/Contact';
import AnimatedBackground from './comps/Background/AnimatedBackground';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="App">
      <AnimatedBackground />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;