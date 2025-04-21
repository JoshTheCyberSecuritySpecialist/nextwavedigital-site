import React from 'react';
import TerminalWindow from '../ui/TerminalWindow';

const Mission: React.FC = () => {
  const missionText = [
    {
      text: 'cat mission_statement.txt',
      className: 'text-yellow-400',
    },
    {
      text: 'Next Wave Digital Solutions is a cyber-first outfit helping companies stay ahead of attackers.',
      className: 'text-terminal-text',
      delay: 500,
    },
    {
      text: 'We simulate real-world hacks, patch the weak links, and build digital armor around your people, platforms, and data.',
      className: 'text-terminal-text',
      delay: 500,
    },
    {
      text: 'cd tools/',
      className: 'text-yellow-400',
      delay: 1000,
    },
    {
      text: 'ls -la',
      className: 'text-yellow-400',
      delay: 500,
    }
  ];

  return (
    <section className="py-16 bg-dark-bg relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 section-title">
              <span className="terminal-text">Our Mission</span>
            </h2>
            <p className="text-terminal-text mb-6">
              Next Wave Digital Solutions is a cyber-first outfit helping companies stay ahead of attackers. We simulate real-world hacks, patch the weak links, and build digital armor around your people, platforms, and data.
            </p>
            <p className="text-terminal-text mb-6">
              Our team of ethical hackers and security engineers use the same tools and techniques as malicious actors, but with one key difference: we're on your side.
            </p>
            <p className="terminal-text">
              &gt; The best defense is knowing your vulnerabilities before the attackers do.
            </p>
          </div>
          
          <div>
            <TerminalWindow
              lines={missionText}
              className="shadow-lg"
            />
          </div>
        </div>
      </div>
      
      <div className="binary-bg absolute inset-0 z-0"></div>
    </section>
  );
};

export default Mission;