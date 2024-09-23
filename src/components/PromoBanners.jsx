import React, { useEffect, useState } from 'react';
import './PromoBanners.css';

const PromoBanners = ({ theme }) => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        // Map the fetched data to your desired promotional structure
        const mappedPromos = data.slice(0, 3).map(post => ({
          title: post.title,
          description: post.body,
          cta: 'Подробнее',
          link: `/promos/${post.id}`, // Custom link for each promo
        }));
        
        setPromos(mappedPromos);
      } catch (error) {
        console.error('Error fetching promos:', error);
      }
    };

    fetchPromos();
  }, []);

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
