"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

const HomeButton = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme || 'light');
  }, []);

  return (
    <div className="md:fixed md:bottom-4 md:right-4 flex justify-center my-8 md:my-0 z-20">
        <Link href="/" passHref>
      <button className="bg-base-content rounded-full p-4 flex items-center justify-center">
        <Home className="text-base-100" size={24} />
      </button>
      </Link>
    </div>
  );
};

export default HomeButton;
