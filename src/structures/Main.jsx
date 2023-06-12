import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      
      <Navbar handleDarkModeToggle={handleDarkModeToggle} isDarkMode={isDarkMode}/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
