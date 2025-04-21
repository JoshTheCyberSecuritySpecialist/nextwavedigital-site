import React from 'react';
import CaseStudiesGrid from '../components/case-files/CaseStudiesGrid';
import ContactForm from '../components/contact/ContactForm';

const CaseFilesPage: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-16 bg-terminal-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 terminal-text">
              Case Files: Breach Attempts Blocked
            </h1>
            <p className="text-terminal-text text-lg mb-6">
              Real-world examples of cyber attacks that were detected and prevented by our security team. These case studies show how we protect organizations from evolving threats.
            </p>
          </div>
        </div>
        <div className="binary-bg absolute inset-0 z-0"></div>
      </section>
      
      <CaseStudiesGrid />
      <ContactForm />
    </>
  );
};

export default CaseFilesPage;