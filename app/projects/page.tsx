'use client';

import { Moon, ArrowLeft, Construction } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';

export default function UnderConstruction() {
  const { darkMode, toggleDarkMode } = useTheme();

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
              className={`flex items-center space-x-2 transition-colors ${
                darkMode ? 'text-slate-300 hover:text-blue-400' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              <ArrowLeft size={20} />
              <span className="font-mono text-lg font-semibold">
                <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>{'<'}</span>
                Back to Home
                <span className={darkMode ? 'text-blue-400' : 'text-blue-600'}>{'>'}</span>
              </span>
            </Link>
            
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

      {/* Main Content */}
      <div className="pt-24 px-6 pb-20 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          {/* Construction Icon */}
          <div className={`w-24 h-24 mx-auto mb-8 rounded-full ${
            darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-200 border-slate-300'
          } border-4 flex items-center justify-center`}>
            <Construction 
              size={40} 
              className={`${
                darkMode ? 'text-yellow-400' : 'text-yellow-600'
              } animate-pulse`} 
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-light mb-6">
            Under <span className={`font-semibold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>Construction</span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            This page is still under construction. Sorry about the inconvenience, but here&apos;s a picture of Jimbo the bear!
          </p>

          {/* Jimbo's Picture */}
          <div className={`w-80 h-80 mx-auto mb-8 rounded-2xl ${
            darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-200 border-slate-300'
          } border-4 flex items-center justify-center overflow-hidden relative shadow-lg`}>
            {/* Replace with your actual image path */}
            <Image
              src="/images/jimbo.jpg" // Update this path to where you store Jimbo's image
              alt="Jimbo the bear"
              width={320}
              height={320}
              className="w-full h-full object-cover rounded-xl"
              priority
            />
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Check back soon for updates, or explore my other pages!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className={`px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                  darkMode
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Back to Home
              </Link>
              
            </div>
          </div>

          {/* Fun fact about Jimbo */}
          <div className={`mt-12 p-6 rounded-xl ${
            darkMode ? 'bg-slate-800' : 'bg-white'
          } shadow-lg max-w-md mx-auto`}>
            <p className="text-sm text-slate-600 dark:text-slate-400 italic">
              &quot;Jimbo keeps me company during late-night coding sessions and reminds me to take breaks!&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}