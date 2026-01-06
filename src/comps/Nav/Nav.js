import React, { useState, useEffect } from 'react';
import './Nav.css';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add background to nav when scrolled
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['home', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}>
          MT
        </a>

        <ul className="nav-links">
          <li>
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('experience');
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
