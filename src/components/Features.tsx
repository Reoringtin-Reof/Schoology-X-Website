import React from 'react';
import { CheckCircle, Clock, Shield, Sparkles } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-gray-900" />,
      title: "Interactive Checkboxes",
      description: "Add checkboxes to your Schoology to-do list for better task management"
    },
    {
      icon: <Clock className="h-8 w-8 text-gray-900" />,
      title: "Progress Tracking",
      description: "Visualize your progress as you complete tasks throughout the day"
    },
    {
      icon: <Shield className="h-8 w-8 text-gray-900" />,
      title: "Privacy Focused",
      description: "Your data stays local - we don't collect or store any personal information"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-gray-900" />,
      title: "Seamless Integration",
      description: "Works naturally with Schoology's existing interface"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Stay Organized
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple yet powerful features to enhance your productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
