
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { 
      role: 'model', 
      text: "Hello! I'm Satish's AI assistant. I can help you learn about Satish's professional background or answer any general questions you have, just like ChatGPT!" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            role: 'user',
            parts: [{ text: `You are Satish's professional AI assistant and a versatile knowledge expert, similar to ChatGPT.

Primary Identity:
You represent Satish Chauhan, a hospitality and marketing professional.
Details about Satish:
- Experience: McDonald's India (Trainee Squad Member), Local Cafe (Social Media & Content).
- Skills: Customer Service, Social Media Management, Content Writing, Digital Marketing.
- Contact: Email: satishkp0927@gmail.com, Phone: 8104198509.

Universal Capability:
In addition to knowing everything about Satish's career, you are highly intelligent and can answer general knowledge questions on any topic (science, history, coding, creative writing, etc.) with the same level of depth and accuracy as a world-class LLM.

Operational Guidelines:
1. Be professional, friendly, and conversational.
2. For questions about Satish, be his advocate.
3. For general queries, be helpful, accurate, and concise.
4. If the user asks who you are, say you are "Satish's AI Assistant with a wide range of general knowledge."
5. Never mention that you are a "large language model" unless explicitly asked about your architecture; just be helpful.

Current User Query: ${userMessage}` }]
          }
        ],
        config: {
          temperature: 0.8,
          topP: 0.9,
          topK: 50,
        }
      });

      const aiText = response.text || "I encountered a processing error. How else can I assist you?";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("ChatBot Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Connectivity issues. Please try again or reach Satish at 8104198509." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#DA291C] text-white rounded-full shadow-[0_0_25px_rgba(218,41,28,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all group border-2 border-white/10"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-8 h-8 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#DA291C] animate-ping"></span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[360px] md:w-[420px] h-[550px] glass rounded-[36px] overflow-hidden shadow-2xl flex flex-col animate-in slide-in-from-bottom-6 duration-500 border-white/10 ring-1 ring-white/10">
          <div className="p-6 bg-[#DA291C] flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                  <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_12px_white] animate-pulse"></div>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-[#DA291C]"></div>
              </div>
              <div>
                <h4 className="font-black text-white text-sm tracking-tight">SATISH AI MASTER</h4>
                <p className="text-[8px] text-white/70 font-black tracking-[0.2em] uppercase">Knowledge Engine Online</p>
              </div>
            </div>
            <div className="flex gap-2">
               <div className="px-2 py-1 bg-white/10 rounded-md border border-white/5">
                 <span className="text-[8px] font-bold text-white uppercase">V2.0</span>
               </div>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-6 space-y-5 bg-black/60 scroll-smooth"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[90%] p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-[#DA291C] text-white rounded-br-none' 
                    : 'bg-white/10 text-gray-200 border border-white/10 rounded-bl-none backdrop-blur-md'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-[#DA291C] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#DA291C] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-[#DA291C] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-5 bg-black/80 border-t border-white/10 flex gap-3 backdrop-blur-xl">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#DA291C] focus:ring-1 focus:ring-[#DA291C] text-white transition-all placeholder:text-gray-600"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center hover:bg-[#DA291C] hover:text-white active:scale-90 transition-all shadow-xl disabled:opacity-50"
            >
              <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
