"use client";

import React, { useEffect } from 'react';

const ThemeToggle = () => {
  useEffect(() => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    const handleToggleTheme = () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
        if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove('hidden');
        if (themeToggleLightIcon) themeToggleLightIcon.classList.add('hidden');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
        if (themeToggleDarkIcon) themeToggleDarkIcon.classList.add('hidden');
        if (themeToggleLightIcon) themeToggleLightIcon.classList.remove('hidden');
      }
    };

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', handleToggleTheme);
    }

    return () => {
      if (themeToggleBtn) {
        themeToggleBtn.removeEventListener('click', handleToggleTheme);
      }
    };
  }, []);

  return (
    <button id="theme-toggle-btn">
      <span id="theme-toggle-dark-icon" className="hidden">🌙</span>
      <span id="theme-toggle-light-icon">☀️</span>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
