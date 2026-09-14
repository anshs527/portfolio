'use client';

import { Hammer } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '../components/Nav';
import PageHeader from '../components/PageHeader';
import { useTheme } from '../contexts/ThemeContext';

export default function Recipes() {
  const { darkMode } = useTheme();

  const surface = darkMode ? 'bg-surface-dark' : 'bg-surface-light';
  const edge = darkMode ? 'border-edge-dark' : 'border-edge-light';
  const faint = darkMode ? 'text-faint-dark' : 'text-faint-light';
  const accent = darkMode ? 'text-accent-dark' : 'text-accent-light';

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-canvas-dark text-ink-dark' : 'bg-canvas-light text-ink-light'
      }`}
    >
      <Nav current="recipes" />

      <div className="pt-32 px-6 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className={`w-16 h-16 mx-auto mb-6 rounded-full border flex items-center justify-center ${surface} ${edge}`}
          >
            <Hammer size={24} className={accent} />
          </div>

          <PageHeader eyebrow="Coming soon" title="Recipes" />

          <p className={`text-lg leading-relaxed mb-10 -mt-6 ${faint}`}>
            This page is still under construction. Sorry about the inconvenience — here&apos;s a picture of Jimbo the
            bear in the meantime.
          </p>

          <div className={`w-72 h-72 mx-auto mb-10 rounded-2xl border overflow-hidden relative ${surface} ${edge}`}>
            <Image
              src="/images/jimbo.jpg"
              alt="Jimbo the bear"
              width={288}
              height={288}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className={`p-5 rounded-xl border mb-10 ${surface} ${edge}`}>
            <p className={`text-sm italic ${faint}`}>
              &quot;Jimbo keeps me company during late-night coding sessions and reminds me to take breaks.&quot;
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                darkMode
                  ? 'bg-accent-dark hover:bg-accent-hover-dark text-accent-ink-dark'
                  : 'bg-accent-light hover:bg-accent-hover-light text-accent-ink-light'
              }`}
            >
              Back to home
            </Link>
            <Link
              href="/projects"
              className={`px-6 py-3 rounded-lg font-medium border transition-colors ${surface} ${edge} ${faint} ${
                darkMode ? 'hover:border-accent-dark hover:text-accent-dark' : 'hover:border-accent-light hover:text-accent-light'
              }`}
            >
              View projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
