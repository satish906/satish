
import React, { useState, useEffect } from 'react';
import { CERTIFICATIONS } from '../constants.ts';
import { Certification } from '../types.ts';

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedCert ? 'hidden' : 'unset';
  }, [selectedCert]);

  return (
    <section id="certs" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[10px] font-black tracking-[0.5em] text-[#FFC72C] uppercase mb-4 block">Credentials</span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Verified <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC72C] to-white">Skill Assets</span></h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={index} 
              className="group glass rounded-[40px] overflow-hidden transition-all duration-700 hover:neon-border-yellow"
            >
              <div 
                className="relative aspect-video overflow-hidden bg-white/5 p-6 cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden border border-white/5 relative group-hover:scale-[1.02] transition-transform duration-700">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                       (e.target as HTMLImageElement).src = `https://placehold.co/800x600/000/fff?text=${encodeURIComponent(cert.name)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <div className="bg-white text-black font-black px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      VIEW FULL ASSET
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-10 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-1 bg-white/5 text-gray-500 text-[9px] font-black rounded-lg uppercase tracking-widest border border-white/5">
                    {cert.issuer}
                  </span>
                  <span className="text-[10px] font-bold text-gray-600 uppercase">
                    ID: {Math.random().toString(36).substring(7).toUpperCase()}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-6 leading-tight group-hover:text-[#FFC72C] transition-colors uppercase tracking-tight">
                  {cert.name}
                </h3>
                
                <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                       <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                       </svg>
                    </div>
                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">VERIFIED</span>
                  </div>
                  
                  {cert.verifyUrl && cert.verifyUrl !== "#" && (
                    <a 
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-black text-[#FFC72C] hover:neon-glow-red flex items-center tracking-widest uppercase bg-[#FFC72C]/10 px-4 py-2 rounded-full border border-[#FFC72C]/20"
                    >
                      LINK
                      <svg className="w-3 h-3 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Full Image Modal */}
        {selectedCert && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/98 backdrop-blur-2xl animate-in fade-in duration-500"
            onClick={() => setSelectedCert(null)}
          >
            <div 
              className="relative max-w-5xl w-full max-h-[90vh] glass rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 bg-black/50 border-b border-white/5 flex justify-between items-center">
                <h4 className="font-black text-white tracking-tighter text-xl">{selectedCert.name}</h4>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 text-white rounded-xl flex items-center justify-center transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8 overflow-auto bg-black flex items-center justify-center">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.name} 
                  className="max-w-full h-auto rounded-xl shadow-2xl border border-white/10"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
