import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.css'; 

// const HeroSection = ({ theme, toggleTheme }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(prevMode => !prevMode);
//   };

// const HeroSection = ({ theme }) => {

//   return (
//     <section className={`hero-section ${theme === 'dark' ? 'dark-mode' : ''}`}>
//       <Container>
//         <h1 className="display-4">Welcome to My App!</h1>
//         <p className="lead">
//           Discover amazing features and get started with your journey today.
//         </p>
//         <Button variant="primary" onClick={() => alert('Learn More Clicked!')}>Learn More</Button>
//         <Button variant="secondary" onClick={toggleDarkMode} className="ml-2">
//           {darkMode ? 'Light Mode' : 'Dark Mode'}
//         </Button>
//       </Container>
//     </section>
//   );
// };


const HeroSection = ({ theme, toggleTheme }) => {
  return (
    <section className={`hero-section ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <div className="hero-content">
        <h1>Welcome to BisonWise</h1>
        <p>Your gateway to knowledge.</p>
        {/* <button className="cta-btn" onClick={toggleTheme}>
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button> */}
      </div>
    </section>
  );
};

export default HeroSection;



// import React from "react";
// import { Button, Container } from 'react-bootstrap';
// import './Hero.css'; 

// const HeroSection = () => {
//   return (
//     <section className="hero-section bg-light text-dark py-5">
//       <Container className="text-center">
        
//         <h1>Изучи что-то новое сегодня</h1>
//         <h2>Лучшие онлайн-курсы от профессионалов</h2>
//         <p>Погрузись в мир знаний с нашими уникальными курсами, созданными экспертами в своей области. Начни учиться уже сегодня!</p>
        
        
//         <div>
//           <Button className="m-2" variant="primary" href="/courses">Посмотреть курсы</Button>
//           <Button className="m-2" variant="outline-secondary" href="/signup">Присоединиться сейчас</Button>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default HeroSection;


