import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            Let's Build the <span className="text-blue-600">Future</span> Together
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to transform your business with AI? Get in touch and let's discuss how we can accelerate your success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 rounded-lg p-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Email</h4>
                  <p className="text-slate-600">info@lynette.in</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 rounded-lg p-3">
                  <Phone className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Phone</h4>
                  <p className="text-slate-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 rounded-lg p-3">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Location</h4>
                  <p className="text-slate-600">Gurugram, India</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Why Partner With Us?</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Industry-leading AI expertise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Vetted ML professionals</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Rapid deployment capabilities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span>Ongoing support and optimization</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-slate-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your AI project or staffing needs..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isSubmitted
                    ? 'bg-green-600 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;