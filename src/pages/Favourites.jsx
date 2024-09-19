import React from 'react';
import { Button } from 'react-bootstrap';
import Profile from "../components/Profile"; 
import './Favourites.css';

const Favourites = ({ theme }) => {
  const favouriteCourses = [
    {
      title: 'Курс по React',
      instructor: 'Иван Иванов',
      price: '4990 ₽',
    },
    {
      title: 'Курс по Веб-дизайну',
      instructor: 'Анна Смирнова',
      price: '3990 ₽',
    },
    {
      title: 'Курс по React',
      instructor: 'Иван Иванов',
      price: '4990 ₽',
    },
    {
      title: 'Курс по Веб-дизайну',
      instructor: 'Анна Смирнова',
      price: '3990 ₽',
    },
    {
      title: 'Курс по React',
      instructor: 'Иван Иванов',
      price: '4990 ₽',
    },
    {
      title: 'Курс по Веб-дизайну',
      instructor: 'Анна Смирнова',
      price: '3990 ₽',
    },
    // Добавьте другие избранные курсы
  ];

  return (
    <section className={`favourites-section ${theme === 'dark' ? 'dark-mode' : ''}`}>

      <Profile />
      <h2>Избранные курсы</h2>
      <div className="favourite-courses">
        {favouriteCourses.length > 0 ? (
          favouriteCourses.map((course, index) => (
            <div key={index} className="favourite-card">
              <h3>{course.title}</h3>
              <p>Инструктор: {course.instructor}</p>
              <p>Цена: {course.price}</p>
              <Button className="btn-remove">Удалить из избранного</Button>
            </div>
          ))
        ) : (
          <p>У вас нет избранных курсов.</p>
        )}
      </div>
      <Button className="btn-checkout">Перейти к оформлению заказа</Button>
    </section>
  );
};

export default Favourites;
