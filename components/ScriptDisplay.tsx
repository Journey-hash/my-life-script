import React from 'react';
import { ScriptResponse } from '../types';
import { RefreshCw, Download, Share2 } from 'lucide-react';

interface ScriptDisplayProps {
  data: ScriptResponse;
  onReset: () => void;
}

export const ScriptDisplay: React.FC<ScriptDisplayProps> = ({ data, onReset }) => {
  // Use Picsum with a seed based on the keyword to get consistent but "random" images
  const imageUrl = `https://picsum.photos/seed/${data.imageKeyword.replace(/\s+/g, '-')}/800/1000`;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 animate-fade-in">
      
      {/* Action Bar */}
      <div className="flex justify-between items-center mb-6 text-white/60">
        <button 
          onClick={onReset}
          className="flex items-center gap-2 hover:text-white transition-colors text-sm uppercase tracking-widest"
        >
          <RefreshCw className="w-4 h-4" /> New Goal
        </button>
        <div className="flex gap-4">
             {/* Just visual buttons for demo */}
             <button className="hover:text-white transition-colors"><Share2 className="w-5 h-5" /></button>
        </div>
      </div>

      {/* The "Poster" Area */}
      <div className="bg-white rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px]">
        
        {/* Image Side (Mobile: Top, Desktop: Left) */}
        <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-full bg-stone-200">
           <img 
             src={imageUrl} 
             alt="Atmosphere" 
             className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-10000 ease-linear"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10"></div>
           
           {/* Date Badge */}
           <div className="absolute bottom-6 left-6 text-white font-serif">
             <p className="text-xs tracking-[0.2em] uppercase mb-1 opacity-80">Recorded On</p>
             <p className="text-2xl font-bold italic">{data.date}</p>
           </div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col bg-[#fbf9f5] text-stone-800 relative">
          {/* Watermark */}
          <div className="absolute top-0 right-0 p-4 opacity-5 select-none pointer-events-none">
             <h1 className="text-9xl font-serif font-bold">FUTURE</h1>
          </div>

          {/* Title */}
          <div className="mb-8 relative z-10">
            <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-4 text-stone-900">
              {data.title}
            </h1>
            <div className="w-20 h-1 bg-stone-900"></div>
          </div>

          {/* Content */}
          <div className="flex-grow relative z-10 overflow-y-auto custom-scrollbar pr-2">
             <div className="prose prose-stone prose-lg font-serif leading-relaxed text-stone-600 whitespace-pre-line text-justify">
               {data.content}
             </div>
          </div>

          {/* Quote */}
          <div className="mt-10 pt-8 border-t border-stone-200 relative z-10">
            <div className="flex gap-4">
               <span className="text-4xl text-stone-300 font-serif">"</span>
               <p className="text-xl md:text-2xl font-serif font-bold italic text-stone-800">
                 {data.quote}
               </p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer / Encouragement */}
      <div className="text-center mt-12 pb-8">
        <p className="text-white/40 font-serif italic text-sm">
          "The best way to predict the future is to create it."
        </p>
      </div>
    </div>
  );
};
