'use client';

import Link from 'next/link';
import { Github, Calendar, ArrowUpRight } from 'lucide-react';
import Nav from '../components/Nav';
import PageHeader from '../components/PageHeader';
import { useTheme } from '../contexts/ThemeContext';
import { projects, type Project } from '@/lib/data/projects';

export default function Projects() {
  const { darkMode } = useTheme();

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return darkMode ? 'text-accent-dark' : 'text-accent-light';
      case 'In Progress':
        return darkMode ? 'text-accent-dark' : 'text-accent-light';
      case 'Planning':
        return darkMode ? 'text-faint-dark' : 'text-faint-light';
    }
  };

  const muted = darkMode ? 'text-faint-dark' : 'text-faint-light';
  const card = darkMode ? 'bg-surface-dark' : 'bg-surface-light';
  const chip = darkMode ? 'bg-edge-dark/40 text-faint-dark' : 'bg-edge-light/60 text-faint-light';
  const edge = darkMode ? 'border-edge-dark' : 'border-edge-light';
  const hoverEdge = darkMode ? 'hover:border-accent-dark' : 'hover:border-accent-light';

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-canvas-dark text-ink-dark' : 'bg-canvas-light text-ink-light'
      }`}
    >
      <Nav current="projects" />

      <div className="pt-32 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <PageHeader
            eyebrow="Work"
            title="Projects"
            description="A collection of projects across systems, ML, and full-stack development."
          />

          <div className="space-y-4">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`organic-hover group block p-8 rounded-xl border transition-colors ${card} ${edge} ${hoverEdge}`}
              >
                {project.status === 'In Progress' && (
                  <div className={`mb-5 inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${darkMode ? 'border-accent-dark/50 bg-accent-dark/10 text-accent-dark' : 'border-accent-light/40 bg-accent-light/10 text-accent-light'}`}>
                    In progress
                  </div>
                )}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight
                        size={16}
                        className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                          darkMode ? 'text-accent-dark' : 'text-accent-light'
                        }`}
                      />
                    </h2>
                    <div className={`flex items-center gap-4 text-sm ${muted}`}>
                      <span className={getStatusColor(project.status)}>{project.status}</span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {project.year}
                      </span>
                    </div>
                  </div>
                  {project.github && <Github size={18} className={`shrink-0 ${muted}`} aria-label="GitHub repository available" />}
                </div>

                <p className={`mb-4 leading-relaxed ${muted}`}>{project.summary}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className={`px-2 py-1 rounded text-xs font-mono ${chip}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
