import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'; 
import './CourseCategories.css';

const CourseCategories = ({ theme }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                
                // Assuming you want to map posts to categories
                const mappedCategories = data.slice(0, 5).map(post => ({
                    name: post.title,
                    icon: '📚', // You can customize the icon here
                    description: post.body,
                }));
                
                setCategories(mappedCategories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <section className={`course-categories ${theme === 'dark' ? 'dark-mode' : ''}`}>
            <h2>Категории курсов</h2>
            <div className="categories-list">
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        <div className="category-icon">{category.icon}</div>
                        <div className="category-title">{category.name}</div>
                        <p className="category-paragraph">{category.description}</p>

                        <Button href={`/courses/category/${category.name.toLowerCase()}`} variant="outline-secondary">
                            Посмотреть курс
                        </Button>
                    </div>
                ))}
            </div>
            {/* <button className="view-more-btn">Смотреть все курсы</button> */}
            <Button className="view-more-btn" variant="outline-secondary" href="/courses">Смотреть все курсы</Button>
        </section>
    );
};

export default CourseCategories;
