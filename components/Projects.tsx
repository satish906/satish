
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants.ts';
import { Project } from '../types.ts';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
  }, [selectedProject]);

  return (
    <section id="projects" className="py-32 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Work <span className="text-[#DA291C] neon-glow-red">Vault</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            Visual proof of multi-channel marketing campaigns and hospitality operations excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="group glass rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer flex flex-col hover:neon-border-red relative"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                {/* GIF Glitch Overlay (Stable Link) */}
                <img 
                  src="https://media.giphy.com/media/3o7TKVUn7iM8FMEU24/giphy.gif" 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-300"
                  alt="Scanlines"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-2 bg-white text-black text-xs font-black rounded-full tracking-widest">PREVIEW</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-[#FFC72C] text-[8px] font-black rounded-lg uppercase tracking-[0.2em] border border-[#FFC72C]/30">
                    {project.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col relative z-10">
                <h3 className="text-lg font-black text-white mb-2 group-hover:text-[#DA291C] transition-colors line-clamp-1 uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-xs font-medium leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Project Lightbox Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/98 backdrop-blur-2xl animate-in fade-in duration-500"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="relative max-w-5xl w-full max-h-[90vh] glass rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500 flex flex-col border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 bg-white/5 border-b border-white/5 flex justify-between items-center">
                <div>
                   <span className="text-[9px] font-black text-[#DA291C] uppercase tracking-widest mb-1 block">Project Review</span>
                   <h4 className="font-black text-white text-2xl tracking-tighter uppercase">{selectedProject.title}</h4>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 bg-white/5 hover:bg-[#DA291C] text-white rounded-2xl flex items-center justify-center transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-grow overflow-auto p-4 bg-black/40 flex items-center justify-center relative">
                 <img 
                    src="https://media.giphy.com/media/3o7TKMGpx4S8z3J87m/giphy.gif" 
                    className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
                    alt="Modal Background"
                  />
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="relative z-10 max-w-full max-h-[60vh] object-contain rounded-xl shadow-2xl border border-white/5"
                />
              </div>
              <div className="p-8 bg-black">
                 <p className="text-gray-400 text-lg leading-relaxed">{selectedProject.description}</p>
                 <div className="mt-8 flex gap-4">
                    <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold text-gray-500">Case Study #0{Math.floor(Math.random()*90)+10}</span>
                    <span className="px-4 py-2 bg-[#DA291C]/10 border border-[#DA291C]/30 rounded-xl text-xs font-bold text-[#DA291C]">{selectedProject.tag}</span>
                 </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
