import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'; 
import './CourseCategories.css';

const CourseCategories = ({ theme }) => {
    const categories = [
        { name: 'Дизайн', icon: '🎨', description: 'Графический, веб и UI/UX дизайн' },
        { name: 'Программирование', icon: '💻', description: 'Frontend, Backend и мобильная разработка' },
        { name: 'Бизнес', icon: '📊', description: 'Маркетинг, управление и предпринимательство' },
        { name: 'Музыка', icon: '🎵', description: 'Музыкальная теория, продюсирование и инструменты' },
        { name: 'Искусство', icon: '🖌️', description: 'Живопись, скульптура и искусствоведение' },
      ];

  return (
    <section className={`course-categories ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <h2>Категории курсов</h2>
      <div className="categories-list">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <div className="category-icon">{category.icon}</div>
            <div className="category-title">{category.name}</div>
            <p>{category.description}</p>

            <Button href={`/courses/category/${category.name.toLowerCase()}`} variant="outline-secondary">
                Посмотреть курсы
              </Button>


          </div>
        ))}
      </div>
      <button className="view-more-btn">Смотреть все курсы</button>
    </section>
  );
};

export default CourseCategories;
