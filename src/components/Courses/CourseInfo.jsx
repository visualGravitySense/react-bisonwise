import React from 'react';
import { FaVideo, FaTasks, FaMobileAlt, FaTv, FaInfinity, FaCertificate } from 'react-icons/fa'; // Импортируем иконки
import './CourseInfo.css'; // Импорт стилей

const CourseInfo = ({ theme }) => {
  return (
    <section className={`course-info ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <h2>Что входит в курс</h2>
      <ul className="course-info-list">
        <li>
          <FaVideo className="icon" />
          <span>8 ч видео по запросу</span>
        </li>
        <li>
          <FaTasks className="icon" />
          <span>Задания</span>
        </li>
        <li>
          <FaMobileAlt className="icon" />
          <span>Доступ через мобильные устройства</span>
        </li>
        <li>
          <FaTv className="icon" />
          <span>Доступ через телевизор</span>
        </li>
        <li>
          <FaInfinity className="icon" />
          <span>Полный пожизненный доступ</span>
        </li>
        <li>
          <FaCertificate className="icon" />
          <span>Сертификат об окончании</span>
        </li>
      </ul>
    </section>
  );
};

export default CourseInfo;
