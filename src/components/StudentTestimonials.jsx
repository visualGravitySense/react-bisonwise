import React, { useEffect, useState } from 'react';
import './StudentTestimonials.css';

const StudentTestimonials = ({ theme }) => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        // Map the fetched data to your desired testimonial structure
        const mappedTestimonials = data.slice(0, 3).map(user => ({
          name: user.name,
          course: 'Курс не указан', // Placeholder for course
          description: `Студент ${user.name} остался доволен обучением!`, // Placeholder description
          imageUrl: 'https://via.placeholder.com/100', // Placeholder image
        }));

        setTestimonials(mappedTestimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

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
