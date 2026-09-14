'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun, Menu, X, Sprout } from 'lucide-react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const toggleButton = (
    <button
      onClick={toggleDarkMode}
      className={`flex items-center justify-center w-11 h-11 rounded-full border transition-colors ${
        darkMode
          ? 'border-edge-dark text-faint-dark hover:text-accent-dark hover:border-accent-dark'
          : 'border-edge-light text-faint-light hover:text-accent-light hover:border-accent-light'
      }`}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );

  const linkClasses = (isActive: boolean) =>
    `relative py-1 transition-colors ${
      isActive
        ? darkMode
          ? 'text-ink-dark'
          : 'text-ink-light'
        : darkMode
        ? 'text-faint-dark hover:text-ink-dark'
        : 'text-faint-light hover:text-ink-light'
    }`;

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b backdrop-blur-sm transition-colors ${
        darkMode ? 'bg-canvas-dark/90 border-edge-dark' : 'bg-canvas-light/90 border-edge-light'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`inline-flex items-center gap-2 font-bold text-base tracking-tight ${darkMode ? 'text-ink-dark' : 'text-ink-light'}`}
          >
            <Sprout size={20} aria-hidden="true" className={darkMode ? 'text-accent-dark' : 'text-accent-light'} />
            Ansh Shah

          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = current === link.id;
              const content = (
                <span className={linkClasses(isActive)}>
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute left-0 right-0 -bottom-[1px] h-px transition-all ${
                        darkMode ? 'bg-accent-dark' : 'bg-accent-light'
                      }`}
                    />
                  )}
                </span>
              );

              if (link.id === 'home' && onHomeClick) {
                return (
                  <button key={link.id} onClick={onHomeClick} aria-current={isActive ? 'page' : undefined}>
                    {content}
                  </button>
                );
              }

              return (
                <Link key={link.id} href={link.href} aria-current={isActive ? 'page' : undefined}>
                  {content}
                </Link>
              );
            })}
            <div className={`h-5 w-px ${darkMode ? 'bg-edge-dark' : 'bg-edge-light'}`} />
            {toggleButton}
          </div>

          <div className="md:hidden flex items-center gap-2">
            {toggleButton}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className={`flex items-center justify-center w-11 h-11 rounded-full border transition-colors ${
                darkMode
                  ? 'border-edge-dark text-ink-dark'
                  : 'border-edge-light text-ink-light'
              }`}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className={`md:hidden border-t px-6 py-4 ${
            darkMode ? 'bg-canvas-dark border-edge-dark' : 'bg-canvas-light border-edge-light'
          }`}
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => {
              const isActive = current === link.id;
              const classes = `flex items-center h-11 px-2 rounded-md text-base transition-colors ${
                isActive
                  ? darkMode
                    ? 'text-accent-dark'
                    : 'text-accent-light'
                  : darkMode
                  ? 'text-faint-dark hover:text-ink-dark'
                  : 'text-faint-light hover:text-ink-light'
              }`;

              if (link.id === 'home' && onHomeClick) {
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      setMenuOpen(false);
                      onHomeClick();
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={classes}
                  >
                    {link.label}
                  </button>
                );
              }

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={classes}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
