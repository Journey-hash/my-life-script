import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import { VibeType, VIBE_CONFIG, ScriptRequest } from '../types';

interface EnvelopeInputProps {
  onSubmit: (data: ScriptRequest) => void;
}

export const EnvelopeInput: React.FC<EnvelopeInputProps> = ({ onSubmit }) => {
  const [goal, setGoal] = useState('');
  const [details, setDetails] = useState('');
  const [selectedVibe, setSelectedVibe] = useState<VibeType>(VibeType.HERO);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim()) return;
    onSubmit({ goal, details, vibe: selectedVibe });
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <div className="bg-[#fdfbf7] text-slate-800 rounded-sm shadow-2xl overflow-hidden border border-stone-200 relative transform transition-all duration-500 hover:scale-[1.01]">
        {/* Decorative Stamps/Marks */}
        <div className="absolute top-6 right-6 opacity-80 hidden sm:block">
          <div className="w-20 h-24 border-4 border-dashed border-red-900/20 flex items-center justify-center transform rotate-12">
             <span className="text-xs font-serif text-red-900/40 font-bold uppercase tracking-widest text-center">Future<br/>Post</span>
          </div>
        </div>

        <div className="p-8 sm:p-12">
          <div className="mb-8 text-center">
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-800 mb-2 tracking-tight">
              愿望投递箱
            </h1>
            <p className="text-stone-500 font-serif italic">
              Write to your future self. Make it real.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Core Goal */}
            <div className="relative group">
              <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">
                核心愿望 (Core Desire) <span className="text-red-400">*</span>
              </label>
              <textarea
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="例如：考上北大光华、三个月瘦20斤、存到第一个100万..."
                className="w-full bg-transparent border-b-2 border-stone-300 py-3 text-lg sm:text-xl font-serif placeholder-stone-300 focus:border-stone-800 focus:outline-none transition-colors resize-none min-h-[80px]"
                required
              />
            </div>

            {/* Details */}
            <div className="relative">
              <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">
                补充细节 (Details - Optional)
              </label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="例如：秋天的第一杯奶茶、带着爸妈去冰岛、窗外的梧桐树..."
                className="w-full bg-transparent border-b-2 border-stone-300 py-3 text-base font-serif placeholder-stone-300 focus:border-stone-800 focus:outline-none transition-colors resize-none min-h-[60px]"
              />
            </div>

            {/* Vibe Selector */}
            <div>
              <label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">
                选择剧本风格 (Vibe Check)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {Object.values(VibeType).map((vibe) => (
                  <button
                    key={vibe}
                    type="button"
                    onClick={() => setSelectedVibe(vibe)}
                    className={`relative overflow-hidden rounded-lg p-4 text-left border transition-all duration-300 group
                      ${selectedVibe === vibe 
                        ? 'border-stone-800 bg-stone-50 shadow-md' 
                        : 'border-stone-200 hover:border-stone-400 bg-white'
                      }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-2xl">{VIBE_CONFIG[vibe].icon}</span>
                      {selectedVibe === vibe && <Sparkles className="w-4 h-4 text-yellow-600" />}
                    </div>
                    <div className={`font-bold text-sm ${selectedVibe === vibe ? 'text-stone-900' : 'text-stone-600'}`}>
                      {VIBE_CONFIG[vibe].label}
                    </div>
                    <div className="text-xs text-stone-400 mt-1 leading-relaxed">
                      {VIBE_CONFIG[vibe].desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 flex justify-center">
              <button
                type="submit"
                disabled={!goal.trim()}
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-stone-900 font-serif rounded-full hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-900 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-stone-200"></span>
                <span className="relative flex items-center gap-3 text-lg">
                  寄往未来
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
            </div>
          </form>
        </div>
        
        {/* Envelope pattern at bottom */}
        <div className="h-4 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ef4444_10px,#ef4444_20px,transparent_20px,transparent_30px,#3b82f6_30px,#3b82f6_40px)] opacity-30"></div>
      </div>
      
      <p className="text-center text-stone-500/60 text-xs mt-8 font-mono">
        AI GENERATED • VISUALIZATION PROTOCOL v1.0
      </p>
    </div>
  );
};
