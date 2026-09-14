'use client';

import { ChevronDown, Code, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import Image from 'next/image';
import Nav from './components/Nav';
import { useTheme } from './contexts/ThemeContext';
import { profile, socials } from '@/lib/data/profile';

const socialIcons = { GitHub: Github, LinkedIn: Linkedin, Instagram: Instagram, Email: Mail };

export default function Home() {
  const { darkMode } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ink = darkMode ? 'text-ink-dark' : 'text-ink-light';
  const faint = darkMode ? 'text-faint-dark' : 'text-faint-light';
  const accent = darkMode ? 'text-accent-dark' : 'text-accent-light';
  const surface = darkMode ? 'bg-surface-dark' : 'bg-surface-light';
  const edge = darkMode ? 'border-edge-dark' : 'border-edge-light';

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-canvas-dark text-ink-dark' : 'bg-canvas-light text-ink-light'
      }`}
    >
      <Nav current="home" onHomeClick={() => scrollToSection('home')} />

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div
              className={`w-32 h-32 mx-auto mb-8 rounded-full border-4 flex items-center justify-center overflow-hidden relative ${surface} ${edge}`}
            >
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
            Hi, I&apos;m <span className={`font-semibold ${accent}`}>Ansh</span>
          </h1>

          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed ${ink}`}>{profile.heroTagline}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('about')}
              className={`px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                darkMode
                  ? 'bg-accent-dark hover:bg-accent-hover-dark text-accent-ink-dark'
                  : 'bg-accent-light hover:bg-accent-hover-light text-accent-ink-light'
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection('socials')}
              className={`px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 border-2 ${
                darkMode
                  ? 'border-edge-dark text-faint-dark hover:bg-surface-dark'
                  : 'border-edge-light text-faint-light hover:bg-surface-light'
              }`}
            >
              Get In Touch
            </button>
          </div>

          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('about')}
              className={`p-2 rounded-full transition-colors ${
                darkMode ? 'text-faint-dark hover:text-accent-dark' : 'text-faint-light hover:text-accent-light'
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
              About <span className={`font-semibold ${accent}`}>Me</span>
            </h2>
            <div className={`w-24 h-1 mx-auto rounded ${darkMode ? 'bg-accent-dark' : 'bg-accent-light'}`}></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              {profile.bio.map((paragraph, i) => (
                <p key={i} className={`text-lg leading-relaxed ${ink}`}>
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-wrap gap-3 mt-8">
                {profile.techTags.map((tech) => (
                  <span
                    key={tech}
                    className={`px-4 py-2 rounded-full text-sm font-mono border ${surface} ${ink} ${edge}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className={`p-8 rounded-2xl shadow-lg ${surface}`}>
                <div className="flex items-center mb-4">
                  <Code size={24} className={accent} />
                  <h3 className="text-xl font-semibold ml-3">What I Do</h3>
                </div>
                <ul className="space-y-3">
                  {profile.whatIDo.map((item) => (
                    <li key={item} className={ink}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <button
                  onClick={() => scrollToSection('socials')}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 border ${surface} ${faint} ${edge}`}
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
            Let&apos;s <span className={`font-semibold ${accent}`}>Connect</span>
          </h2>
          <div className={`w-24 h-1 mx-auto rounded mb-12 ${darkMode ? 'bg-accent-dark' : 'bg-accent-light'}`}></div>

          <p className={`text-xl mb-16 max-w-2xl mx-auto ${faint}`}>
            I&apos;m always interested in new opportunities, collaborations, or just having a chat about technology
            and innovation.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {socials.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons];
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-8 rounded-2xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl ${surface}`}
                >
                  <Icon
                    size={40}
                    className={`mx-auto mb-4 transition-colors ${
                      darkMode ? 'text-faint-dark group-hover:text-accent-dark' : 'text-faint-light group-hover:text-accent-light'
                    }`}
                  />
                  <h3 className="font-semibold text-lg mb-2">{social.label}</h3>
                  <p className={`text-sm font-mono ${faint}`}>{social.handle}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
