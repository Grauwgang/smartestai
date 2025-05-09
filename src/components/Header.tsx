import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/50 backdrop-blur-xl py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://raw.githubusercontent.com/yourusername/smartest-assets/main/logo-3d.png" 
            alt="Logo" 
            className="h-8 w-8"
          />
        </div>
        
        <nav className="hidden md:flex items-center">
          {['about', 'how it works', 'features', 'roadmap', 'leaderboard', 'faq'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.replace(' ', '-'))}
              className="text-slate-300 hover:text-white transition-colors duration-200 text-[13px] font-medium px-4"
            >
              {item}
            </button>
          ))}
          <button className="ml-6 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg text-[13px] font-medium transition-all duration-200">
            Launch App
          </button>
        </nav>
        
        <div className="md:hidden">
          <button className="text-white/80 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;