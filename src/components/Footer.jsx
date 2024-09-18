import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = ({ theme }) => {
  return (
    <footer className={`footer ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="footer-container">
        <div className="footer-links">
          <a href="/about">О платформе</a>
          <a href="/contact">Контакты</a>
          <a href="/privacy-policy">Политика конфиденциальности</a>
          <a href="/terms-of-use">Условия использования</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
        <div className="footer-subscribe">
          <form>
            <input type="email" placeholder="Ваш email" required />
            <button type="submit">Подписаться</button>
          </form>
        </div>
        <div className="footer-info">
          <p>&copy; {new Date().getFullYear()} Ваша Платформа. Все права защищены.</p>
          <p>Контакты: info@yourplatform.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
