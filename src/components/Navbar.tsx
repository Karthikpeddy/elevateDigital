import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-2xl font-bold text-white">
            Elevate<span className="text-indigo-400">Digital</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Work', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 px-4 py-6">
            {['Services', 'Work', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-colors mt-4">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}