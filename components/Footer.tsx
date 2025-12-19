
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start">
          <a href="#home" className="text-2xl font-black text-white mb-4 tracking-tighter">
            Satish<span className="text-[#DA291C]">.</span>
          </a>
          <p className="text-gray-600 text-xs font-black uppercase tracking-[0.2em]">
            Digital Assets Portfolio © {new Date().getFullYear()}
          </p>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-500 hover:text-[#DA291C] text-[10px] font-black uppercase tracking-widest transition-all">Instagram</a>
          <a href="#" className="text-gray-500 hover:text-[#FFC72C] text-[10px] font-black uppercase tracking-widest transition-all">LinkedIn</a>
          <a href="#" className="text-gray-500 hover:text-white text-[10px] font-black uppercase tracking-widest transition-all">Dribbble</a>
        </div>
        
        <div className="text-center md:text-right">
           <span className="text-[9px] font-black text-gray-700 uppercase tracking-[0.5em] block mb-2">Build Version</span>
           <span className="text-xs font-mono text-gray-500">v2.5.0-NEON</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
