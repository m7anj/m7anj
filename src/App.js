import React from 'react';
import './App.css';

import Hero from './comps/Hero/Hero';

import About from './comps/Skills/Skills';

function App() {
  return (
    <div className="App">
      
      <main className="main-content">
        <Hero />
        <About />
      </main>

    </div>
  );
}

export default App;