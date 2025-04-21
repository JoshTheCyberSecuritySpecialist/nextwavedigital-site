import React from 'react';
import { Terminal, ShieldAlert } from 'lucide-react';
import HackerButton from '../ui/HackerButton';
import GlitchText from '../ui/GlitchText';
import MatrixRain from '../ui/MatrixRain';
import AnimatedText from '../ui/AnimatedText';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <MatrixRain opacity={0.2} />
      <div className="scanline"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center mb-4">
            <Terminal className="text-hacker-red h-10 w-10 mr-2" />
            <ShieldAlert className="text-hacker-green h-10 w-10" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <GlitchText 
              text="Hack the Hackers." 
              className="block mb-2"
              color="green"
            />
            <span className="text-terminal-text block">
              <AnimatedText 
                text="We Simulate Real Threats Before They Hit." 
                speed={50}
                className="terminal-text"
              />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-terminal-text mb-8">
            <GlitchText 
              text="One phishing email almost cost a business $80K." 
              color="red"
              glitchInterval={4000}
            />
            <span className="terminal-text ml-2">We caught it first.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HackerButton to="/contact" className="text-lg">
              Launch a Free Phishing Sim
            </HackerButton>
            <HackerButton to="/services" color="red" className="text-lg">
              Scan for Weaknesses
            </HackerButton>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <span className="animate-bounce inline-block text-terminal-text">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </span>
      </div>
    </section>
  );
};

export default Hero;