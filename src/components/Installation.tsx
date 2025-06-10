import React from 'react';
import { Download, Chrome, Monitor, Settings } from 'lucide-react';

export function Installation() {
  const handleDownload = () => {
    window.location.href = 'https://github.com/Reoringtin-Reof/Schoology-X/archive/refs/heads/main.zip';
  };

  const steps = [
    {
      icon: <Download className="h-10 w-10 text-night" />,
      title: "Download Extension",
      description: "Get the latest version with one click",
      color: "bg-white"
    },
    {
      icon: <Chrome className="h-10 w-10 text-viridian" />,
      title: "Add to Browser",
      description: "Install seamlessly in Chrome browser",
      color: "bg-white"
    },
    {
      icon: <Settings className="h-10 w-10 text-night" />,
      title: "Configure Settings",
      description: "Customize to match your preferences",
      color: "bg-white"
    },
    {
      icon: <Monitor className="h-10 w-10 text-viridian" />,
      title: "Start Using",
      description: "Enjoy your enhanced Schoology experience",
      color: "bg-white"
    }
  ];

  return (
    <section id="installation" className="py-24 bg-gradient-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-viridian rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-celadon rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-night mb-6">
            Quick & Easy
            <span className="text-gradient block">Installation</span>
          </h2>
          <p className="text-xl text-cinereous max-w-3xl mx-auto font-medium leading-relaxed">
            Get up and running in minutes with our streamlined installation process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 hover:border-celadon/30 hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
                
                <div className={`${step.color} p-4 rounded-2xl mb-6 w-fit shadow-lg border border-platinum/30`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-night">{step.title}</h3>
                <p className="text-cinereous leading-relaxed">{step.description}</p>
              </div>
              
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-1 bg-gradient-to-r from-viridian to-celadon rounded-full shadow-sm"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <button 
            onClick={handleDownload}
            className="inline-flex items-center px-10 py-5 bg-gradient-primary text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Download className="mr-3 h-6 w-6" />
            Download Schoology X Now
          </button>
        </div>
      </div>
    </section>
  );
}