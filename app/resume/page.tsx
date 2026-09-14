'use client';

import { useState } from 'react';
import { Download, MapPin, Phone, Mail, Github, Linkedin, Calendar, Award, Briefcase, GraduationCap, Code, Star } from 'lucide-react';
import Nav from '../components/Nav';
import { useTheme } from '../contexts/ThemeContext';
import { profile } from '@/lib/data/profile';
import { experience } from '@/lib/data/experience';
import { education, highSchool } from '@/lib/data/education';
import { skills } from '@/lib/data/skills';
import { projects } from '@/lib/data/projects';

export default function Resume() {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Star },
  ];

  const card = darkMode ? 'bg-surface-dark' : 'bg-surface-light';
  const chip = darkMode ? 'bg-edge-dark text-faint-dark' : 'bg-edge-light text-faint-light';
  const accent = darkMode ? 'text-accent-dark' : 'text-accent-light';
  const accentBg = darkMode ? 'bg-accent-dark' : 'bg-accent-light';
  const accentInk = darkMode ? 'text-accent-ink-dark' : 'text-accent-ink-light';
  const muted = darkMode ? 'text-faint-dark' : 'text-faint-light';
  const body = darkMode ? 'text-ink-dark' : 'text-ink-light';

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-canvas-dark text-ink-dark' : 'bg-canvas-light text-ink-light'
      }`}
    >
      <Nav current="resume" />

      <div className="pt-24 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              My <span className={`font-semibold ${accent}`}>Resume</span>
            </h1>
            <div className={`w-24 h-1 mx-auto rounded mb-8 ${accentBg}`}></div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              <a
                href={`mailto:${profile.contact.email}`}
                className={`p-4 rounded-lg ${card} shadow-lg block hover:shadow-xl transition-all`}
              >
                <Mail size={20} className={`mx-auto mb-2 ${accent}`} />
                <p className="text-xs font-mono">{profile.contact.email}</p>
              </a>
              <div className={`p-4 rounded-lg ${card} shadow-lg`}>
                <Phone size={20} className={`mx-auto mb-2 ${accent}`} />
                <p className="text-xs font-mono">{profile.contact.phone}</p>
              </div>
              <a
                href={profile.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg ${card} shadow-lg block hover:shadow-xl transition-all`}
              >
                <Linkedin size={20} className={`mx-auto mb-2 ${accent}`} />
                <p className="text-xs font-mono">{profile.contact.linkedinHandle}</p>
              </a>
              <a
                href={profile.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg ${card} shadow-lg block hover:shadow-xl transition-all`}
              >
                <Github size={20} className={`mx-auto mb-2 ${accent}`} />
                <p className="text-xs font-mono">{profile.contact.githubHandle}</p>
              </a>
            </div>

            {/* Download Button */}
            <a
              href="/documents/Ansh_Shah_Resume.pdf"
              download="Ansh_Shah_Resume.pdf"
              className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${accentBg} ${accentInk} ${
                darkMode ? 'hover:bg-accent-hover-dark' : 'hover:bg-accent-hover-light'
              }`}
            >
              <Download size={16} className="mr-2" />
              Download PDF
            </a>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className={`flex rounded-lg p-1 ${card} shadow-lg`}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-md font-medium transition-all ${
                    activeTab === tab.id
                      ? `${accentBg} ${accentInk}`
                      : darkMode
                      ? 'text-faint-dark hover:text-ink-dark'
                      : 'text-faint-light hover:text-ink-light'
                  }`}
                >
                  <tab.icon size={16} className="mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Experience */}
            {activeTab === 'experience' && (
              <div className="space-y-8">
                {experience.map((job) => (
                  <div key={`${job.org}-${job.start}`} className={`p-8 rounded-lg ${card} shadow-lg`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-1">{job.title}</h3>
                        <p className={`text-lg ${accent} mb-2`}>{job.org}</p>
                        <div className={`flex items-center text-sm ${muted}`}>
                          <MapPin size={14} className="mr-1" />
                          <span className="mr-4">{job.location}</span>
                          <Calendar size={14} className="mr-1" />
                          <span>
                            {job.start} – {job.end}
                          </span>
                        </div>
                      </div>
                      {job.current && (
                        <div
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            darkMode ? 'bg-green-400 text-green-900' : 'bg-green-100 text-green-800'
                          }`}
                        >
                          Current
                        </div>
                      )}
                    </div>
                    <ul className={`space-y-2 ${body}`}>
                      {job.bullets.map((bullet, i) => (
                        <li key={i}>• {bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Education */}
            {activeTab === 'education' && (
              <div className="space-y-8">
                <div className={`p-8 rounded-lg ${card} shadow-lg`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">{education.degree}</h3>
                      <p className="text-lg font-medium mb-2">{education.school}</p>
                      <div className={`flex items-center text-sm ${muted}`}>
                        <MapPin size={14} className="mr-1" />
                        <span className="mr-4">{education.location}</span>
                        <Calendar size={14} className="mr-1" />
                        <span>{education.graduation}</span>
                      </div>
                      <p className={`text-lg ${accent} mt-4 mb-2`}>Relevant Coursework</p>
                      <p className={body}>{education.coursework.join(', ')}</p>
                      <p className={`text-lg ${accent} mt-4 mb-2`}>Awards</p>
                      <p className={body}>{education.awards.join(', ')}</p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <div
                        className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                          darkMode ? 'bg-green-900 text-green-400' : 'bg-green-100 text-green-800'
                        } mb-2`}
                      >
                        <span className="text-sm font-semibold">{education.honor}</span>
                      </div>
                      <p className={`text-sm ${muted}`}>{education.extra}</p>
                    </div>
                  </div>
                </div>

                <div className={`p-8 rounded-lg ${card} shadow-lg`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">{highSchool.diploma}</h3>
                      <p className="text-lg font-medium mb-2">{highSchool.school}</p>
                      <div className={`flex items-center text-sm ${muted}`}>
                        <MapPin size={14} className="mr-1" />
                        <span className="mr-4">{highSchool.location}</span>
                        <Calendar size={14} className="mr-1" />
                        <span>{highSchool.graduation}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`px-4 py-2 rounded-lg ${
                          darkMode ? 'bg-green-900 text-green-400' : 'bg-green-100 text-green-800'
                        }`}
                      >
                        <span className="text-2xl font-bold">{highSchool.gpa}</span>
                        <span className="text-sm ml-1">GPA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Projects */}
            {activeTab === 'projects' && (
              <div className="space-y-8">
                {projects.map((project) => (
                  <div key={project.slug} className={`p-8 rounded-lg ${card} shadow-lg`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span key={tech} className={`px-3 py-1 rounded-full text-xs font-medium ${chip}`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className={`text-sm shrink-0 ml-4 ${muted}`}>{project.year}</span>
                    </div>
                    <p className={body}>{project.summary}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Skills */}
            {activeTab === 'skills' && (
              <div className="space-y-8">
                <div className={`p-8 rounded-lg ${card} shadow-lg`}>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <Code size={24} className={`mr-3 ${accent}`} />
                    Programming Languages
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.languages.map((skill) => (
                      <div
                        key={skill}
                        className={`p-4 rounded-lg text-center transition-all hover:scale-105 ${chip}`}
                      >
                        <span className="font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`p-8 rounded-lg ${card} shadow-lg`}>
                  <h3 className="text-2xl font-semibold mb-6">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.frameworks.map((fw) => (
                      <span key={fw} className={`px-4 py-2 rounded-full text-sm font-medium ${chip}`}>
                        {fw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`p-8 rounded-lg ${card} shadow-lg`}>
                  <h3 className="text-2xl font-semibold mb-6">Other Skills</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className={`font-semibold mb-3 ${accent}`}>Developer Tools</h4>
                      <ul className={`space-y-2 ${body}`}>
                        {skills.tools.map((tool) => (
                          <li key={tool}>• {tool}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-3 ${accent}`}>Spoken Languages</h4>
                      <div className="flex flex-wrap gap-3">
                        {skills.spokenLanguages.map((lang) => (
                          <span key={lang} className={`px-4 py-2 rounded-full text-sm font-medium ${chip}`}>
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className={`p-8 rounded-lg ${card} shadow-lg`}>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <Award size={24} className={`mr-3 ${accent}`} />
                    Certifications
                  </h3>
                  <div className="space-y-4">
                    {skills.certifications.map((cert) => (
                      <div key={cert.name} className={`p-4 rounded-lg ${darkMode ? 'bg-edge-dark' : 'bg-canvas-light'}`}>
                        <h4 className="font-semibold mb-1">{cert.name}</h4>
                        <p className={`text-sm ${muted}`}>
                          {cert.org} - {cert.year}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
