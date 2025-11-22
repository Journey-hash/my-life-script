import React, { useState } from 'react';
import { EnvelopeInput } from './components/EnvelopeInput';
import { LoadingTunnel } from './components/LoadingTunnel';
import { ScriptDisplay } from './components/ScriptDisplay';
import { generateLifeScript } from './services/geminiService';
import { ScriptRequest, ScriptResponse } from './types';

type ViewState = 'INPUT' | 'LOADING' | 'RESULT';

export default function App() {
  const [view, setView] = useState<ViewState>('INPUT');
  const [scriptData, setScriptData] = useState<ScriptResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScriptRequest = async (request: ScriptRequest) => {
    setView('LOADING');
    setError(null);
    try {
      const result = await generateLifeScript(request);
      setScriptData(result);
      // Add a small artificial delay if the API is too fast, to show the cool tunnel animation
      setTimeout(() => {
        setView('RESULT');
      }, 2000);
    } catch (err) {
      console.error("生成剧本时出错:", err);
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      if (errorMessage.includes("API Key")) {
        setError("API Key 未配置。请检查 .env.local 文件中的 GEMINI_API_KEY 设置。");
      } else {
        setError(`无法连接到时间线: ${errorMessage}。请重试。`);
      }
      setView('INPUT');
    }
  };

  const handleReset = () => {
    setScriptData(null);
    setView('INPUT');
  };

  return (
    <div className="min-h-screen bg-stone-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-800 via-stone-950 to-black flex flex-col font-sans selection:bg-amber-200 selection:text-stone-900 overflow-x-hidden">
      
      {/* Header */}
      <header className="w-full py-6 px-6 flex justify-between items-center border-b border-white/5 bg-stone-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse"></div>
          <span className="text-stone-200 font-serif font-bold tracking-wider text-sm md:text-base">
            MY LIFE SCRIPT
          </span>
        </div>
        <div className="text-stone-500 text-xs font-mono hidden sm:block">
          TIMELINE: {new Date().getFullYear()} <span className="mx-2">→</span> 20??
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center relative p-4">
        
        {/* Background Noise/Grain (Simulated via CSS pattern) */}
        <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

        {/* View Rendering */}
        <div className="w-full max-w-6xl z-10 relative">
          
          {error && (
            <div className="mb-6 p-4 bg-red-900/50 border border-red-500/30 rounded-lg text-red-200 text-center max-w-md mx-auto animate-fade-in">
              {error}
            </div>
          )}

          {view === 'INPUT' && (
            <div className="animate-fade-in-up">
               <EnvelopeInput onSubmit={handleScriptRequest} />
            </div>
          )}

          {view === 'LOADING' && (
            <div className="animate-fade-in">
              <LoadingTunnel />
            </div>
          )}

          {view === 'RESULT' && scriptData && (
            <div className="animate-fade-in">
              <ScriptDisplay data={scriptData} onReset={handleReset} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
