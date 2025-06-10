import React from 'react';
import { CheckSquare, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleDownload = () => {
    window.location.href = 'https://github.com/Reoringtin-Reof/Schoology-X/archive/refs/heads/main.zip';
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-platinum/50 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="bg-gradient-primary p-2 rounded-xl">
              <CheckSquare className="h-8 w-8 text-white" />
            </div>
            <span className="ml-3 text-2xl font-bold text-night">Schoology X</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-cinereous hover:text-viridian font-medium transition-colors duration-200">Features</a>
            <a href="#installation" className="text-cinereous hover:text-viridian font-medium transition-colors duration-200">Installation</a>
            <button 
              onClick={handleDownload}
              className="bg-gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Download Extension
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cinereous hover:text-viridian p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-platinum">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a href="#features" className="block px-4 py-3 text-cinereous hover:text-viridian font-medium">Features</a>
            <a href="#installation" className="block px-4 py-3 text-cinereous hover:text-viridian font-medium">Installation</a>
            <button 
              onClick={handleDownload}
              className="w-full text-left px-4 py-3 bg-gradient-primary text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
            >
              Download Extension
            </button>
          </div>
        </div>
      )}
    </header>
  );
}