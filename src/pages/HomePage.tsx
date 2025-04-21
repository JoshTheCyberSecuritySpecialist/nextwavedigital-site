import React from 'react';
import Hero from '../components/home/Hero';
import Mission from '../components/home/Mission';
import ToolsGrid from '../components/home/ToolsGrid';
import ServicesGrid from '../components/services/ServicesGrid';
import CaseStudiesGrid from '../components/case-files/CaseStudiesGrid';
import BlogGrid from '../components/threat-lab/BlogGrid';
import ContactForm from '../components/contact/ContactForm';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Mission />
      <ToolsGrid />
      <ServicesGrid />
      <CaseStudiesGrid />
      <BlogGrid />
      <ContactForm />
    </>
  );
};

export default HomePage;