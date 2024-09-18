import React from 'react';
import './StudentTestimonials.css';

const testimonials = [
  {
    name: 'Иван Иванов',
    course: 'Веб-разработка',
    description: 'Отличный курс! Узнал много нового и полезного для своей работы.',
    imageUrl: 'https://via.placeholder.com/100'
  },
  {
    name: 'Мария Петрова',
    course: 'Графический дизайн',
    description: 'Очень довольна курсом. Профессиональные преподаватели и актуальные материалы.',
    imageUrl: 'https://via.placeholder.com/100'
  },
  {
    name: 'Алексей Смирнов',
    course: 'Python для начинающих',
    description: 'Курс очень полезный и доступный для новичков. Всем рекомендую!',
    imageUrl: 'https://via.placeholder.com/100'
  }
];

const StudentTestimonials = ({ theme }) => {
  return (
    <section className={`testimonials-section ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="testimonials-container">
        <h2>Отзывы студентов</h2>
        <div className="testimonials-content">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <img src={testimonial.imageUrl} alt={testimonial.name} className="testimonial-image" />
              <div className="testimonial-info">
                <h3>{testimonial.name}</h3>
                <p className="testimonial-course">{testimonial.course}</p>
                <p>{testimonial.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
