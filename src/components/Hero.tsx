import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-6 w-6 text-blue-400 animate-pulse" />
            <span className="text-blue-400 font-medium text-sm uppercase tracking-wide">
              Cutting-Edge AI Solutions
            </span>
            <Sparkles className="h-6 w-6 text-blue-400 animate-pulse" />
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent block mt-2">
              AI Innovation
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We specialize in delivering cutting-edge AI services and machine learning staffing solutions 
            tailored to your industry. Scale faster with the right technology and talent.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={scrollToContact}
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-white/10 flex items-center space-x-2"
            >
              <Zap className="h-5 w-5" />
              <span>Explore Services</span>
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-white font-semibold text-lg mb-2">AI Product Development</h3>
            <p className="text-slate-300 text-sm">End-to-end AI solutions from concept to deployment</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-white font-semibold text-lg mb-2">ML Talent Acquisition</h3>
            <p className="text-slate-300 text-sm">Connect with top-tier machine learning professionals</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-white font-semibold text-lg mb-2">Rapid Scaling</h3>
            <p className="text-slate-300 text-sm">Fast implementation and team scaling solutions</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
};

export default Hero;