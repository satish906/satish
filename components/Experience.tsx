
import React from 'react';
import { EXPERIENCES } from '../constants.ts';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-black/40 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">The Journey</h2>
          <p className="text-[#DA291C] font-bold tracking-[0.2em] uppercase text-xs">Professional Timeline</p>
        </div>
        
        <div className="relative space-y-16">
          <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#DA291C] via-[#FFC72C] to-transparent opacity-30"></div>
          
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative pl-12 group">
              <div className="absolute left-[-12px] top-[-5px] w-12 h-12 z-10">
                <img 
                  src="https://media.giphy.com/media/3o7TKpx2xWk4pE9vYI/giphy.gif" 
                  className="w-full h-full object-contain opacity-40 group-hover:opacity-100 transition-opacity"
                  alt="Pulse"
                />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-black text-white group-hover:text-[#DA291C] transition-colors">{exp.role}</h3>
                  <p className="text-[#FFC72C] font-bold text-sm tracking-wide mt-1 uppercase">{exp.company}</p>
                </div>
                <span className="text-[10px] font-black text-gray-500 bg-white/5 px-3 py-1 rounded-md mt-3 md:mt-0 border border-white/10 uppercase tracking-widest">
                  {exp.duration}
                </span>
              </div>
              
              <ul className="space-y-4">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-gray-400 group-hover:text-gray-300 transition-colors">
                    <span className="text-[#DA291C] mr-3 mt-1 font-bold">»</span>
                    <span className="text-sm font-medium leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
