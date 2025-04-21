import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import HackerButton from '../components/ui/HackerButton';
import { Shield, Mail, Map, Phone } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-16 bg-terminal-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 terminal-text">
              Get Access
            </h1>
            <p className="text-terminal-text text-lg mb-6">
              Book your free exploit simulation. We'll show you what a hacker sees when they look at your organization.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="p-6 bg-medium-dark rounded-lg flex flex-col items-center">
                <Mail className="h-10 w-10 text-hacker-red mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-terminal-text">Email</h3>
                <p className="text-gray-400 text-center">
                  <a href="mailto:NextwaveDigitalSolutions@outlook.com" className="hover:text-hacker-green transition-colors">
                    NextwaveDigitalSolutions@outlook.com
                  </a>
                </p>
              </div>
              
              <div className="p-6 bg-medium-dark rounded-lg flex flex-col items-center">
                <Phone className="h-10 w-10 text-hacker-green mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-terminal-text">Phone</h3>
                <p className="text-gray-400 text-center">
                  <a href="tel:+18035421761" className="hover:text-hacker-green transition-colors">
                    +1 (803) 542-1761
                  </a>
                </p>
              </div>
              
              <div className="p-6 bg-medium-dark rounded-lg flex flex-col items-center">
                <Map className="h-10 w-10 text-hacker-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-terminal-text">Location</h3>
                <p className="text-gray-400 text-center">
                  Titusville<br />
                  Florida
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="binary-bg absolute inset-0 z-0"></div>
      </section>
      
      <ContactForm />
      
      <section className="py-16 bg-terminal-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 text-hacker-green mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 text-terminal-text">
              Emergency Response
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              If you're experiencing an active security incident or breach, our rapid response team is available 24/7.
            </p>
            <HackerButton to="/emergency" color="red" className="text-lg px-8 py-3">
              Activate Emergency Response
            </HackerButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;