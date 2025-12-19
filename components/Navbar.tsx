
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onShowcaseClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onShowcaseClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects', customAction: onShowcaseClick },
    { name: 'Certs', id: 'certs' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (link.customAction) {
      link.customAction();
      return;
    }

    const element = document.getElementById(link.id);
    if (element) {
      const offset = 100;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="text-2xl font-black tracking-tighter group flex items-center"
        >
          <span className="text-white group-hover:text-[#DA291C] transition-colors">Satish</span>
          <span className="text-[#DA291C] group-hover:neon-glow-red transition-all">.Dev</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link)}
              className="text-[11px] font-bold tracking-[0.2em] text-gray-400 hover:text-white uppercase transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#DA291C] transition-all group-hover:w-full group-hover:shadow-[0_0_8px_#DA291C]"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-white text-black text-xs font-bold rounded-full hover:bg-[#DA291C] hover:text-white transition-all shadow-xl"
          >
            LET'S CHAT
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-4 h-0.5 bg-[#DA291C] transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100 py-10' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-8 px-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link)}
              className="text-2xl font-black text-white hover:text-[#DA291C] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
