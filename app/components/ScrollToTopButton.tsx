"use client"

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme || 'light');
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="md:fixed md:bottom-4 md:right-4 flex justify-center mb-8 md:mb-0 p-4 z-20">
      <button onClick={scrollToTop} className="bg-base-content rounded-full p-4 flex items-center justify-center">
        <ArrowUp className="text-base-100" size={24} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
