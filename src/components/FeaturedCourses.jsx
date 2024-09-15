import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap'; // Импортируем необходимые компоненты Bootstrap
import './FeaturedCourses.css';

const FeaturedCourses = () => {
  const courses = [
    {
      title: 'Курс по React',
      description: 'Изучите основы React и создавайте мощные веб-приложения.',
      instructor: 'Иван Иванов',
      rating: '4.5',
      price: '4990 ₽',
    },
    {
        title: 'Курс по React',
        description: 'Изучите основы React и создавайте мощные веб-приложения.',
        instructor: 'Иван Иванов',
        rating: '4.5',
        price: '4990 ₽',
      },
      {
        title: 'Курс по React',
        description: 'Изучите основы React и создавайте мощные веб-приложения.',
        instructor: 'Иван Иванов',
        rating: '4.5',
        price: '4990 ₽',
      },
    // Добавьте другие курсы в этот массив
  ];

  return (
    <div className="featured-courses">
      <h2>Избранные курсы</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Инструктор: {course.instructor}</p>
            <p>Рейтинг: {course.rating}</p>
            <p>Цена: {course.price}</p>
            <Button className="btn-learn-more" href={`/courses/${index}`}>Подробнее</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
