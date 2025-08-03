import React from 'react';
import { Brain, Users, Rocket, Code, Database, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Product Development',
      description: 'From concept to deployment, we build cutting-edge AI solutions that drive real business value.',
      features: ['Custom AI Models', 'Integration Services', 'Performance Optimization', 'Scalable Architecture']
    },
    {
      icon: Users,
      title: 'ML Staffing Solutions',
      description: 'Connect with top-tier machine learning professionals who can accelerate your AI initiatives.',
      features: ['Expert Screening', 'Rapid Placement', 'Contract & Full-time', 'Specialized Skills']
    },
    {
      icon: Rocket,
      title: 'Platform Launch Support',
      description: 'Launch your ML-driven platform with confidence using our proven deployment strategies.',
      features: ['Go-to-Market Strategy', 'Technical Architecture', 'Performance Monitoring', 'User Adoption']
    }
  ];

  const capabilities = [
    { icon: Code, title: 'Machine Learning', description: 'Advanced ML algorithms and model development' },
    { icon: Database, title: 'Data Engineering', description: 'Robust data pipelines and infrastructure' },
    { icon: BarChart3, title: 'AI Analytics', description: 'Intelligent insights and predictive analytics' }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We deliver comprehensive AI solutions and connect you with exceptional talent to transform your business
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
            >
              <div className="bg-blue-100 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Core Capabilities</h3>
            <p className="text-slate-300 text-lg">Technology expertise that powers innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-blue-600/20 rounded-2xl p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                  <capability.icon className="h-10 w-10 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{capability.title}</h4>
                <p className="text-slate-400">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;