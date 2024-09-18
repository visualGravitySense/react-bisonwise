import React from 'react';
import './PromoBanners.css';

const PromoBanners = ({ theme }) => {
  const promos = [
    {
      title: 'Скидка 30% на все курсы!',
      description: 'Только до конца месяца — скидки на все курсы. Успейте записаться!',
      cta: 'Получить скидку',
      link: '/discounts',
    },
    {
      title: 'Бесплатный вебинар по UX/UI дизайну',
      description: 'Узнайте основы UX/UI дизайна и прокачайте свои навыки. Присоединяйтесь к вебинару!',
      cta: 'Записаться',
      link: '/webinar',
    },
    {
      title: 'Новый курс: Веб-разработка с нуля',
      description: 'Изучите основы веб-разработки и создавайте свои сайты с нуля. Присоединяйтесь сейчас!',
      cta: 'Подробнее',
      link: '/courses/web-development',
    },
  ];

  return (
    <section className={`promo-banners ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <h2>Лучшие предложения со скидкой</h2>
      <div className="promo-container">
        
        {promos.map((promo, index) => (
          <div key={index} className="promo-card">
            <h3>{promo.title}</h3>
            <p>{promo.description}</p>
            <a href={promo.link} className="promo-btn">
              {promo.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoBanners;
