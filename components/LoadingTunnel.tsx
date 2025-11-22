import React, { useEffect, useState } from 'react';

export const LoadingTunnel: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Connecting to timeline...");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev; // Hold at 90 until complete
        return prev + 1;
      });
    }, 50);

    const messages = [
      "Connecting to timeline...",
      "Accessing 2026 memories...",
      "Visualizing success...",
      "Constructing reality...",
      "Manifesting details...",
      "Almost there..."
    ];

    let msgIndex = 0;
    const msgInterval = setInterval(() => {
      msgIndex = (msgIndex + 1) % messages.length;
      setMessage(messages[msgIndex]);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(msgInterval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="relative w-32 h-32 mb-12">
        {/* Tunnel Effect Circles */}
        <div className="absolute inset-0 rounded-full border-4 border-white/10 animate-[ping_3s_linear_infinite]"></div>
        <div className="absolute inset-2 rounded-full border-4 border-white/20 animate-[ping_3s_linear_infinite_0.5s]"></div>
        <div className="absolute inset-4 rounded-full border-4 border-white/30 animate-[ping_3s_linear_infinite_1s]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl animate-pulse">⏳</span>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-serif font-light text-white mb-4 tracking-wide">
        {message}
      </h2>

      <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-amber-200 to-white transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="mt-4 text-white/40 font-mono text-xs">
        {progress}% DOWNLOADED
      </p>
    </div>
  );
};
