
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("INITIATING UPLOAD....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "0fe799d2-a227-452e-8e0a-c3cfc668cb9a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setResult("TRANSMISSION SUCCESSFUL.");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("TRANSMISSION FAILED. RETRY.");
      }
    } catch (error) {
      setResult("NETWORK TIMEOUT.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass rounded-[48px] overflow-hidden shadow-2xl flex flex-col lg:flex-row border-white/5 relative">
          
          <div className="lg:w-2/5 p-12 lg:p-16 bg-[#DA291C] relative overflow-hidden">
            {/* Background Transmission GIF */}
            <img 
              src="https://media.giphy.com/media/3o7TKpx2xWk4pE9vYI/giphy.gif" 
              className="absolute inset-0 w-full h-full object-cover opacity-10 scale-150 pointer-events-none"
              alt="Signal"
            />
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
            <div className="relative z-10">
              <span className="text-[10px] font-black tracking-[0.4em] text-white/60 uppercase mb-4 block">Connection</span>
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 leading-[0.9] tracking-tighter">LET'S BUILD <br/> THE FUTURE.</h2>
              <p className="text-white/80 text-lg mb-12 font-medium leading-relaxed">
                Currently taking on select projects in digital marketing and content strategy. Let's make something impactful.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center transition-all group-hover:bg-white group-hover:text-[#DA291C]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[9px] text-white/50 uppercase font-black tracking-widest mb-1">Email</p>
                    <a href="mailto:satishkp0927@gmail.com" className="text-white font-bold text-lg hover:underline decoration-2 underline-offset-4 tracking-tight">satishkp0927@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center transition-all group-hover:bg-white group-hover:text-[#DA291C]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[9px] text-white/50 uppercase font-black tracking-widest mb-1">Phone</p>
                    <a href="tel:8104198509" className="text-white font-bold text-lg hover:underline decoration-2 underline-offset-4 tracking-tight">8104198509</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5 p-12 lg:p-16 bg-[#050505]">
            {result === "TRANSMISSION SUCCESSFUL." ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20 animate-in fade-in zoom-in duration-700">
                <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-4 border border-green-500/20 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-white tracking-tighter">ENCRYPTED SEND COMPLETE</h3>
                <p className="text-gray-500 max-w-xs font-medium">Your request has been filed in my priority queue. I'll reach out shortly.</p>
                <button 
                  onClick={() => setResult(null)} 
                  className="mt-8 text-[#DA291C] font-black uppercase tracking-widest text-xs hover:neon-glow-red transition-all"
                >
                  NEW TRANSMISSION
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Identity</label>
                    <input 
                      id="name" name="name" type="text" required
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#DA291C] focus:ring-1 focus:ring-[#DA291C] text-white transition-all font-medium" 
                      placeholder="FULL NAME" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Digital Mail</label>
                    <input 
                      id="email" name="email" type="email" required
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#DA291C] focus:ring-1 focus:ring-[#DA291C] text-white transition-all font-medium" 
                      placeholder="EMAIL@DOMAIN.COM" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Data Input</label>
                  <textarea 
                    id="message" name="message" required rows={5} 
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#DA291C] focus:ring-1 focus:ring-[#DA291C] text-white transition-all font-medium resize-none" 
                    placeholder="DESCRIBE PROJECT SCOPE..."
                  ></textarea>
                </div>
                
                {result && result !== "TRANSMISSION SUCCESSFUL." && (
                  <div className="p-4 rounded-xl text-[10px] font-black tracking-widest bg-red-500/10 text-red-500 border border-red-500/20 uppercase">
                    {result}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-5 bg-white text-black font-black rounded-2xl hover:bg-[#DA291C] hover:text-white transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-xs shadow-2xl disabled:opacity-50"
                >
                  {isSubmitting ? "PROCESSING..." : "TRANSMIT DATA"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
