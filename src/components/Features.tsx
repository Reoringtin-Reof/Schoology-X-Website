import React from 'react';
import { CheckCircle, Clock, Shield, Sparkles } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <CheckCircle className="h-10 w-10 text-white" />,
      title: "Interactive Checkboxes",
      description: "Add beautiful, responsive checkboxes to your Schoology to-do list for seamless task management",
      color: "bg-gradient-to-br from-viridian to-celadon"
    },
    {
      icon: <Clock className="h-10 w-10 text-white" />,
      title: "Progress Tracking",
      description: "Visualize your academic progress with elegant completion indicators and motivating statistics",
      color: "bg-gradient-to-br from-celadon to-viridian"
    },
    {
      icon: <Shield className="h-10 w-10 text-white" />,
      title: "Privacy Focused",
      description: "Your data stays completely local - we don't collect, store, or transmit any personal information",
      color: "bg-gradient-to-br from-cinereous to-viridian"
    },
    {
      icon: <Sparkles className="h-10 w-10 text-white" />,
      title: "Seamless Integration",
      description: "Works naturally with Schoology's existing interface without disrupting your workflow",
      color: "bg-gradient-to-br from-viridian to-cinereous"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-celadon rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-viridian rounded-full"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-night mb-6">
            Everything You Need to 
            <span className="text-gradient block">Stay Organized</span>
          </h2>
          <p className="text-xl text-cinereous max-w-3xl mx-auto font-medium leading-relaxed">
            Powerful features designed to enhance your productivity and make studying more enjoyable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-platinum/50 hover:border-celadon/30 hover:-translate-y-2">
                <div className={`${feature.color} p-4 rounded-2xl mb-6 w-fit shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-night">{feature.title}</h3>
                <p className="text-cinereous leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}