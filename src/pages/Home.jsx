import React from 'react';
import HeroSection from "../components/HeroSection";  
import FeaturedCourses from "../components/FeaturedCourses";  
import './Home.css';


const Home = ({ theme, toggleTheme }) => {
  return (
    <div className={`home-page ${theme === 'dark' ? 'dark-mode' : ''}`}>
      <HeroSection theme={theme} toggleTheme={toggleTheme} />
      <FeaturedCourses theme={theme} toggleTheme={toggleTheme} />
      {/* Promo blocks, banners, platform info, etc. */}
    </div>
  );
};

export default Home;