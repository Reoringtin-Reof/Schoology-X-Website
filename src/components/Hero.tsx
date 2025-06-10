import React from 'react';
import { CheckSquare, ArrowRight, Star } from 'lucide-react';

export function Hero() {
  const handleDownload = () => {
    window.location.href = 'https://github.com/Reoringtin-Reof/Schoology-X/archive/refs/heads/main.zip';
  };

  return (
    <div className="relative bg-gradient-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-viridian rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-celadon rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-viridian rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium text-viridian mb-8 border border-celadon/30">
            <Star className="h-4 w-4 mr-2 fill-current" />
            Free & Open Source
          </div>
          
          {/* Main Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-primary p-6 rounded-3xl shadow-2xl">
              <CheckSquare className="h-20 w-20 text-white" />
            </div>
          </div>
          
          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-night leading-tight">
            Schoology
            <span className="text-gradient block">X</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-cinereous leading-relaxed font-medium">
            Transform your Schoology experience with interactive checkboxes. 
            <span className="text-viridian font-semibold"> Stay organized, track progress, </span>
            and boost your productivity with our beautiful browser extension.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <button 
              onClick={handleDownload}
              className="group inline-flex items-center px-8 py-4 bg-gradient-primary text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Download Now
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <a 
              href="https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-viridian text-viridian rounded-2xl font-bold text-lg hover:bg-viridian hover:text-white transition-all duration-300"
            >
              Installation Guide
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-black text-viridian mb-2">100%</div>
              <div className="text-cinereous font-medium">Free Forever</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-viridian mb-2">0</div>
              <div className="text-cinereous font-medium">Data Collection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-viridian mb-2">∞</div>
              <div className="text-cinereous font-medium">Productivity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}