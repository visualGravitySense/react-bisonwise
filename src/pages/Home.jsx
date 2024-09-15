import React from 'react';
import HeroSection from "../components/HeroSection";  
import FeaturedCourses from "../components/FeaturedCourses";  
import './Home.css';



const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FeaturedCourses />
      {/* Promo blocks, banners, platform info, etc. */}
    </div>
  );
};

export default Home;
