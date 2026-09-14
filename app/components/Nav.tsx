'use client';

import Link from 'next/link';
import { Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export type NavPage = 'home' | 'projects' | 'literature' | 'recipes' | 'resume';

const links: { id: NavPage; label: string; href: string }[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'literature', label: 'Literature', href: '/literature' },
  { id: 'recipes', label: 'Recipes', href: '/recipes' },
  { id: 'resume', label: 'Resume', href: '/resume' },
];

interface NavProps {
  current: NavPage;
  onHomeClick?: () => void;
}

export default function Nav({ current, onHomeClick }: NavProps) {
  const { darkMode, toggleDarkMode } = useTheme();

  const toggleButton = (
    <button
      onClick={toggleDarkMode}
      className={`p-3 rounded-full transition-all transform hover:scale-110 border ${
        darkMode
          ? 'bg-surface-dark border-accent-dark text-accent-dark hover:bg-edge-dark'
          : 'bg-surface-light border-edge-light text-faint-light hover:bg-canvas-light'
      }`}
      aria-label="Toggle dark mode"
    >
      <Moon size={20} className={darkMode ? 'fill-current' : ''} />
    </button>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm border-b ${
        darkMode ? 'bg-canvas-dark/90 border-edge-dark' : 'bg-canvas-light/90 border-edge-light'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className={`font-mono text-lg font-semibold ${darkMode ? 'text-ink-dark' : 'text-ink-light'}`}>
            <span className={darkMode ? 'text-accent-dark' : 'text-accent-light'}>{'<'}</span>
            Ansh Shah
            <span className={darkMode ? 'text-accent-dark' : 'text-accent-light'}>{'>'}</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => {
              const isActive = current === link.id;
              const classes = `transition-colors ${
                isActive
                  ? darkMode
                    ? 'text-accent-dark'
                    : 'text-accent-light'
                  : darkMode
                  ? 'text-faint-dark hover:text-accent-dark'
                  : 'text-faint-light hover:text-accent-light'
              }`;

              if (link.id === 'home' && onHomeClick) {
                return (
                  <button key={link.id} onClick={onHomeClick} className={classes}>
                    {link.label}
                  </button>
                );
              }

              return (
                <Link key={link.id} href={link.href} className={classes}>
                  {link.label}
                </Link>
              );
            })}
            <div className={`border-l h-6 mx-4 ${darkMode ? 'border-edge-dark' : 'border-edge-light'}`}></div>
            {toggleButton}
          </div>

          <div className="md:hidden flex items-center space-x-4">{toggleButton}</div>
        </div>
      </div>
    </nav>
  );
}
