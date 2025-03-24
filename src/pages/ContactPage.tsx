import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setStatusMessage('Please enter a valid email address');
      return;
    }

    // We don't need to check isSupabaseConfigured() anymore since we're using hardcoded values
    setStatus('loading');
    
    try {
      // Save to Supabase with proper error handling
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            subject: formData.subject || null,
            message: formData.message
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      setStatus('success');
      setStatusMessage('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setStatus('error');
      setStatusMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="pt-28 md:pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4 md:mb-6">
                Get in Touch
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Have questions about our AI automation solutions? Need a custom quote? 
                Our team is ready to help you transform your business.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <div className="chrome-effect rounded-xl p-6 md:p-8 space-y-6 md:space-y-8 h-full">
                  <div>
                    <h2 className="text-2xl font-bold gradient-text mb-4 md:mb-6">Contact Information</h2>
                    <p className="text-gray-400 mb-6 md:mb-8">
                      Reach out to us through any of these channels and we'll respond as soon as possible.
                    </p>
                  </div>

                  <div className="space-y-5 md:space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-gray-800/50 flex-shrink-0">
                        <Mail className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                        <p className="text-gray-400">work@mashautomation.in</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-gray-800/50 flex-shrink-0">
                        <Phone className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                        <p className="text-gray-400">+918178490194</p>
                        <p className="text-gray-400">+21625919997</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-full bg-gray-800/50 flex-shrink-0">
                        <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                        <p className="text-gray-400">Ghazela, Ariana, Tunisia</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-lg font-semibold text-white mb-3">Book a Meeting</h3>
                    <a
                      href="https://cal.com/mash-automation/ai-consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 md:px-6 md:py-3 mt-2 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
                    >
                      <MessageSquare className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      Schedule AI Consultation
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8">
              <ScrollReveal delay={200}>
                <div className="chrome-effect rounded-xl p-6 md:p-8 h-full">
                  <h2 className="text-2xl font-bold gradient-text mb-6">Send Us a Message</h2>
                  
                  {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-8 md:py-12 text-center">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                        <Send className="h-8 w-8 text-green-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-400 max-w-md">
                        {statusMessage}
                      </p>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="mt-6 px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <label htmlFor="name" className="block text-white mb-2">Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-white"
                            disabled={status === 'loading'}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-white mb-2">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-white"
                            disabled={status === 'loading'}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-white mb-2">Phone (Optional)</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-white"
                            disabled={status === 'loading'}
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                          <select
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-white"
                            disabled={status === 'loading'}
                          >
                            <option value="">Select a subject</option>
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Custom Solution">Custom Solution</option>
                            <option value="Pricing">Pricing</option>
                            <option value="Technical Support">Technical Support</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-white mb-2">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-white"
                          disabled={status === 'loading'}
                        ></textarea>
                      </div>
                      
                      {status === 'error' && (
                        <div className="text-red-400 text-sm">
                          {statusMessage}
                        </div>
                      )}
                      
                      <div>
                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          className="w-full sm:w-auto px-8 py-3 bg-white hover:bg-gray-100 text-black rounded-full font-medium transition-colors flex items-center justify-center"
                        >
                          {status === 'loading' ? (
                            <>
                              <Loader2 className="animate-spin h-5 w-5 mr-2" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-12 md:mt-16 chrome-effect rounded-xl p-6 md:p-8 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h2 className="text-2xl font-bold gradient-text mb-4 md:mb-6">Our AI Solutions</h2>
                  <p className="text-gray-400 mb-4 md:mb-6">
                    MASH specializes in creating cutting-edge AI automation solutions tailored to your specific business needs. Our team of experts combines technical expertise with industry knowledge to deliver transformative results.
                  </p>
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                      <p className="text-gray-300">Custom Chatbot Development</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                      <p className="text-gray-300">AI Voice Agents</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                      <p className="text-gray-300">Integration Services</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-white rounded-full"></div>
                      <p className="text-gray-300">Workflow Automation</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] rounded-xl overflow-hidden mt-4 lg:mt-0">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12952.082533194611!2d10.18353592184801!3d36.891899000000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb7254b0ee4f%3A0x7e87e33674451f9e!2sEl%20Ghazala%2C%20Ariana%2C%20Tunisia!5e0!3m2!1sen!2s!4v1697635138297!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage; 