import React from 'react';
import './PopularCourses.css';

const PopularCourses = ({ theme }) => {
  const courses = [
    {
      title: 'Основы графического дизайна',
      instructor: 'Анна Петрова',
      rating: '4.7',
      students: '1200',
      price: '3990 ₽',
    },
    {
      title: 'Full-Stack разработка',
      instructor: 'Дмитрий Иванов',
      rating: '4.9',
      students: '1800',
      price: '5990 ₽',
    },
    {
      title: 'Музыкальная композиция',
      instructor: 'Екатерина Смирнова',
      rating: '4.5',
      students: '800',
      price: '4990 ₽',
    },
    // Добавьте другие курсы
  ];

  return (
    <section className={`popular-courses ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <h2>Популярные курсы</h2>
      <div className="courses-list">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course.title}</h3>
            <p>Инструктор: {course.instructor}</p>
            <p>Рейтинг: {course.rating}</p>
            <p>Студентов: {course.students}</p>
            <p>Цена: {course.price}</p>
            <button className="btn-learn-more">Подробнее</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCourses;
