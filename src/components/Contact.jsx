import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Phone } from 'lucide-react';
import { portfolioConfig } from '../portfolioConfig';

export default function Contact() {
  const { email, github, linkedin, location } = portfolioConfig.personalInfo;
  
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      return;
    }
    
    // Simulate successful form submit
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3" id="contact-section-subtitle">
            05 . Connection
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight" id="contact-section-title">
            Get In Touch
          </h3>
          <p className="text-slate-400 mt-2">Let's build something epic together. Reach out for collaboration or inquiries.</p>
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Details Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <h4 className="text-2xl font-bold text-white mb-4">Contact Info</h4>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 glass-card p-5 rounded-2xl border border-white/5 hover:border-purple-500/20 transition-all duration-300">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-medium text-slate-400 uppercase">Email</h5>
                  <a href={`mailto:${email}`} className="text-sm font-semibold text-white hover:text-purple-300 transition-colors duration-200">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 glass-card p-5 rounded-2xl border border-white/5 hover:border-blue-500/20 transition-all duration-300">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-medium text-slate-400 uppercase">Location</h5>
                  <p className="text-sm font-semibold text-white">{location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 glass-card p-5 rounded-2xl border border-white/5 hover:border-pink-500/20 transition-all duration-300">
                <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-medium text-slate-400 uppercase">Phone</h5>
                  <p className="text-sm font-semibold text-white">+91 98765 43210</p>
                </div>
              </div>
            </div>

            {/* Social Connects */}
            <div className="pt-6">
              <h5 className="text-slate-300 font-semibold mb-4">Or connect with me on</h5>
              <div className="flex gap-4">
                <a href={github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 text-slate-300 hover:text-white hover:bg-purple-500/10 transition-all duration-300" id="contact-social-github">
                  <Github className="w-5 h-5" />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 text-slate-300 hover:text-white hover:bg-purple-500/10 transition-all duration-300" id="contact-social-linkedin">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 sm:p-10 border border-white/5"
            >
              <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-slate-900/50 border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="w-full bg-slate-900/50 border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full bg-slate-900/50 border border-white/10 focus:border-purple-500/50 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none resize-none transition-colors duration-300"
                  />
                </div>

                {/* Feedback messages */}
                {status === 'success' && (
                  <p className="text-sm font-semibold text-emerald-400" id="contact-success-msg">
                    Message sent successfully! I will get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm font-semibold text-rose-400" id="contact-error-msg">
                    Please fill out all fields.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:from-blue-800 disabled:to-purple-800 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-purple-900/20 hover:shadow-purple-900/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer"
                  id="contact-submit-btn"
                >
                  {status === 'sending' ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
