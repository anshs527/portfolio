'use client';

import { BookOpen, PenLine, ExternalLink } from 'lucide-react';
import Nav from '../components/Nav';
import PageHeader from '../components/PageHeader';
import { useTheme } from '../contexts/ThemeContext';
import { reading, writing, type LiteratureEntry } from '@/lib/data/literature';

function LiteratureCard({ entry, darkMode }: { entry: LiteratureEntry; darkMode: boolean }) {
  const card = darkMode ? 'bg-surface-dark' : 'bg-surface-light';
  const edge = darkMode ? 'border-edge-dark' : 'border-edge-light';
  const muted = darkMode ? 'text-faint-dark' : 'text-faint-light';
  const body = darkMode ? 'text-ink-dark' : 'text-ink-light';
  const accent = darkMode ? 'text-accent-dark hover:text-accent-hover-dark' : 'text-accent-light hover:text-accent-hover-light';

  return (
    <div className={`organic-hover p-6 rounded-xl border ${card} ${edge}`}>
      <div className="flex items-start justify-between gap-4 mb-2">
        <div>
          <h3 className="text-lg font-semibold">{entry.title}</h3>
          <p className={`text-sm ${muted}`}>
            {entry.author} · {entry.type} · {entry.date}
          </p>
        </div>
        {entry.link && (
          <a href={entry.link} target="_blank" rel="noopener noreferrer" className={`shrink-0 transition-colors ${accent}`}>
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

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-canvas-dark text-ink-dark' : 'bg-canvas-light text-ink-light'
      }`}
    >
      <Nav current="literature" />

      <div className="pt-32 px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <PageHeader eyebrow="Reading & writing" title="Literature" description="Things I read, and things I write." />

          <div className="space-y-14">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={18} className={accent} />
                <h2 className="text-xl font-semibold">Things I read</h2>
              </div>
              <div className="space-y-4">
                {reading.map((entry) => (
                  <LiteratureCard key={entry.title} entry={entry} darkMode={darkMode} />
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <PenLine size={18} className={accent} />
                <h2 className="text-xl font-semibold">Things I write</h2>
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
