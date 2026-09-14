'use client';

import { useState } from 'react';
import { Github, ArrowLeft, Calendar } from 'lucide-react';
import Nav from '../components/Nav';
import { useTheme } from '../contexts/ThemeContext';
import { projects, type Project } from '@/lib/data/projects';

export default function Projects() {
  const { darkMode } = useTheme();
  const [selected, setSelected] = useState<Project | null>(null);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return darkMode ? 'text-green-400' : 'text-green-600';
      case 'In Progress':
        return darkMode ? 'text-accent-dark' : 'text-accent-light';
      case 'Planning':
        return darkMode ? 'text-faint-dark' : 'text-faint-light';
    }
  };

  const muted = darkMode ? 'text-faint-dark' : 'text-faint-light';
  const body = darkMode ? 'text-ink-dark' : 'text-ink-light';
  const card = darkMode ? 'bg-surface-dark' : 'bg-surface-light';
  const chip = darkMode ? 'bg-edge-dark text-faint-dark' : 'bg-edge-light text-faint-light';
  const accent = darkMode ? 'text-accent-dark' : 'text-accent-light';

  if (selected) {
    return (
      <div
        className={`min-h-screen transition-colors duration-300 ${
          darkMode ? 'bg-canvas-dark text-ink-dark' : 'bg-canvas-light text-ink-light'
        }`}
      >
        <Nav current="projects" />

        <div className="pt-24 px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelected(null)}
              className={`flex items-center space-x-2 mb-8 transition-colors ${
                darkMode ? 'text-faint-dark hover:text-accent-dark' : 'text-faint-light hover:text-accent-light'
              }`}
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </button>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className={`font-medium ${getStatusColor(selected.status)}`}>{selected.status}</span>
                <span className={muted}>{selected.year}</span>
              </div>
              <a
                href={selected.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  darkMode ? 'text-faint-dark hover:text-ink-dark' : 'text-faint-light hover:text-ink-light'
                }`}
              >
                <Github size={20} />
              </a>
            </div>

            <h1 className="text-4xl md:text-5xl font-light mb-6">{selected.title}</h1>
            <p className={`text-lg leading-relaxed mb-8 ${body}`}>{selected.summary}</p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selected.tech.map((tech) => (
                  <span key={tech} className={`px-3 py-1 rounded text-sm ${chip}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Highlights</h3>
              <ul className={`space-y-3 ${body}`}>
                {selected.highlights.map((h, i) => (
                  <li key={i} className="leading-relaxed">
                    • {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-canvas-dark text-ink-dark' : 'bg-canvas-light text-ink-light'
      }`}
    >
      <Nav current="projects" />

      <div className="pt-24 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              My <span className={`font-semibold ${accent}`}>Projects</span>
            </h1>
            <div className={`w-24 h-1 mx-auto rounded mb-8 ${darkMode ? 'bg-accent-dark' : 'bg-accent-light'}`}></div>
            <p className={`text-xl max-w-2xl mx-auto ${muted}`}>
              A collection of projects across systems, ML, and full-stack development.
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.slug}
                onClick={() => setSelected(project)}
                className={`p-8 rounded-lg cursor-pointer transition-all hover:shadow-lg border ${card} ${
                  darkMode ? 'border-edge-dark' : 'border-edge-light'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                    <div className={`flex items-center space-x-4 text-sm mb-4 ${muted}`}>
                      <span className={getStatusColor(project.status)}>{project.status}</span>
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {project.year}
                      </span>
                    </div>
                  </div>
                  <Github size={18} className={muted} />
                </div>

                <p className={`mb-4 leading-relaxed ${muted}`}>{project.summary}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className={`px-2 py-1 rounded text-xs ${chip}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
