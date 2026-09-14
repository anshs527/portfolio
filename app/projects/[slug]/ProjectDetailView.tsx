'use client';

import Link from 'next/link';
import { Github, ArrowLeft, Calendar } from 'lucide-react';
import Nav from '../../components/Nav';
import ProjectLearning from '../../components/ProjectLearning';
import { useTheme } from '../../contexts/ThemeContext';
import type { Project } from '@/lib/data/projects';

export default function ProjectDetailView({ project }: { project: Project }) {
  const { darkMode } = useTheme();

  const muted = darkMode ? 'text-faint-dark' : 'text-faint-light';
  const body = darkMode ? 'text-ink-dark' : 'text-ink-light';
  const chip = darkMode ? 'bg-edge-dark/40 text-faint-dark' : 'bg-edge-light/60 text-faint-light';
  const clayChip = darkMode
    ? 'border-clay-dark/40 text-clay-dark bg-clay-dark/10'
    : 'border-clay-light/30 text-clay-light bg-clay-light/10';
  const accent = darkMode ? 'text-accent-dark' : 'text-accent-light';
  const surface = darkMode ? 'bg-surface-dark' : 'bg-surface-light';
  const edge = darkMode ? 'border-edge-dark' : 'border-edge-light';
  const statusColor = project.status === 'Completed' ? accent : muted;

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-canvas-dark text-ink-dark' : 'bg-canvas-light text-ink-light'
      }`}
    >
      <Nav current="projects" />

      <div className="pt-32 px-6 pb-24">
        <main className="max-w-4xl mx-auto">
          <Link
            href="/projects"
            className={`inline-flex items-center gap-2 mb-10 text-sm transition-colors ${
              darkMode ? 'text-faint-dark hover:text-accent-dark' : 'text-faint-light hover:text-accent-light'
            }`}
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className={`font-medium ${statusColor}`}>{project.status}</span>
            <span className={`flex items-center gap-1 text-sm ${muted}`}>
              <Calendar size={14} />
              {project.year}
            </span>
          </div>

          <div className="flex items-start justify-between gap-4 mb-6">
            <h1 className="font-display text-3xl md:text-4xl">{project.title}</h1>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              className={`shrink-0 transition-colors mt-2 ${
                darkMode ? 'text-faint-dark hover:text-ink-dark' : 'text-faint-light hover:text-ink-light'
              }`}
            >
              <Github size={22} />
            </a>
          </div>

          <p className={`text-lg leading-relaxed mb-10 ${body}`}>{project.summary}</p>

          {project.metrics && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              {project.metrics.map((metric) => (
                <div key={metric.label} className={`p-4 rounded-xl border ${surface} ${edge}`}>
                  <p className={`font-display text-2xl mb-1 ${accent}`}>{metric.value}</p>
                  <p className={`text-xs leading-snug ${muted}`}>{metric.label}</p>
                </div>
              ))}
            </div>
          )}

          <ProjectLearning slug={project.slug} />

          <div className="mb-10">
            <h3 className={`font-mono text-xs tracking-[0.2em] uppercase mb-4 ${accent}`}>Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className={`px-3 py-1 rounded text-sm font-mono ${chip}`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.components && (
            <div className="mb-10">
              <h3 className={`font-mono text-xs tracking-[0.2em] uppercase mb-4 ${accent}`}>Components</h3>
              <div className="flex flex-wrap gap-2">
                {project.components.map((c) => (
                  <span key={c} className={`px-3 py-1 rounded-full text-sm border ${clayChip}`}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className={project.figures ? 'mb-10' : ''}>
            <h3 className={`font-mono text-xs tracking-[0.2em] uppercase mb-4 ${accent}`}>Implementation details</h3>
            <ul className={`space-y-4 ${body}`}>
              {project.highlights.map((h, i) => (
                <li key={i} className="leading-relaxed flex gap-3">
                  <span className={accent}>—</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.figures && (
            <div>
              <h3 className={`font-mono text-xs tracking-[0.2em] uppercase mb-4 ${accent}`}>Results</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                {project.figures.map((fig) => (
                  <figure key={fig.src} className={`rounded-xl border overflow-hidden ${edge}`}>
                    {/* Figures are matplotlib exports with white backgrounds — keep the frame light in both themes so they stay legible. */}
                    <div className="bg-white p-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={fig.src} alt={fig.alt} loading="lazy" className="w-full h-auto rounded" />
                    </div>
                    <figcaption className={`text-xs leading-snug px-3 py-3 ${muted}`}>{fig.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
