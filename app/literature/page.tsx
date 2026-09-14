'use client';

import { BookOpen, PenLine, ExternalLink } from 'lucide-react';
import Nav from '../components/Nav';
import { useTheme } from '../contexts/ThemeContext';
import { reading, writing, type LiteratureEntry } from '@/lib/data/literature';

function LiteratureCard({ entry, darkMode }: { entry: LiteratureEntry; darkMode: boolean }) {
  const card = darkMode ? 'bg-surface-dark' : 'bg-surface-light';
  const muted = darkMode ? 'text-faint-dark' : 'text-faint-light';
  const body = darkMode ? 'text-ink-dark' : 'text-ink-light';
  const accent = darkMode ? 'text-accent-dark hover:text-accent-hover-dark' : 'text-accent-light hover:text-accent-hover-light';

  return (
    <div className={`p-6 rounded-lg shadow-lg ${card}`}>
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-lg font-semibold">{entry.title}</h3>
          <p className={`text-sm ${muted}`}>
            {entry.author} · {entry.type} · {entry.date}
          </p>
        </div>
        {entry.link && (
          <a href={entry.link} target="_blank" rel="noopener noreferrer" className={`transition-colors ${accent}`}>
            <ExternalLink size={16} />
          </a>
        )}
      </div>
      {entry.note && <p className={`text-sm leading-relaxed mt-2 ${body}`}>{entry.note}</p>}
    </div>
  );
}

export default function Literature() {
  const { darkMode } = useTheme();
  const accent = darkMode ? 'text-accent-dark' : 'text-accent-light';
  const muted = darkMode ? 'text-faint-dark' : 'text-faint-light';

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-canvas-dark text-ink-dark' : 'bg-canvas-light text-ink-light'
      }`}
    >
      <Nav current="literature" />

      <div className="pt-24 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              <span className={`font-semibold ${accent}`}>Literature</span>
            </h1>
            <div className={`w-24 h-1 mx-auto rounded mb-8 ${darkMode ? 'bg-accent-dark' : 'bg-accent-light'}`}></div>
            <p className={`text-xl max-w-2xl mx-auto ${muted}`}>Things I read, and things I write.</p>
          </div>

          <div className="space-y-16">
            <section>
              <div className="flex items-center mb-6">
                <BookOpen size={22} className={`mr-3 ${accent}`} />
                <h2 className="text-2xl font-semibold">Things I Read</h2>
              </div>
              <div className="space-y-4">
                {reading.map((entry) => (
                  <LiteratureCard key={entry.title} entry={entry} darkMode={darkMode} />
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center mb-6">
                <PenLine size={22} className={`mr-3 ${accent}`} />
                <h2 className="text-2xl font-semibold">Things I Write</h2>
              </div>
              <div className="space-y-4">
                {writing.map((entry) => (
                  <LiteratureCard key={entry.title} entry={entry} darkMode={darkMode} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
