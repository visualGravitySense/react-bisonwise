import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './CourseSorting.css'; // Добавляем стили

const CourseSorting = ({ onSort }) => {
  // Локальное состояние для сортировки
  const [sortOption, setSortOption] = useState('');

  // Функция для обработки сортировки
  const handleSortChange = (e) => {
    const selectedOption = e.target.value;
    setSortOption(selectedOption);
    onSort(selectedOption);
  };

  return (
    <section className="course-sorting">
      <h3>Сортировка курсов</h3>
      <Form>
        <Form.Group controlId="sort">
          <Form.Label>Сортировать по:</Form.Label>
          <Form.Control as="select" value={sortOption} onChange={handleSortChange}>
            <option value="">Выберите опцию</option>
            <option value="date">Дате добавления</option>
            <option value="popularity">Популярности (количество студентов)</option>
            <option value="rating">Рейтингу</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </section>
  );
};

export default CourseSorting;
