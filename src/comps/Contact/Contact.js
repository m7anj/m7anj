import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <p className="contact-text">
            I'm currently looking for new placement opportunities, internships and project collaborations.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <a href="mailto:manjeevsinghtakhar@hotmail.com" className="contact-email">
            <FaEnvelope />
            manjeevsinghtakhar@hotmail.com
          </a>
          <a href="mailto:ManjeevT@hotmail.com" className="contact-email">
            <FaEnvelope />
            manjeevt@hotmail.com
          </a>

          <div className="contact-links">
            <a href="https://github.com/m7anj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/manjeevtakhar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="https://youtube.com/@alludetech" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube size={24} />
            </a>
            <a href="https://leetcode.com/u/m7anj/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
              <SiLeetcode size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
