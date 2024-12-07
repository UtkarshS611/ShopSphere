"use client"

import { useContext } from 'react';
import { ThemeContext } from '@/app/Contexts/ThemeContext'

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Dark' : 'Light'}
    </button>
  );
}
