import React, { useEffect, useRef, useState } from 'react';
import { AgentResponse } from '../types';

interface AgentInterfaceProps {
  messages: { role: 'user' | 'ai'; text: string; imageUrl?: string }[];
  isLoading: boolean;
}

export const AgentInterface: React.FC<AgentInterfaceProps> = ({ messages, isLoading }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Handle Text-to-Speech
  useEffect(() => {
    if (isMuted) return;

    // Get the latest message
    const lastMsg = messages[messages.length - 1];

    // Only speak if it's from AI and we haven't already started speaking this exact text (simple check)
    // In a real app we might track IDs, but here we just check role.
    if (lastMsg && lastMsg.role === 'ai') {
       speak(lastMsg.text);
    }
  }, [messages, isMuted]);

  // Cleanup audio on unmount
  useEffect(() => {
      return () => {
          window.speechSynthesis.cancel();
      }
  }, []);

  const speak = (text: string) => {
    window.speechSynthesis.cancel(); // Stop any previous speech
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Attempt to find a good voice
    const voices = window.speechSynthesis.getVoices();
    // Try to find a deep/authoritative voice (often Google US English or Microsoft David)
    const preferredVoice = voices.find(v => v.name.includes("Google US English") || v.name.includes("David"));
    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.rate = 0.9; // Slightly slower for "Ancient/Solemn" effect
    utterance.pitch = 0.9; // Slightly deeper

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const toggleMute = () => {
      if (isSpeaking) {
          window.speechSynthesis.cancel();
          setIsSpeaking(false);
      }
      setIsMuted(!isMuted);
  };

  return (
    <div className="flex flex-col h-full bg-space-800/80 border border-space-700 rounded-lg overflow-hidden backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="bg-space-900/90 p-3 border-b border-space-700 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-a2a-accent rounded-full animate-pulse"></div>
          <span className="text-a2a-accent font-mono text-xs tracking-widest uppercase">GEMINI 3 PRO LINK</span>
        </div>
        
        <div className="flex items-center gap-3">
             {/* Audio Toggle */}
             <button 
                onClick={toggleMute}
                className={`flex items-center gap-2 px-2 py-1 rounded border text-[10px] font-mono transition-all ${
                    isMuted 
                    ? 'border-gray-700 text-gray-500 bg-black/20' 
                    : 'border-a2a-gold/30 text-a2a-gold bg-a2a-gold/10'
                }`}
                title={isMuted ? "Unmute Narrative" : "Mute Narrative"}
             >
                 {isMuted ? (
                    <>🔇 OFF</>
                 ) : (
                    <>
                        <span className={`${isSpeaking ? 'animate-pulse' : ''}`}>🔊</span> ON
                    </>
                 )}
             </button>
             <span className="text-gray-500 font-mono text-xs">V.3.3.1</span>
        </div>
      </div>

      {/* Messages Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6 font-mono text-sm">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 opacity-60">
             <div className="text-4xl mb-4">🌍✨</div>
             <p className="italic mb-2">"We are not leaving Earth to abandon it,<br/>but to find it."</p>
             <p className="text-xs uppercase tracking-widest text-a2a-gold">Select a Memory Node to Begin</p>
          </div>
        )}
        
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            
            {/* Message Bubble */}
            <div 
              className={`max-w-[90%] p-4 rounded-lg border ${
                msg.role === 'user' 
                  ? 'bg-space-700 border-space-600 text-starlight rounded-tr-none' 
                  : 'bg-black/60 border-a2a-gold/30 text-a2a-gold rounded-tl-none shadow-[0_0_20px_rgba(212,175,55,0.1)]'
              }`}
            >
              {msg.role === 'ai' && (
                <div className="flex justify-between items-center mb-2 border-b border-a2a-gold/20 pb-1">
                    <span className="text-[10px] uppercase tracking-widest opacity-80">Galactic Storybook AI</span>
                    <span className="text-[10px] text-a2a-accent">GEMINI-3-PRO</span>
                </div>
              )}
              
              <div className="leading-relaxed whitespace-pre-wrap font-sans text-base">{msg.text}</div>
            </div>

            {/* Generated Image (AI only) */}
            {msg.imageUrl && (
                <div className="mt-3 max-w-[90%] w-full rounded-lg overflow-hidden border border-a2a-accent/50 shadow-lg relative group">
                    <div className="absolute top-2 left-2 bg-black/70 backdrop-blur px-2 py-1 rounded border border-white/10 text-[10px] text-a2a-accent z-10 uppercase">
                        Visually Synthesized
                    </div>
                    <img 
                        src={msg.imageUrl} 
                        alt="AI Visualization" 
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-a2a-accent/20 rounded-lg pointer-events-none"></div>
                </div>
            )}

          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-black/40 border border-a2a-accent/30 p-3 rounded-lg flex items-center space-x-3">
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-a2a-accent rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-a2a-accent rounded-full animate-bounce delay-75"></div>
                <div className="w-1.5 h-1.5 bg-a2a-accent rounded-full animate-bounce delay-150"></div>
              </div>
              <span className="text-xs text-a2a-accent animate-pulse">SYNTHESIZING...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};