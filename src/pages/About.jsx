import React from 'react';
import './About.css';

const About = ({ theme }) => {
  return (
    <div className={`about-section ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <h2>О нашей платформе</h2>
      <p>Мы предоставляем уникальные курсы от лучших инструкторов. Присоединяйтесь к тысячам студентов, изучающих новые навыки.</p>
      
      <div className="about-links">
        <a href="/about-us" className="about-link">О нас</a>
        <a href="/contact" className="about-link">Контакты</a>
        <a href="/privacy-policy" className="about-link">Политика конфиденциальности</a>
        <a href="/terms" className="about-link">Условия использования</a>
      </div>
      
      <div className="social-media">
        <p>Следите за нами в социальных сетях:</p>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
      </div>
    </div>
  );
};

export default About;
