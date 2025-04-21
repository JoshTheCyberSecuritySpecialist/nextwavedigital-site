import React from 'react';
import ServicesGrid from '../components/services/ServicesGrid';
import ToolsGrid from '../components/home/ToolsGrid';
import ContactForm from '../components/contact/ContactForm';

const ServicesPage: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-16 bg-terminal-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 terminal-text">
              Offensive Security Services
            </h1>
            <p className="text-terminal-text text-lg mb-6">
              We use the same tools and techniques as malicious hackers, but with one key difference: we're on your side. Our offensive security services identify vulnerabilities before real attackers can exploit them.
            </p>
          </div>
        </div>
        <div className="binary-bg absolute inset-0 z-0"></div>
      </section>
      
      <ServicesGrid />
      <ToolsGrid />
      <ContactForm />
    </>
  );
};

export default ServicesPage;