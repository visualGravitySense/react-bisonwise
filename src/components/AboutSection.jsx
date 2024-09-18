import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './AboutSection.css';

const AboutSection = ({ theme }) => {
  // URL изображения из JSONPlaceholder
  const imageUrl = 'https://via.placeholder.com/800x400';

  return (
    <section className={`about-section ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="about-container">
        <h2>О нашей платформе</h2>
        <div className="about-info">
          <img src={imageUrl} alt="About Our Platform" className="about-image" />
          <p>
            Наша платформа предоставляет уникальные курсы, созданные экспертами с большим опытом, что гарантирует высокое качество обучения. Более 10,000 студентов и 500 инструкторов уже присоединились к нам, и мы успешно работаем более 5 лет, предлагая актуальные и проверенные курсы. Мы также предоставляем гарантию возврата средств в случае неудовлетворенности курсом. Если вы хотите стать преподавателем, вы можете легко подать заявку на нашем сайте.
          </p>
          <div>
          {/* <Button className="m-2" variant="primary" href="/courses">Мое обучение</Button> */}
          <Button className="m-2" variant="outline-secondary" href="/signup">Стать преподавателем</Button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
