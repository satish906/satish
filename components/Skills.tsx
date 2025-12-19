
import React, { useEffect, useRef, useState } from 'react';
import { SKILLS } from '../constants.ts';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));
  const [visibleCategories, setVisibleCategories] = useState<Set<string>>(new Set());
  const observerRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Category specific GIFs (Stable Links)
  const categoryGifs: Record<string, string> = {
    'Professional': 'https://media.giphy.com/media/3o7TKv6M6uV2G/giphy.gif',
    'Technical': 'https://media.giphy.com/media/3o7TKVUn7iM8FMEU24/giphy.gif',
    'Soft Skills': 'https://media.giphy.com/media/3o7TKMGpx4S8z3J87m/giphy.gif'
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const category = entry.target.getAttribute('data-category');
            if (category) {
              setVisibleCategories((prev) => {
                if (prev.has(category)) return prev;
                const next = new Set(prev);
                next.add(category);
                return next;
              });
            }
          }
        });
      },
      { 
        threshold: 0.2, // Trigger when 20% of the card is visible
        rootMargin: '0px 0px -50px 0px' // Slight offset to ensure user sees the start of the animation
      }
    );

    const currentRefs = observerRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [categories]);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <span className="text-[10px] font-black tracking-[0.4em] text-[#DA291C] uppercase mb-4 block">Competencies</span>
            <h2 className="text-4xl md:text-6xl font-black text-white">Technical <br/> Skillset</h2>
          </div>
          <p className="text-gray-500 max-w-sm font-medium animate-in fade-in slide-in-from-right duration-1000">
            Bridging the gap between creative intuition and technical marketing execution.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 [perspective:1000px]">
          {categories.map((cat, index) => {
            const isVisible = visibleCategories.has(cat);
            return (
              <div 
                key={cat} 
                data-category={cat}
                ref={(el) => { if (el) observerRefs.current.set(cat, el); }}
                className={`glass p-10 rounded-[32px] transition-all duration-1000 group relative overflow-hidden border border-white/5 hover:border-[#DA291C]/30 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0 [transform:rotateX(0deg)_scale(1)]' 
                    : 'opacity-0 translate-y-24 [transform:rotateX(20deg)_scale(0.9)]'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms`,
                  transformOrigin: 'bottom center'
                }}
              >
                {/* GIF Background Texture */}
                <img 
                  src={categoryGifs[cat]} 
                  alt={cat} 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none"
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                     <div className={`w-12 h-12 rounded-2xl bg-[#DA291C]/10 border border-[#DA291C]/20 flex items-center justify-center transition-all duration-1000 delay-[800ms] ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                        <div className="w-2 h-2 rounded-full bg-[#DA291C] shadow-[0_0_10px_#DA291C] animate-pulse"></div>
                     </div>
                     <h3 className="text-xl font-black text-white tracking-tight uppercase">{cat}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {SKILLS.filter(s => s.category === cat).map((skill, sIdx) => (
                      <span 
                        key={skill.name} 
                        className={`px-4 py-2 bg-white/5 text-gray-300 text-xs font-bold rounded-xl border border-white/5 hover:border-[#FFC72C] hover:text-[#FFC72C] transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                        style={{ 
                          transitionDelay: isVisible ? `${(index * 200) + (sIdx * 50) + 400}ms` : '0ms'
                        }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Entry Light Sweep Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none ${isVisible ? 'translate-x-[200%] transition-transform duration-[2000ms] delay-[1000ms]' : ''}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
