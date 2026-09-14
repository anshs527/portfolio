// app/contexts/ThemeContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('darkMode');
      setDarkMode(saved === 'true' || (saved !== 'false' && window.matchMedia('(prefers-color-scheme: dark)').matches));
    } catch {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle('light', !darkMode);
    try { localStorage.setItem('darkMode', String(darkMode)); } catch { /* Theme still works when storage is unavailable. */ }
  }, [darkMode, ready]);

  const toggleDarkMode = () => setDarkMode(value => !value);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}