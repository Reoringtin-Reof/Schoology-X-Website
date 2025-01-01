import React from 'react';
import { Download, Chrome, Monitor, Settings } from 'lucide-react';

export function Installation() {
  const handleDownload = () => {
    window.location.href = 'https://github.com/Reoringtin-Reof/Schoology-X/archive/refs/heads/main.zip';
  };

  const steps = [
    {
      icon: <Download className="h-8 w-8 text-indigo-600" />,
      title: "Download Extension",
      description: "Click the download button to get the latest version"
    },
    {
      icon: <Chrome className="h-8 w-8 text-indigo-600" />,
      title: "Add to Browser",
      description: "Install the extension in your Chrome browser"
    },
    {
      icon: <Settings className="h-8 w-8 text-indigo-600" />,
      title: "Configure Settings",
      description: "Customize the extension to your preferences"
    },
    {
      icon: <Monitor className="h-8 w-8 text-indigo-600" />,
      title: "Start Using",
      description: "Visit Schoology and enjoy the enhanced to-do list"
    }
  ];

  return (
    <section id="installation" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Quick and Easy Installation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get up and running in minutes with these simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
