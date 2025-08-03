import React from 'react';
import { Target, Clock, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'AI Projects Delivered', icon: Target },
    { number: '50%', label: 'Faster Time-to-Market', icon: Clock },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '200%', label: 'Average ROI Increase', icon: TrendingUp }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
              Why Choose <span className="text-blue-600">Lynette Technologies</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We're not just another tech consultancy. We're your strategic AI partner, combining 
              deep technical expertise with industry-specific knowledge to deliver solutions that 
              actually work in the real world.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-lg p-2 flex-shrink-0">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Industry-Tailored Solutions</h3>
                  <p className="text-slate-600">Every AI solution is customized to your specific industry challenges and requirements.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 rounded-lg p-2 flex-shrink-0">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Rapid Implementation</h3>
                  <p className="text-slate-600">Get your AI initiatives up and running fast with our proven methodologies and expert team.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-lg p-2 flex-shrink-0">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Proven Track Record</h3>
                  <p className="text-slate-600">Join hundreds of companies who have successfully transformed their operations with our AI solutions.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
              >
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Scale Your AI Initiatives?</h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're building your first AI product or scaling an existing platform, 
            we have the expertise and talent network to accelerate your success.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white hover:bg-slate-100 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your AI Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;