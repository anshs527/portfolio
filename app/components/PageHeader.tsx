'use client';

import { useTheme } from '../contexts/ThemeContext';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  const { darkMode } = useTheme();
  const faint = darkMode ? 'text-faint-dark' : 'text-faint-light';
  const ink = darkMode ? 'text-ink-dark' : 'text-ink-light';
  const clay = darkMode ? 'text-clay-dark' : 'text-clay-light';

  return (
    <div className="mb-14">
      <p className={`font-note text-2xl -rotate-1 mb-1 ${clay}`}>{eyebrow}</p>
      <h1 className={`font-display text-4xl md:text-5xl ${ink}`}>{title}</h1>
      {description && <p className={`mt-4 text-lg max-w-xl leading-relaxed ${faint}`}>{description}</p>}
    </div>
  );
}
