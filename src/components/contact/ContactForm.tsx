import React, { useState, useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import HackerButton from '../ui/HackerButton';
import TerminalWindow from '../ui/TerminalWindow';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      if (form.current) {
        await emailjs.sendForm(
          'service_ednhwxx',
          'template_contact',
          form.current,
          '7YhobKUauxxDa0Dsx'
        );
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const terminalLines = [
    { text: 'sudo ./exploit_simulation', className: 'text-yellow-400' },
    { text: 'Initializing security scan...', className: 'text-terminal-text', delay: 500 },
    { text: 'Checking email security...', className: 'text-terminal-text', delay: 1000 },
    { text: 'Scanning for vulnerabilities...', className: 'text-terminal-text', delay: 1500 },
    { text: 'Preparing report...', className: 'text-terminal-text', delay: 2000 },
    { text: 'Ready for consultation', className: 'text-hacker-green', delay: 2500 }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center section-title centered">
            <span className="terminal-text">Get Access</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-terminal-text">
                  Book your free exploit simulation
                </h3>
                <p className="text-gray-400 mb-4">
                  We'll show you what a hacker sees when they look at your organization. Our security experts will identify vulnerabilities and recommend protective measures.
                </p>
                <p className="terminal-text mb-6">
                  {'>'} No obligation. No cost. Just insight.
                </p>
              </div>
              
              <TerminalWindow
                lines={terminalLines}
                className="mb-6"
              />
            </div>
            
            <div className="card">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-hacker-green mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-terminal-text">Message Received</h3>
                  <p className="text-gray-400 mb-4">
                    Thank you for contacting Next Wave Digital Solutions. Our security team will respond within 24 hours.
                  </p>
                  <div className="terminal-window mt-6">
                    <pre className="text-hacker-green">
                      {`
> Connection secure
> Message encrypted
> Awaiting response...
                      `}
                    </pre>
                  </div>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-terminal-text mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-terminal-text mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-terminal-text mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-terminal-text mb-2">Service of Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="phishing">Phishing Simulation</option>
                      <option value="pentest">Penetration Testing</option>
                      <option value="endpoint">Endpoint Protection</option>
                      <option value="training">Security Training</option>
                      <option value="package">Security Package</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-terminal-text mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-sm"
                    ></textarea>
                  </div>
                  
                  {error && (
                    <div className="text-hacker-red text-sm">{error}</div>
                  )}
                  
                  <div className="pt-4">
                    <HackerButton 
                      type="submit" 
                      color="red" 
                      className="w-full flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Processing<span className="animate-pulse">...</span></>
                      ) : (
                        <>Send Secure Message <Send className="ml-2 h-4 w-4" /></>
                      )}
                    </HackerButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;