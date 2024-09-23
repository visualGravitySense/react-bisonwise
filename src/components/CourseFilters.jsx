import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './CourseFilters.css'; // Добавьте стили для фильтров

const CourseFilters = ({ onFilter }) => {
  // Локальные состояния для фильтров
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');

  // Функция для применения фильтров
  const handleFilter = () => {
    onFilter({ category, level, price, rating });
  };

  return (
    <section className="course-filters">
      <h3>Фильтры поиска курсов</h3>
      <Form>
        <Row>
          {/* Фильтр по категориям */}
          <Col md={3}>
            <Form.Group controlId="category">
              <Form.Label>Категория</Form.Label>
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Все категории</option>
                <option value="design">Дизайн</option>
                <option value="programming">Программирование</option>
                <option value="business">Бизнес</option>
                <option value="music">Музыка</option>
                <option value="art">Искусство</option>
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Фильтр по уровню */}
          <Col md={3}>
            <Form.Group controlId="level">
              <Form.Label>Уровень</Form.Label>
              <Form.Control
                as="select"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="">Все уровни</option>
                <option value="beginner">Начинающий</option>
                <option value="intermediate">Продвинутый</option>
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Фильтр по стоимости */}
          <Col md={3}>
            <Form.Group controlId="price">
              <Form.Label>Стоимость</Form.Label>
              <Form.Control
                as="select"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              >
                <option value="">Любая стоимость</option>
                <option value="free">Бесплатные</option>
                <option value="paid">Платные</option>
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Фильтр по рейтингу */}
          <Col md={3}>
            <Form.Group controlId="rating">
              <Form.Label>Рейтинг</Form.Label>
              <Form.Control
                as="select"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option value="">Все рейтинги</option>
                <option value="4">4+ звезд</option>
                <option value="3">3+ звезд</option>
                <option value="2">2+ звезд</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Button className="btn-apply-filters" onClick={handleFilter}>
          Применить фильтры
        </Button>
      </Form>
    </section>
  );
};

export default CourseFilters;

