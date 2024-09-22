import React from 'react';
import ChartModal from '../components/ChartModal';
import { Container, Button } from 'react-bootstrap';
import './Hero.scss'; 


const HeroSection = ({ theme }) => {
  return (
    <section className={`hero-section ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="hero-content">
      <h1>Изучи что-то новое сегодня</h1>
        <h2>Лучшие онлайн-курсы от профессионалов</h2>
        <p>Погрузись в мир знаний с нашими уникальными курсами, созданными экспертами в своей области. Начни учиться уже сегодня!</p>                
        <div>
          <Button className="m-2" variant="outline-secondary" href="/courses">Посмотреть курсы</Button>
          {/* <Button className="m-2" variant="outline-secondary" href="/signup">Присоединиться сейчас</Button> */}
          <ChartModal />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
