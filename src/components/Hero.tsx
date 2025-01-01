import React from 'react';
import { CheckSquare, ArrowRight } from 'lucide-react';

export function Hero() {
  const handleDownload = () => {
    window.location.href = 'https://github.com/Reoringtin-Reof/Schoology-X/archive/refs/heads/main.zip';
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <CheckSquare className="h-16 w-16 text-gray-900" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Schoology X
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-600">
            Add checkboxes to your Schoology to-do list and stay organized with our simple, 
            intuitive browser extension.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Download Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <a 
              href="https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              Learn How to Install Unpacked Extensions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
