'use client';

import { useState } from 'react';
import { Moon, Github, ExternalLink, Calendar, Code, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';

// Define project type
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  status: 'In Progress' | 'Completed' | 'Planning';
  startDate: string;
  githubUrl?: string;
  liveUrl?: string;
}

// Sample projects data
const projects: Project[] = [
  {
    id: '1',
    title: 'Storato.io Platform',
    description: 'A comprehensive storage and logistics management platform built for modern businesses.',
    longDescription: 'Storato.io is a full-stack web application that revolutionizes how businesses manage their storage and logistics operations. Built with modern technologies and focused on scalability and user experience.',
    technologies: ['TypeScript', 'React.js', 'Node.js', 'PostgreSQL', 'AWS'],
    status: 'In Progress',
    startDate: '2024-01',
    githubUrl: 'https://github.com/yourusername/storato',
    liveUrl: 'https://storato.io'
  },
  {
    id: '2',
    title: 'Sous.AI App',
    description: 'An AI integrated recipe-finder that gives users highly-rated online recipes based on the ingredients they have available in their kitchen.',
    longDescription: 'A full-featured recipe management application that helps users organize their favorite recipes, plan meals, and generate shopping lists automatically.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    status: 'In Progress',
    startDate: '2024-08',
    githubUrl: 'https://github.com/yourusername/recipe-app'
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website built with Next.js and Tailwind CSS.',
    longDescription: 'A sleek and modern portfolio website showcasing my projects, skills, and experience. Built with performance and accessibility in mind.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    status: 'Completed',
    startDate: '2024-08',
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://yourportfolio.com'
  }
];

export default function Projects() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return darkMode ? 'text-green-400' : 'text-green-600';
      case 'In Progress':
        return darkMode ? 'text-blue-400' : 'text-blue-600';
      case 'Planning':
        return darkMode ? 'text-yellow-400' : 'text-yellow-600';
      default:
        return darkMode ? 'text-gray-400' : 'text-gray-600';
    }
  };

  if (selectedProject) {
    // Project Detail View
    return (
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}>
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          darkMode ? 'bg-slate-900/90' : 'bg-slate-50/90'
        } backdrop-blur-sm border-b ${
          darkMode ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <button
                onClick={() => setSelectedProject(null)}
                className={`flex items-center space-x-2 transition-colors ${
                  darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                <ArrowLeft size={20} />
                <span>Back to Projects</span>
              </button>
              
              <button
                onClick={toggleDarkMode}
                className={`p-3 rounded-full transition-all transform hover:scale-110 border-2 ${
                  darkMode
                    ? 'bg-slate-800 border-yellow-400 text-yellow-400 hover:bg-slate-700'
                    : 'bg-slate-100 border-slate-300 text-slate-600 hover:bg-slate-200'
                }`}
                aria-label="Toggle dark mode"
              >
                <Moon size={20} className={darkMode ? 'fill-current' : ''} />
              </button>
            </div>
          </div>
        </nav>

        {/* Project Detail Content */}
        <div className="pt-24 px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <span className={`font-medium ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">
                    Started {selectedProject.startDate}
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors ${
                        darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors ${
                        darkMode ? 'text-slate-400 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
                      }`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-light mb-6">
                {selectedProject.title}
              </h1>
              
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
                {selectedProject.longDescription}
              </p>

              <div>
                <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded text-sm ${
                        darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Projects List View
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        darkMode ? 'bg-slate-900/90' : 'bg-slate-50/90'
      } backdrop-blur-sm border-b ${
        darkMode ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link 
              href="/"
              className={`font-mono text-lg font-semibold transition-colors ${
                darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>{'<'}</span>
              Ansh Shah
              <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>{'>'}</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`transition-colors ${
                  darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Projects
              </span>
              <Link
                href="/gallery"
                className={`transition-colors ${
                  darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Gallery
              </Link>
              <Link
                href="/recipes"
                className={`transition-colors ${
                  darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Recipes
              </Link>
              <Link
                href="/resume"
                className={`transition-colors ${
                  darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Resume
              </Link>
              <div className="border-l border-slate-300 dark:border-slate-600 h-6 mx-4"></div>
              <button
                onClick={toggleDarkMode}
                className={`p-3 rounded-full transition-all transform hover:scale-110 border-2 ${
                  darkMode
                    ? 'bg-slate-800 border-yellow-400 text-yellow-400 hover:bg-slate-700'
                    : 'bg-slate-100 border-slate-300 text-slate-600 hover:bg-slate-200'
                }`}
                aria-label="Toggle dark mode"
              >
                <Moon size={20} className={darkMode ? 'fill-current' : ''} />
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleDarkMode}
                className={`p-3 rounded-full transition-all transform hover:scale-110 border-2 ${
                  darkMode
                    ? 'bg-slate-800 border-yellow-400 text-yellow-400 hover:bg-slate-700'
                    : 'bg-slate-100 border-slate-300 text-slate-600 hover:bg-slate-200'
                }`}
                aria-label="Toggle dark mode"
              >
                <Moon size={20} className={darkMode ? 'fill-current' : ''} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-24 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              My <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Projects</span>
            </h1>
            <div className={`w-24 h-1 mx-auto rounded mb-8 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A collection of projects showcasing different technologies and solutions.
            </p>
          </div>

          {/* Projects List */}
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`p-8 rounded-lg cursor-pointer transition-all hover:shadow-lg border ${
                  darkMode 
                    ? 'bg-slate-800 hover:bg-slate-750 border-slate-700' 
                    : 'bg-white hover:bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                    <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <span className={getStatusColor(project.status)}>{project.status}</span>
                      <span>Started {project.startDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    {project.githubUrl && (
                      <Github size={18} className="text-slate-400" />
                    )}
                    {project.liveUrl && (
                      <ExternalLink size={18} className="text-slate-400" />
                    )}
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-xs ${
                        darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className={`px-2 py-1 rounded text-xs ${
                      darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'
                    }`}>
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}