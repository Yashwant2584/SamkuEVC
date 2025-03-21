import React, { useState, useEffect } from 'react';
import backgroundImage from '../images/k.jpg';

const ComingSoon = () => {
  const [batteryCharge, setBatteryCharge] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const batteryInterval = setInterval(() => {
      setBatteryCharge(prev => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 100);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(batteryInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black" 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Sophisticated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.1s ease-out'
        }} />
      </div>
      
      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Main content container */}
      <div 
        className="relative max-w-3xl mx-auto text-center p-8 backdrop-blur-2xl rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] transform transition-all duration-700 hover:scale-[1.02]"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-green-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative mb-6 flex justify-center">
          {/* Premium EV Battery SVG */}
          <svg 
            width="80" 
            height="40" 
            viewBox="0 0 120 60" 
            className={`transform transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          >
            <defs>
              <linearGradient id="batteryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#FF4B4B" }} />
                <stop offset="50%" style={{ stopColor: "#FFB800" }} />
                <stop offset="100%" style={{ stopColor: "#00FF9D" }} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            <rect x="5" y="5" width="90" height="40" rx="5" fill="#1A1A1A" stroke="#60A5FA" strokeWidth="2" filter="url(#glow)" />
            <rect x="95" y="15" width="15" height="20" rx="3" fill="#1A1A1A" stroke="#60A5FA" strokeWidth="2" filter="url(#glow)" />
            
            <rect 
              x="8" 
              y="8" 
              width={`${batteryCharge * 0.84}`} 
              height="34" 
              rx="3" 
              fill="url(#batteryGradient)"
              filter="url(#glow)"
            />
            
            <path 
              d="M48 8 L43 25 L53 22 L45 40 L50 25 L40 28 L48 8" 
              fill="white" 
              opacity={batteryCharge > 30 ? "1" : "0"}
              className="transition-opacity duration-300"
              filter="url(#glow)"
            />
          </svg>
        </div>

        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent  bg-gradient-to-r from-blue-600 to-green-500 inline-block animate-gradient">
          COMING SOON
        </h1>
        
        {/* Premium progress bar */}
        <div className="flex justify-center mb-4">
          <div className="relative h-3 bg-white/5 rounded-full w-72 overflow-hidden backdrop-blur-sm border border-white/10">
            <div 
              className="absolute h-full bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 animate-shimmer" 
              style={{ width: `${batteryCharge}%`, transition: "width 0.1s" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
          </div>
        </div>
        
        <h2 className="text-4xl font-bold mb-2 text-white drop-shadow-lg tracking-tight">
          EV STORE
        </h2>
        
        <p className="text-lg text-white mb-6  max-w-xl mx-auto leading-relaxed">
        We are working on something amazing. Stay tuned!
        </p>

        {/* Premium newsletter signup */}
        <div className="mt-6">
          <div className="flex justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-300 w-64 text-base"
            />
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold hover:from-blue-600 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-base">
              Notify Me
            </button>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-6 flex justify-center gap-6">
          {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-white/60 hover:text-white transition-colors duration-300 text-xs uppercase tracking-wider"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;