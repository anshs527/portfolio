'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Instagram, Lightbulb, Github, Linkedin, Mail, Twitter, ChevronDown, Code, User, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from './contexts/ThemeContext'; // or './contexts/ThemeContext' for home page
import Image from 'next/image';

export default function Home() {

// Inside your component:
const { darkMode, toggleDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'socials'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

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
            <div className="font-mono text-lg font-semibold">
              <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>{'<'}</span>
              John Shah
              <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>{'>'}</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`transition-colors ${
                  activeSection === 'home'
                    ? (darkMode ? 'text-blue-400' : 'text-blue-600')
                    : (darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600')
                }`}
              >
                Home
              </button>
              <Link
                href="/projects"
                className={`transition-colors ${
                  darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Projects
              </Link>
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

            <div className="md:hidden flex items-center space-x-4">
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

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className={`w-32 h-32 mx-auto mb-8 rounded-full ${
              darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-200 border-slate-300'
            } border-4 flex items-center justify-center overflow-hidden relative`}>
              <Image
                src="/images/pfp.jpg"
                alt="Ansh Shah"
                width={128}
                height={128}
                className="w-full h-full object-cover rounded-full scale-[1.2]"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light mb-6">
            Hi, I&apos;m <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Ansh</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className={darkMode ? 'text-slate-200' : 'text-slate-700'}>Founding Engineer at Storato.io, fearless homecook, and a passionate coder who loves building impactful software solutions.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('about')}
              className={`px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                darkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              About Me
            </button>
            <button 
              onClick={() => scrollToSection('socials')}
              className={`px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 border-2 ${
                darkMode
                  ? 'border-slate-600 text-slate-300 hover:bg-slate-800'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
            >
              Get In Touch
            </button>
          </div>

          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'text-slate-400 hover:text-blue-400' : 'text-slate-500 hover:text-blue-600'
              }`}
            >
              <ChevronDown size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              About <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Me</span>
            </h2>
            <div className={`w-24 h-1 mx-auto rounded ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                <span className={darkMode ? 'text-slate-200' : 'text-slate-700'}>Hi, I'm Ansh and I'm a Freshman at UIUC studying Math and Computer Science. I'm really interested in finding ways to use AI to improve quality of life and to educate people. Right now I'm working on Sous, an AI app that allows users to use AI to find recipes easily</span>
              </p>
              
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                <span className={darkMode ? 'text-slate-200' : 'text-slate-700'}>When I&apos;m not coding, you&apos;ll find me experimenting with new recipes in the kitchen, capturing moments through photography, or contributing to open-source projects. I believe in continuous learning and sharing knowledge with the developer community.</span>
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  { name: 'Python', light: 'bg-indigo-200 text-indigo-800 border-indigo-300', dark: 'bg-indigo-400 text-indigo-900 border-indigo-500' },
                  { name: 'Java', light: 'bg-teal-200 text-teal-800 border-teal-300', dark: 'bg-teal-400 text-teal-900 border-teal-500' },
                  { name: 'HTML', light: 'bg-cyan-200 text-cyan-800 border-cyan-300', dark: 'bg-cyan-400 text-cyan-900 border-cyan-500' },
                  { name: 'CSS/Tailwind', light: 'bg-orange-200 text-orange-800 border-orange-300', dark: 'bg-orange-400 text-orange-900 border-orange-500' },
                  { name: 'JavaScript', light: 'bg-yellow-200 text-yellow-800 border-yellow-300', dark: 'bg-yellow-400 text-yellow-900 border-yellow-500' },
                  { name: 'TypeScript', light: 'bg-blue-200 text-blue-800 border-blue-300', dark: 'bg-blue-400 text-blue-900 border-blue-500' },
                  { name: 'React.js', light: 'bg-cyan-200 text-cyan-800 border-cyan-300', dark: 'bg-cyan-400 text-cyan-900 border-cyan-500' },
                  { name: 'Node.js', light: 'bg-green-200 text-green-800 border-green-300', dark: 'bg-green-400 text-green-900 border-green-500' }
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium border ${
                      darkMode ? tech.dark : tech.light
                    }`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className={`p-8 rounded-2xl ${darkMode ? 'bg-slate-800' : 'bg-white'} shadow-lg`}>
                <div className="flex items-center mb-4">
                  <Code size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />
                  <h3 className="text-xl font-semibold ml-3">What I Do</h3>
                </div>
                <ul className="space-y-3">
                  <li className={darkMode ? 'text-slate-200' : 'text-slate-700'}>• Full-stack web development</li>
                  <li className={darkMode ? 'text-slate-200' : 'text-slate-700'}>• Scrapers and Data Analysis</li>
                  <li className={darkMode ? 'text-slate-200' : 'text-slate-700'}>• Financial Management</li>
                  <li className={darkMode ? 'text-slate-200' : 'text-slate-700'}>• Team leadership & mentoring</li>
                </ul>
              </div>

              <div className="text-center">
                <button
                  onClick={() => scrollToSection('socials')}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                    darkMode
                      ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'
                  }`}
                >
                  Let&apos;s Connect
                  <ChevronDown size={16} className="ml-2 transform rotate-[-90deg]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section id="socials" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Let&apos;s <span className={`font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Connect</span>
          </h2>
          <div className={`w-24 h-1 mx-auto rounded mb-12 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities, collaborations, or just having a chat about technology and innovation.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[ 
              { icon: Github, label: 'GitHub', handle: '@anshs527', color: 'hover:text-gray-900 dark:hover:text-white', url: 'https://github.com/anshs527' },
              { icon: Linkedin, label: 'LinkedIn', handle: '/in/anshs527', color: 'hover:text-blue-600', url: 'https://linkedin.com/in/anshs527' },
              { icon: Instagram, label: 'Instagram', handle: '@ansh.s527', color: 'hover:text-pink-400', url: 'https://instagram.com/ansh.s527' },
              { icon: Mail, label: 'Email', handle:'anshks2@illinois.edu', color: 'hover:text-red-500', url: 'mailto:anshks2@illinois.edu' }
            ].map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-8 rounded-2xl transition-all transform hover:scale-105 ${
                  darkMode ? 'bg-slate-800 hover:bg-slate-750' : 'bg-white hover:bg-slate-50'
                } shadow-lg hover:shadow-xl`}
              >
                <social.icon 
                  size={48} 
                  className={`mx-auto mb-4 transition-colors ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  } ${social.color}`}
                />
                <h3 className="font-semibold text-lg mb-2">{social.label}</h3>
                <p className={`text-sm font-mono ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {social.handle}
                </p>
              </a>
            ))}
          </div>

          
        </div>
      </section>
    </div>
  );
}