import React from 'react';
import HeroSection from "../components/HeroSection";  
import FeaturedCourses from "../components/FeaturedCourses";  
import './Home.css';


const Home = ({ theme, toggleTheme }) => {
  return (
    <div className={`home-page ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <HeroSection theme={theme} toggleTheme={toggleTheme} />
      <FeaturedCourses />
      {/* Promo blocks, banners, platform info, etc. */}
    </div>
  );
};

export default Home;

// const Home = () => {
//   return (
//     <div className="home-page">
//       <HeroSection theme={theme}/>
//       <FeaturedCourses />
//       {/* Promo blocks, banners, platform info, etc. */}
//     </div>
//   );
// };


