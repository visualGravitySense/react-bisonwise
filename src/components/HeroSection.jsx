import React from "react";
import { Button, Container } from 'react-bootstrap';
import './Hero.css'; 

const HeroSection = () => {
  return (
    <section className="hero-section bg-light text-dark py-5">
      <Container className="text-center">
        {/* Заголовки */}
        <h1>Изучи что-то новое сегодня</h1>
        <h2>Лучшие онлайн-курсы от профессионалов</h2>
        <p>Погрузись в мир знаний с нашими уникальными курсами, созданными экспертами в своей области. Начни учиться уже сегодня!</p>
        
        {/* Кнопки */}
        <div>
          <Button className="m-2" variant="primary" href="/courses">Посмотреть курсы</Button>
          <Button className="m-2" variant="outline-secondary" href="/signup">Присоединиться сейчас</Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
