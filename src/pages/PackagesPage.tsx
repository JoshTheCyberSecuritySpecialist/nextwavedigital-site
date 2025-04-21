import React from 'react';
import PricingPackages from '../components/packages/PricingPackages';
import ContactForm from '../components/contact/ContactForm';

const PackagesPage: React.FC = () => {
  return (
    <>
      <section className="pt-32 pb-16 bg-terminal-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 terminal-text">
              Pick Your Security Stack
            </h1>
            <p className="text-terminal-text text-lg mb-6">
              Choose from our pre-configured security packages or let us build a custom solution tailored to your organization's unique needs and threat profile.
            </p>
          </div>
        </div>
        <div className="binary-bg absolute inset-0 z-0"></div>
      </section>
      
      <PricingPackages />
      <ContactForm />
    </>
  );
};

export default PackagesPage;