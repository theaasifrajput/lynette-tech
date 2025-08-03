import React from 'react';
import { Brain, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">Lynette Technologies</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md leading-relaxed">
              Delivering cutting-edge AI services and machine learning staffing solutions 
              to help businesses scale their AI initiatives rapidly and effectively.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors duration-200">
                <Linkedin className="h-5 w-5 text-blue-400" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors duration-200">
                <Twitter className="h-5 w-5 text-blue-400" />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors duration-200">
                <Github className="h-5 w-5 text-blue-400" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">AI Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">ML Staffing</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Platform Launch</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">AI Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 Lynette Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;