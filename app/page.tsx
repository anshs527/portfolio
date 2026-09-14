'use client';

import { Code, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Radio, ChartNoAxesCombined } from 'lucide-react';
import { projects } from '@/lib/data/projects';
import Nav from './components/Nav';
import Contours from './components/Contours';
import { useTheme } from './contexts/ThemeContext';
import { profile, socials } from '@/lib/data/profile';

const socialIcons = { GitHub: Github, LinkedIn: Linkedin, Instagram: Instagram, Email: Mail };

export default function Home() {
  const { darkMode } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  };

  const ink = darkMode ? 'text-ink-dark' : 'text-ink-light';
  const faint = darkMode ? 'text-faint-dark' : 'text-faint-light';
  const accent = darkMode ? 'text-accent-dark' : 'text-accent-light';
  const clay = darkMode ? 'text-clay-dark' : 'text-clay-light';
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
      <section id="home" className="relative min-h-[80svh] flex items-center px-6 pt-32 pb-20 overflow-hidden">
        <Contours className={`absolute inset-0 w-full h-full ${accent} pointer-events-none`} />

        <div className="relative max-w-4xl mx-auto w-full">
          <div className="flex items-start gap-6 mb-8">
            <div
              className={`shrink-0 w-16 h-16 border overflow-hidden relative ${surface} ${edge}`}
              style={{ borderRadius: '42% 58% 65% 35% / 45% 40% 60% 55%' }}
            >
              <Image
                src="/images/pfp.jpg"
                alt="Ansh Shah"
                width={64}
                height={64}
                className="w-full h-full object-cover scale-[1.2]"
                priority
              />
            </div>
            <div>
              <p className={`font-note text-2xl -rotate-1 mb-1 ${clay}`}>Curiosity, put to work</p>
              <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
                Ansh Shah
              </h1>
            </div>
          </div>

          <p className={`font-mono text-sm mb-6 ${faint}`}>{profile.currentTitle}</p>

          <p className={`text-xl md:text-2xl max-w-2xl leading-relaxed mb-10 ${ink}`}>{profile.heroTagline}</p>

          <div className="flex flex-wrap gap-3 mb-8"><Link href="/projects" className="pill-link primary">Explore my work <ArrowUpRight size={18} /></Link><Link href="/resume" className="pill-link">View résumé</Link></div>
          <div className="flex flex-wrap gap-3">
            {profile.techTags.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1.5 rounded-md text-sm font-mono border ${surface} ${faint} ${edge}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16" aria-labelledby="selected-work">
        <div className="max-w-4xl mx-auto">
          <p className={`font-note ${accent}`}>Selected work</p>
          <h2 id="selected-work" className="text-3xl md:text-4xl mb-8">From a question to a working system.</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {projects.slice(0, 2).map((project, index) => {
              const Icon = index === 0 ? Radio : ChartNoAxesCombined;
              return <Link key={project.slug} href={`/projects/${project.slug}`} className={`organic-hover p-7 rounded-xl border ${surface} ${edge}`}>
                <Icon size={28} className={`mb-8 ${accent}`} aria-hidden="true" />
                <p className={`text-sm mb-2 ${faint}`}>{index === 0 ? 'Signal processing · C++ · ML' : 'Probability · Data engineering'}</p>
                <h3 className="text-2xl font-bold mb-3">{index === 0 ? 'Finding meaning in the noise.' : 'A prediction is only half the bet.'}</h3>
                <p className={`leading-relaxed mb-6 ${faint}`}>{index === 0 ? 'Classifying radio signals, then measuring every microsecond of inference.' : 'Exploring the gap between predicting player performance and finding a mathematical edge.'}</p>
                <span className={`inline-flex items-center gap-2 font-bold ${accent}`}>Explore the project <ArrowUpRight size={18} /></span>
              </Link>;
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <p className={`font-note text-2xl -rotate-1 mb-1 ${clay}`}>a bit about me</p>
          <h2 className="font-display text-3xl md:text-4xl mb-12">More than just a résumé</h2>

          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-start">
            <div className="space-y-6">
              {profile.bio.map((paragraph, i) => (
                <p key={i} className={`text-lg leading-relaxed ${ink}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className={`p-8 rounded-xl border ${surface} ${edge}`}>
              <div className="flex items-center mb-4">
                <Code size={20} className={accent} />
                <h3 className="text-lg font-semibold ml-3">What I do</h3>
              </div>
              <ul className={`space-y-3 ${ink}`}>
                {profile.whatIDo.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className={accent}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section id="socials" className="flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <p className={`font-note text-2xl -rotate-1 mb-1 ${clay}`}>say hi</p>
          <h2 className="font-display text-3xl md:text-4xl mb-6">Let&apos;s connect</h2>
          <p className={`text-lg mb-12 max-w-xl ${faint}`}>
            Always interested in new opportunities, collaborations, or a chat about technology and innovation.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {socials.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons];
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`organic-hover group flex items-center gap-4 p-5 rounded-xl border ${surface} ${edge} ${
                    darkMode ? 'hover:border-accent-dark' : 'hover:border-accent-light'
                  }`}
                >
                  <Icon
                    size={22}
                    className={`shrink-0 transition-colors ${
                      darkMode ? 'text-faint-dark group-hover:text-accent-dark' : 'text-faint-light group-hover:text-accent-light'
                    }`}
                  />
                  <div>
                    <h3 className="font-medium">{social.label}</h3>
                    <p className={`text-sm font-mono ${faint}`}>{social.handle}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
