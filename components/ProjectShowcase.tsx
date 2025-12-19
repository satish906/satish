
import React from 'react';

interface ProjectShowcaseProps {
  onBack: () => void;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onBack }) => {
  const images = [
    "https://i.postimg.cc/fLTW1HxV/1766131436377-019b35a2-0a62-7839-b8cd-7b174b7db947.png",
    "https://i.postimg.cc/Pxrf06mJ/1766131599206-019b35a4-ae10-7e85-87bb-0de9f4d758ca.png",
    "https://i.postimg.cc/9MFXsxGw/1766131824917-019b35a8-45ff-77a6-b751-c2d5ec01731a.png",
    "https://i.postimg.cc/GtfpFkT0/482380419-18058768601504162-8524908485870043986-n.jpg",
    "https://i.postimg.cc/xjpqVSxw/IMG-1937.jpg",
    "https://i.postimg.cc/3RJrzLgh/IMG-1938.jpg",
    "https://i.postimg.cc/Y9q2TX1Q/IMG-1942.jpg",
    "https://i.postimg.cc/bJCYPQT0/IMG-1945.jpg",
    "https://i.postimg.cc/pTGVvDZB/IMG-1955.jpg",
    "https://i.postimg.cc/nzRVxvkS/IMG-1956.jpg",
    "https://i.postimg.cc/rmnyTSJP/IMG-2202.jpg",
    "https://i.postimg.cc/Gt4LmH7Q/IMG-2255.jpg",
    "https://i.postimg.cc/sxMjgv6T/IMG-2321.jpg",
    "https://i.postimg.cc/7h5HZfsj/IMG-2324.jpg",
    "https://i.postimg.cc/j2DxSLgG/IMG-2325.jpg",
    "https://i.postimg.cc/brZywsVj/IMG-2432.jpg",
    "https://i.postimg.cc/1Xb9nsbp/IMG-2544.png",
    "https://i.postimg.cc/j2BswtBn/photo-2025-12-19-13-44-55.jpg",
    "https://i.postimg.cc/d3gqkwgr/photo-2025-12-19-13-45-03-(1).jpg"
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden animate-in fade-in duration-700">
      {/* Background Decor */}
      <div className="fixed inset-0 bg-grid pointer-events-none opacity-20"></div>
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[#DA291C] text-[10px] font-black tracking-[0.4em] uppercase">Digital Archive</span>
            <h1 className="text-2xl font-black tracking-tighter uppercase">Project <span className="text-[#DA291C]">Showcase</span></h1>
          </div>
          <button 
            onClick={onBack}
            className="px-8 py-3 bg-white text-black text-xs font-black rounded-xl hover:bg-[#DA291C] hover:text-white transition-all flex items-center gap-2 group shadow-2xl"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            BACK TO HOME
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20 relative">
        {/* Intro Text */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">THE <br/> <span className="text-[#DA291C]">VISUAL</span> VAULT</h2>
          <p className="text-gray-500 text-lg font-medium leading-relaxed">
            A comprehensive look at digital marketing assets, brand identity concepts, and operational excellence captured through my lens.
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-3xl break-inside-avoid shadow-2xl border border-white/5 bg-white/5 animate-in slide-in-from-bottom-8 duration-700 fill-mode-both hover:shadow-[0_0_30px_rgba(218,41,28,0.4),0_0_50px_rgba(255,199,44,0.2)] transition-all duration-500"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img 
                src={src} 
                alt={`Project ${index + 1}`} 
                className="w-full h-auto object-cover grayscale saturate-50 contrast-100 group-hover:grayscale-0 group-hover:saturate-[1.8] group-hover:contrast-[1.15] transition-all duration-700 scale-100 group-hover:scale-[1.03]"
                loading="lazy"
              />
              
              {/* Technical Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-black text-[#DA291C] tracking-[0.3em] uppercase block mb-2">Asset #0{index + 1}</span>
                  <div className="h-[2px] w-12 bg-[#DA291C] mb-4"></div>
                  <p className="text-xs font-bold text-gray-200 uppercase tracking-widest">Metadata: Encrypted Visual Data</p>
                </div>
              </div>
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
          ))}
        </div>
      </main>

      {/* Showcase Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
         <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[10px] font-black text-gray-500 hover:text-white tracking-[0.5em] uppercase transition-all"
          >
            Scroll to Top
          </button>
      </footer>
    </div>
  );
};

export default ProjectShowcase;
