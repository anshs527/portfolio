'use client';

import { useState } from 'react';
import { Moon, ArrowLeft, Download, MapPin, Phone, Mail, Github, Linkedin, Calendar, Award, Briefcase, GraduationCap, Code, Trophy, Star } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';

export default function Resume() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Star }
  ];

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
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link 
              href="/"
              className={`flex items-center space-x-2 transition-colors ${
                darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <ArrowLeft size={20} />
              <span className="font-mono text-lg font-semibold">
                <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>{'<'}</span>
                Ansh Shah
                <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>{'>'}</span>
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className={`transition-colors ${darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'}`}>
                Home
              </Link>
              <Link href="/projects" className={`transition-colors ${darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'}`}>
                Projects
              </Link>
              <Link href="/gallery" className={`transition-colors ${darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'}`}>
                Gallery
              </Link>
              <Link href="/recipes" className={`transition-colors ${darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'}`}>
                Recipes
              </Link>
              <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Resume
              </span>
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
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-6">
              My <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Resume</span>
            </h1>
            <div className={`w-24 h-1 mx-auto rounded mb-8 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
            
            {/* Contact Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              <a
                href="mailto:anshshah527@gmail.com"
                className={`p-4 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg block hover:shadow-xl transition-all`}
              >
                <Mail size={20} className={`mx-auto mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <p className="text-xs font-mono">anshshah527@gmail.com</p>
              </a>
              <div className={`p-4 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                <Phone size={20} className={`mx-auto mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <p className="text-xs font-mono">708-843-1130</p>
              </div>
              <a
                href="https://linkedin.com/in/anshs527"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg block hover:shadow-xl transition-all`}
              >
                <Linkedin size={20} className={`mx-auto mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <p className="text-xs font-mono">anshs527</p>
              </a>
              <a
                href="https://github.com/anshs527"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg block hover:shadow-xl transition-all`}
              >
                <Github size={20} className={`mx-auto mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                <p className="text-xs font-mono">anshs527</p>
              </a>
            </div>

            {/* Download Button */}
            <a
              href="/documents/Shah_Ansh_Resume.pdf"
              download="Ansh_Shah_Resume.pdf"
              className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                darkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <Download size={16} className="mr-2" />
              Download PDF
            </a>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className={`flex rounded-lg p-1 ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-md font-medium transition-all ${
                    activeTab === tab.id
                      ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white')
                      : (darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900')
                  }`}
                >
                  <tab.icon size={16} className="mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="max-w-4xl mx-auto">
            {/* Experience Section */}
            {activeTab === 'experience' && (
              <div className="space-y-8">
                <div className={`p-8 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">Software Engineer</h3>
                      <p className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>Storato.io</p>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <MapPin size={14} className="mr-1" />
                        <span className="mr-4">Champaign, IL</span>
                        <Calendar size={14} className="mr-1" />
                        <span>Jun. 2025 – Present</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode ? 'bg-green-400 text-green-900' : 'bg-green-100 text-green-800'
                    }`}>
                      Current
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Developed Python data scraping/sorting model collecting Json data for 50,000+ customer listings</li>
                    <li>• Currently using HTML, Tailwind/CSS, and Appwrite to develop multi-page customer-side frontend with user authentication system</li>
                  </ul>
                </div>

                <div className={`p-8 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">Statistics Research Assistant</h3>
                      <p className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>UIC Math Department</p>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <MapPin size={14} className="mr-1" />
                        <span className="mr-4">Chicago, IL</span>
                        <Calendar size={14} className="mr-1" />
                        <span>Apr. 2024 – Sep. 2024</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Researched applications and feasibility of mathematical and machine learning models to horse racing outcome prediction</li>
                    <li>• Utilized various international race datasets to compile jockey and horse data</li>
                    <li>• Explored potential implementations of regression and bayesian models</li>
                  </ul>
                </div>

                <div className={`p-8 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">SEO Intern</h3>
                      <p className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>Fantasy Trading Room</p>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <MapPin size={14} className="mr-1" />
                        <span className="mr-4">Champaign, IL</span>
                        <Calendar size={14} className="mr-1" />
                        <span>Jan. 2024 – May 2024</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Contributed to SEO and social media marketing efforts for a sports analytics and media startup</li>
                    <li>• Grew website viewership to 370,000+ users through optimized organic SEO</li>
                    <li>• Accumulated 2.5M+ views on Instagram through targeted marketing campaigns</li>
                  </ul>
                </div>

                <div className={`p-8 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">Financial & Technical Director</h3>
                      <p className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>Steam Dream Inc. 501(c)(3) Nonprofit</p>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <MapPin size={14} className="mr-1" />
                        <span className="mr-4">Naperville, IL</span>
                        <Calendar size={14} className="mr-1" />
                        <span>Jan. 2023 – Present</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode ? 'bg-green-400 text-green-900' : 'bg-green-100 text-green-800'
                    }`}>
                      Leadership
                    </div>
                  </div>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Managed startup finances and secured $3,900+ in initial funding for a non-profit in initial growth phase</li>
                    <li>• Planned and led events for 500+ elementary and middle schoolers</li>
                    <li>• Programmed full multi-page organization website using HTML, CSS, JavaScript, and VUE for parent communication and registration</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Education Section */}
            {activeTab === 'education' && (
              <div className="space-y-8">
                <div className={`p-8 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">Bachelor of Science</h3>
                      <p className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>Mathematics and Computer Science</p>
                      <p className="text-lg font-medium mb-2">University of Illinois: Urbana-Champaign</p>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <MapPin size={14} className="mr-1" />
                        <span className="mr-4">Champaign, IL</span>
                        <Calendar size={14} className="mr-1" />
                        <span>Expected May 2029</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-green-900 text-green-400' : 'bg-green-100 text-green-800'} mb-2`}>
                        <span className="text-2xl font-bold">4.0</span>
                        <span className="text-sm ml-1">GPA</span>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">AFROTC Cadet</p>
                    </div>
                  </div>
                </div>

                <div className={`p-8 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">High School Diploma</h3>
                      <p className={`text-lg ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-2`}>Summa Cum Laude</p>
                      <p className="text-lg font-medium mb-2">Neuqua Valley High School</p>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <MapPin size={14} className="mr-1" />
                        <span className="mr-4">Naperville, IL</span>
                        <Calendar size={14} className="mr-1" />
                        <span>Graduated May 2025</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-green-900 text-green-400' : 'bg-green-100 text-green-800'}`}>
                        <span className="text-2xl font-bold">4.5</span>
                        <span className="text-sm ml-1">GPA</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DECA Achievement */}
                <div className={`p-8 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                  <div className="flex items-center mb-4">
                    <Trophy size={24} className={`mr-3 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                    <h3 className="text-xl font-semibold">DECA Leadership</h3>
                  </div>
                  <p className="text-lg font-medium mb-2">Chapter Director of Events (May 2024 – May 2025)</p>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Coordinate event preparation & meetings for 170+ members in 60+ events</li>
                    <li>• 2x Entrepreneurship 3rd Place IL; 2x Virtual Business Challenge 1st Place Midwest</li>
                    <li>• 8th, 11th Place International 2024, 2025</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Projects Section */}
            {activeTab === 'projects' && (
              <div className="space-y-8">
                <div className={`p-8 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Personal Portfolio</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {['JavaScript', 'HTML/CSS', 'Next.js', 'React', 'Tailwind CSS', 'Vercel'].map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400">2025</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Building a responsive personal portfolio website featuring dark/light mode toggle, smooth scrolling navigation, and modern UI animations with AI-assisted programming to aesthetically showcase projects, experience and more.
                  </p>
                </div>

                <div className={`p-8 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">Sous.io</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {['Python', 'JavaScript', 'HTML/CSS', 'Next.js'].map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-slate-500 dark:text-slate-400">2025</span>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium mt-1 ${
                        darkMode ? 'bg-blue-400 text-blue-900' : 'bg-blue-100 text-blue-800'
                      }`}>
                        Group Project
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">
                    Developing AI-wrapper Next.js web app for recipe discovery based on available ingredients. Implemented dynamic ingredient search, responsive design, and RESTful API architecture for user-inputted data collection.
                  </p>
                </div>
              </div>
            )}

            {/* Skills Section */}
            {activeTab === 'skills' && (
              <div className="space-y-8">
                <div className={`p-8 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <Code size={24} className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                    Programming Languages
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Mathematica', 'LaTeX'].map((skill) => (
                      <div
                        key={skill}
                        className={`p-4 rounded-lg text-center transition-all hover:scale-105 ${
                          darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-slate-50 hover:bg-slate-100'
                        }`}
                      >
                        <span className="font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`p-8 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                  <h3 className="text-2xl font-semibold mb-6">Other Skills</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className={`font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Technical</h4>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        <li>• Calculations/Computations</li>
                        <li>• Analytics</li>
                        <li>• SEO</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Business & Leadership</h4>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        <li>• Business Development</li>
                        <li>• Financial Management</li>
                        <li>• Nonprofit Startup</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className={`font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Languages</h4>
                    <div className="flex flex-wrap gap-3">
                      {['English (Native)', 'Gujarati', 'Hindi'].map((lang) => (
                        <span
                          key={lang}
                          className={`px-4 py-2 rounded-full text-sm font-medium ${
                            darkMode ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certifications & Awards */}
                <div className={`p-8 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <Award size={24} className={`mr-3 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                    Certifications & Awards
                  </h3>
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-slate-50'}`}>
                      <h4 className="font-semibold mb-1">Supervised Machine Learning: Regression and Classification</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Stanford University - 2025</p>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-slate-50'}`}>
                      <h4 className="font-semibold mb-1">American Computer Science League</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Senior Division Finalist 2024</p>
                    </div>
                    <div className={`p-4 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-slate-50'}`}>
                      <h4 className="font-semibold mb-1">Microsoft Office Specialist: Excel Associate 2025</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">2025</p>
                    </div>
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