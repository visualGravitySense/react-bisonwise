// src/components/Hero.jsx
import React from 'react';
import './HeroClasses.css'; // Импорт стилей для компонента

const HeroClasses = ({ theme }) => {
  return (
    <section className={`hero-section ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="hero-content">
        {/* Хлебные крошки */}
        <nav className="breadcrumb-nav">
          <a href="/">Главная</a> &gt; <a href="/courses">Курсы</a> &gt; <a href="/courses/current">Текущий курс</a>
        </nav>
        <h1>Добро пожаловать на наш курс!</h1>
        <p>Изучите самые современные технологии и навыки с нашими экспертами.</p>
        <div className="course-details">
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <span key={index} className={`star ${index < 4 ? 'filled' : ''}`}>&#9733;</span>
            ))}
          </div>
          <p className="instructor-name">Имя преподавателя: Алексей Иванов</p>
          <p className="last-updated">Последнее обновление: Сентябрь 2024</p>
          <p className="language">Язык курса: Русский</p>
        </div>
        <button className="cta-button">Записаться на курс</button>
      </div>
    </section>
  );
};

export default HeroClasses;
