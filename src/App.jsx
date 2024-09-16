import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/courses/CourseDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import InstructorCourses from './pages/instructor/Courses';
import EditCourse from './pages/instructor/EditCourse';
import AdminDashboard from './pages/admin/Dashboard';
import Header from "./components/Header"; 
import './App.css';

function App() {

  const [theme, setTheme] = useState('light'); 

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      <div className={`app ${theme === 'dark' ? 'dark-mode' : ''}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        
        {/* Другие компоненты */}
      </div>
      <Routes>
      <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/instructor/courses" element={<InstructorCourses />} />
        <Route path="/instructor/edit-course" element={<EditCourse />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
