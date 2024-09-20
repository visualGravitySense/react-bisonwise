// AllCourses.jsx
import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap'; // Импортируем необходимые компоненты Bootstrap
import './FeaturedCourses.css';
import CourseFilters from "./CourseFilters";  
import CourseSorting from './CourseSorting';
import CourseCard from './CourseCard';
import Pagination from './Pagination';

const AllCourses = ({ theme }) => {
  
  const courses = [
    {
      id: 1,
      title: 'React Course',
      description: 'Learn React and build powerful web applications.',
      price: '4990',
      image: 'https://via.placeholder.com/150' // Sample image placeholder
    },
    {
      id: 2,
      title: 'JavaScript Essentials',
      description: 'Master the fundamentals of JavaScript.',
      price: '2990',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      title: 'React Course',
      description: 'Learn React and build powerful web applications.',
      price: '4990',
      image: 'https://via.placeholder.com/150' // Sample image placeholder
    },
    {
      id: 4,
      title: 'JavaScript Essentials',
      description: 'Master the fundamentals of JavaScript.',
      price: '2990',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 5,
      title: 'React Course',
      description: 'Learn React and build powerful web applications.',
      price: '4990',
      image: 'https://via.placeholder.com/150' // Sample image placeholder
    },
    {
      id: 6,
      title: 'JavaScript Essentials',
      description: 'Master the fundamentals of JavaScript.',
      price: '2990',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 7,
      title: 'React Course',
      description: 'Learn React and build powerful web applications.',
      price: '4990',
      image: 'https://via.placeholder.com/150' // Sample image placeholder
    },
    {
      id: 8,
      title: 'JavaScript Essentials',
      description: 'Master the fundamentals of JavaScript.',
      price: '2990',
      image: 'https://via.placeholder.com/150'
    },
    // More courses here
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
        {/* <h2>Все курсы</h2> */}

        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}

        {/* <CourseCard key={course.id} course={course} /> */}
        
        {/* <div className="d-flex flex-wrap justify-content-center">
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
        </div> */}
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

