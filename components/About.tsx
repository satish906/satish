
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-3 py-1 mb-6 border-l-2 border-[#FFC72C] bg-white/5">
              <span className="text-[10px] font-bold tracking-widest text-[#FFC72C] uppercase">Background</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              Operations Meets <br/>
              <span className="text-[#DA291C]">Creative</span> Strategy
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-medium">
              <p>
                My professional core was forged at <strong className="text-white">McDonald’s India</strong>, where I mastered the art of brand consistency and high-pressure operational efficiency. 
              </p>
              <p>
                Today, I translate those enterprise standards into the digital world as a <strong className="text-[#FFC72C]">Content Writer & Social Media Strategist</strong>, helping brands find their voice in a crowded digital landscape.
              </p>
            </div>
            
            <div className="mt-12 p-1 bg-gradient-to-r from-[#DA291C] to-transparent inline-block rounded-2xl">
              <a 
                href="https://drive.google.com/file/d/1S1anadpnzu_RGVdTLtYk4yVKmjTRpHvw/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#050505] px-8 py-4 rounded-[calc(1rem-1px)] flex items-center gap-3 text-white font-bold hover:bg-[#DA291C] transition-all group"
              >
                <svg className="w-5 h-5 text-[#DA291C] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                ACCESS RESUME.PDF
              </a>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-[#DA291C]/20 blur-[100px] rounded-full"></div>
            <div className="relative z-10 glass p-3 rounded-[32px] neon-border-yellow rotate-2 hover:rotate-0 transition-transform duration-700 overflow-hidden">
              {/* Internal GIF Layer */}
              <img 
                src="https://media.giphy.com/media/l41lTjJ8Z1z7G/giphy.gif" 
                className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
                alt="Data Flow"
              />
              <div className="relative z-20 aspect-square rounded-[24px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                 <img 
                  src="https://picsum.photos/seed/tech/800/800" 
                  alt="Satish Chauhan Work" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
