import React from 'react';
import { CheckSquare, Github, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-night text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-viridian rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-celadon rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-cinereous rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-primary p-3 rounded-xl">
                <CheckSquare className="h-8 w-8 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold">Schoology X</span>
            </div>
            <p className="text-platinum/80 leading-relaxed mb-6">
              Enhancing your Schoology experience with beautiful, functional checkboxes. 
              Free, open-source, and privacy-focused.
            </p>
            <a 
              href="https://github.com/Reoringtin-Reof/Schoology-X" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-celadon hover:text-white transition-colors duration-200"
            >
              <Github className="h-5 w-5 mr-2" />
              View on GitHub
            </a>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-celadon">Quick Links</h3>
            <div className="space-y-4">
              <a href="#features" className="block text-platinum/80 hover:text-white transition-colors duration-200">Features</a>
              <a href="#installation" className="block text-platinum/80 hover:text-white transition-colors duration-200">Installation</a>
              <a 
                href="https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-platinum/80 hover:text-white transition-colors duration-200"
              >
                Installation Guide
              </a>
            </div>
          </div>
          
          {/* Support */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-celadon">Support</h3>
            <div className="space-y-4">
              <p className="text-platinum/80">
                Need help? Check out our GitHub repository for documentation and support.
              </p>
              <div className="flex items-center text-platinum/80">
                <Heart className="h-4 w-4 mr-2 text-red-400 fill-current" />
                Made with love for students
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cinereous/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-platinum/60 mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Schoology X. Open source and free forever.</p>
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-platinum/60">Privacy First</span>
              <span className="text-platinum/60">•</span>
              <span className="text-platinum/60">No Data Collection</span>
              <span className="text-platinum/60">•</span>
              <span className="text-platinum/60">100% Free</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}