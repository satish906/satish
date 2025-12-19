
import React from 'react';

interface HeroProps {
  onShowcaseClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShowcaseClick }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background GIF Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.12] pointer-events-none mix-blend-screen scale-110">
        <img 
          src="https://media.giphy.com/media/3o7TKMGpx4S8z3J87m/giphy.gif" 
          alt="Digital Connectivity & Growth" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Tech Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-white/5 rounded-full animate-float opacity-20"></div>
      <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-[#DA291C]/10 rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center space-x-3 px-4 py-2 mb-8 bg-white/5 backdrop-blur-md rounded-full border border-white/10 animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DA291C] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DA291C]"></span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.3em] text-white uppercase">AVAILABLE FOR PROJECTS</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase">
          DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DA291C] to-[#FFC72C] neon-glow-red">MARKETING</span> <br/> 
          & CONTENT GEN
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Merging operational excellence with creative storytelling. <br/>
          Building brands through data, design, and digital impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-5 bg-[#DA291C] text-white font-black rounded-2xl shadow-[0_0_20px_rgba(218,41,28,0.4)] hover:shadow-[0_0_35px_rgba(218,41,28,0.6)] hover:scale-105 transition-all"
          >
            START A PROJECT
          </a>
          <button
            onClick={onShowcaseClick}
            className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white font-black rounded-2xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-2 group"
          >
            SEE MY WORK
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        
        <div className="mt-20 flex justify-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all">
          <span className="text-xs font-bold tracking-widest uppercase">Strategy</span>
          <span className="text-xs font-bold tracking-widest uppercase">Content</span>
          <span className="text-xs font-bold tracking-widest uppercase">Growth</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
