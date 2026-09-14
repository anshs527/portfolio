'use client';

import { useState } from 'react';
import { Download, MapPin, Phone, Mail, Github, Linkedin, Calendar, Award, Briefcase, GraduationCap, Code, Star } from 'lucide-react';
import Nav from '../components/Nav';
import PageHeader from '../components/PageHeader';
import { useTheme } from '../contexts/ThemeContext';
import { profile } from '@/lib/data/profile';
import { experience } from '@/lib/data/experience';
import { education, highSchool } from '@/lib/data/education';
import { skills } from '@/lib/data/skills';
import { projects } from '@/lib/data/projects';

const tabs = [
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'skills', label: 'Skills', icon: Star },
] as const;

type TabId = (typeof tabs)[number]['id'];

export default function Resume() {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState<TabId>('experience');

  const card = darkMode ? 'bg-surface-dark' : 'bg-surface-light';
  const edge = darkMode ? 'border-edge-dark' : 'border-edge-light';
  const chip = darkMode ? 'bg-edge-dark/40 text-faint-dark' : 'bg-edge-light/60 text-faint-light';
  const accent = darkMode ? 'text-accent-dark' : 'text-accent-light';
  const accentBg = darkMode ? 'bg-accent-dark' : 'bg-accent-light';
  const accentInk = darkMode ? 'text-accent-ink-dark' : 'text-accent-ink-light';
  const muted = darkMode ? 'text-faint-dark' : 'text-faint-light';
  const body = darkMode ? 'text-ink-dark' : 'text-ink-light';

  const onTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const nextIndex = e.key === 'ArrowRight' ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
    setActiveTab(tabs[nextIndex].id);
    document.getElementById(`tab-${tabs[nextIndex].id}`)?.focus();
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-canvas-dark text-ink-dark' : 'bg-canvas-light text-ink-light'
      }`}
    >
      <Nav current="resume" />

      <div className="pt-32 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <PageHeader eyebrow="Résumé" title="Ansh Shah" />

            <a
              href="/documents/AnshShah.pdf"
              download="Ansh_Shah.pdf"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium shrink-0 transition-colors ${accentBg} ${accentInk} ${
                darkMode ? 'hover:bg-accent-hover-dark' : 'hover:bg-accent-hover-light'
              }`}
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>

          {/* Contact Info */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 text-sm`}>
            <a
              href={`mailto:${profile.contact.email}`}
              className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${card} ${edge} ${
                darkMode ? 'hover:border-accent-dark' : 'hover:border-accent-light'
              }`}
            >
              <Mail size={16} className={accent} />
              <span className="font-mono truncate">{profile.contact.email}</span>
            </a>
            <a
              href={`tel:${profile.contact.phone}`}
              className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${card} ${edge} ${
                darkMode ? 'hover:border-accent-dark' : 'hover:border-accent-light'
              }`}
            >
              <Phone size={16} className={accent} />
              <span className="font-mono">{profile.contact.phone}</span>
            </a>
            <a
              href={profile.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${card} ${edge} ${
                darkMode ? 'hover:border-accent-dark' : 'hover:border-accent-light'
              }`}
            >
              <Linkedin size={16} className={accent} />
              <span className="font-mono truncate">{profile.contact.linkedinHandle}</span>
            </a>
            <a
              href={profile.contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${card} ${edge} ${
                darkMode ? 'hover:border-accent-dark' : 'hover:border-accent-light'
              }`}
            >
              <Github size={16} className={accent} />
              <span className="font-mono truncate">{profile.contact.githubHandle}</span>
            </a>
          </div>

          {/* Tabs */}
          <div role="tablist" aria-label="Resume sections" className={`inline-flex rounded-lg p-1 border mb-10 ${card} ${edge}`}>
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(tab.id)}
                  onKeyDown={(e) => onTabKeyDown(e, index)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? `${accentBg} ${accentInk}`
                      : darkMode
                      ? 'text-faint-dark hover:text-ink-dark'
                      : 'text-faint-light hover:text-ink-light'
                  }`}
                >
                  <tab.icon size={15} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Experience */}
          {activeTab === 'experience' && (
            <div id="panel-experience" role="tabpanel" aria-labelledby="tab-experience" className="space-y-6">
              {experience.map((job) => (
                <div key={`${job.org}-${job.start}`} className={`p-7 rounded-xl border ${card} ${edge}`}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                      <p className={`${accent} mb-2`}>{job.org}</p>
                      <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm ${muted}`}>
                        <span className="flex items-center gap-1">
                          <MapPin size={13} />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={13} />
                          {job.start} – {job.end}
                        </span>
                      </div>
                    </div>
                    {job.current && (
                      <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium ${accentBg} ${accentInk}`}>
                        Current
                      </span>
                    )}
                  </div>
                  <ul className={`space-y-2 ${body}`}>
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed">
                        <span className={accent}>—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {activeTab === 'education' && (
            <div id="panel-education" role="tabpanel" aria-labelledby="tab-education" className="space-y-6">
              <div className={`p-7 rounded-xl border ${card} ${edge}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{education.degree}</h3>
                    <p className="font-medium mb-2">{education.school}</p>
                    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm mb-4 ${muted}`}>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} />
                        {education.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {education.graduation}
                      </span>
                    </div>
                    <p className={`text-sm font-mono uppercase tracking-wide ${accent} mb-1`}>Coursework</p>
                    <p className={`${body} mb-4`}>{education.coursework.join(', ')}</p>
                    <p className={`text-sm font-mono uppercase tracking-wide ${accent} mb-1`}>Awards</p>
                    <p className={body}>{education.awards.join(', ')}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`px-4 py-2 rounded-lg whitespace-nowrap mb-2 ${accentBg} ${accentInk}`}>
                      <span className="text-sm font-semibold">{education.honor}</span>
                    </div>
                    <p className={`text-sm ${muted}`}>{education.extra}</p>
                  </div>
                </div>
              </div>

              <div className={`p-7 rounded-xl border ${card} ${edge}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{highSchool.diploma}</h3>
                    <p className="font-medium mb-2">{highSchool.school}</p>
                    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm ${muted}`}>
                      <span className="flex items-center gap-1">
                        <MapPin size={13} />
                        {highSchool.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={13} />
                        {highSchool.graduation}
                      </span>
                    </div>
                  </div>
                  <div className={`shrink-0 px-4 py-2 rounded-lg ${accentBg} ${accentInk}`}>
                    <span className="text-xl font-bold">{highSchool.gpa}</span>
                    <span className="text-sm ml-1">GPA</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects */}
          {activeTab === 'projects' && (
            <div id="panel-projects" role="tabpanel" aria-labelledby="tab-projects" className="space-y-6">
              {projects.map((project) => (
                <div key={project.slug} className={`p-7 rounded-xl border ${card} ${edge}`}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className={`px-3 py-1 rounded-full text-xs font-mono ${chip}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className={`shrink-0 text-sm ${muted}`}>{project.year}</span>
                  </div>
                  <p className={body}>{project.summary}</p>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {activeTab === 'skills' && (
            <div id="panel-skills" role="tabpanel" aria-labelledby="tab-skills" className="space-y-6">
              <div className={`p-7 rounded-xl border ${card} ${edge}`}>
                <h3 className="text-lg font-semibold mb-5 flex items-center gap-3">
                  <Code size={19} className={accent} />
                  Programming languages
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {skills.languages.map((skill) => (
                    <div key={skill} className={`p-3 rounded-lg text-center text-sm font-medium ${chip}`}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div className={`p-7 rounded-xl border ${card} ${edge}`}>
                <h3 className="text-lg font-semibold mb-5">Frameworks & libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((fw) => (
                    <span key={fw} className={`px-3 py-1.5 rounded-full text-sm font-medium ${chip}`}>
                      {fw}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`p-7 rounded-xl border ${card} ${edge}`}>
                <h3 className="text-lg font-semibold mb-5">Other skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className={`font-semibold mb-3 ${accent}`}>Developer tools</h4>
                    <ul className={`space-y-2 ${body}`}>
                      {skills.tools.map((tool) => (
                        <li key={tool} className="flex gap-3">
                          <span className={accent}>—</span>
                          <span>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-3 ${accent}`}>Spoken languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.spokenLanguages.map((lang) => (
                        <span key={lang} className={`px-3 py-1.5 rounded-full text-sm font-medium ${chip}`}>
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-7 rounded-xl border ${card} ${edge}`}>
                <h3 className="text-lg font-semibold mb-5 flex items-center gap-3">
                  <Award size={19} className={accent} />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {skills.certifications.map((cert) => (
                    <div key={cert.name} className={`p-4 rounded-lg ${darkMode ? 'bg-edge-dark/30' : 'bg-canvas-light'}`}>
                      <h4 className="font-semibold mb-1">{cert.name}</h4>
                      <p className={`text-sm ${muted}`}>
                        {cert.org} · {cert.year}
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
  );
}
