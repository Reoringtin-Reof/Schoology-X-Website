import React from 'react';
import { CheckSquare, Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleDownload = () => {
    window.location.href = 'https://github.com/Reoringtin-Reof/Schoology-X/archive/refs/heads/main.zip';
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <CheckSquare className="h-8 w-8 text-gray-900" />
            <span className="ml-2 text-xl font-bold text-gray-900">Schoology X</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#installation" className="text-gray-600 hover:text-gray-900">Installation</a>
            <button 
              onClick={handleDownload}
              className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              Download Extension
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Features</a>
            <a href="#installation" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Installation</a>
            <button 
              onClick={handleDownload}
              className="w-full text-left px-3 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
            >
              Download Extension
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
