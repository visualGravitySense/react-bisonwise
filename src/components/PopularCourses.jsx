import React, { useEffect, useState } from 'react';
import './PopularCourses.css';

const PopularCourses = ({ theme }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        
        // Map the fetched data to your desired structure
        const mappedCourses = data.slice(0, 3).map(post => ({
          title: post.title,
          instructor: 'Неизвестный', // Placeholder for instructor
          rating: (Math.random() * (5 - 4) + 4).toFixed(1), // Random rating between 4.0 and 5.0
          students: Math.floor(Math.random() * 2000) + 500, // Random number of students
          price: `${Math.floor(Math.random() * (7000 - 3000) + 3000)} ₽`, // Random price between 3000 and 7000
        }));
        
        setCourses(mappedCourses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

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
