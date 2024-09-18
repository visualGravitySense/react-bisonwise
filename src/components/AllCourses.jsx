// AllCourses.jsx
import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap'; // Импортируем необходимые компоненты Bootstrap
import './FeaturedCourses.css';
import CourseFilters from "./CourseFilters";  
import CourseSorting from './CourseSorting';
import Pagination from './Pagination';

const AllCourses = ({ theme }) => {
  
  const courses = [
    {
      id: 1, // Уникальный идентификатор
      title: 'Курс по React',
      description: 'Изучите основы React и создавайте мощные веб-приложения.',
      instructor: 'Иван Иванов',
      rating: '4.5',
      price: '4990 ₽',
    },
    {
      id: 2,
      title: 'Курс по Vue',
      description: 'Овладейте основами Vue.js для создания интерактивных веб-приложений.',
      instructor: 'Анна Петрова',
      rating: '4.7',
      price: '5290 ₽',
    },
    {
      id: 3, // Уникальный идентификатор
      title: 'Курс по React',
      description: 'Изучите основы React и создавайте мощные веб-приложения.',
      instructor: 'Иван Иванов',
      rating: '4.5',
      price: '4990 ₽',
    },
    {
      id: 4,
      title: 'Курс по Vue',
      description: 'Овладейте основами Vue.js для создания интерактивных веб-приложений.',
      instructor: 'Анна Петрова',
      rating: '4.7',
      price: '5290 ₽',
    },
    // Добавьте другие курсы в этот массив
  ];

  // const CoursePage = () => {
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const totalPages = 10; // Допустим, у нас 10 страниц курсов
  
  //   // Функция для обработки изменения страницы
  //   const handlePageChange = (page) => {
  //     setCurrentPage(page);
  //     // Логика для загрузки курсов для текущей страницы
  //   };

  return (
    <section className={`featured-courses ${theme === 'dark' ? 'dark-mode' : ''}`}>

      <CourseFilters />
      <CourseSorting />
      
      <div className="featured-courses">
        <h2>Все курсы</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <p>Инструктор: {course.instructor}</p>
              <p>Рейтинг: {course.rating}</p>
              <p>Цена: {course.price}</p>
              <Button className="btn-learn-more" href={`/courses/${course.id}`}>Подробнее</Button>
            </div>
            
          ))}
        </div>
        <Pagination 
            // currentPage={currentPage} 
            // totalPages={totalPages} 
            // onPageChange={handlePageChange} 
          />
        
      </div>
      
    </section>
  );
};

export default AllCourses;