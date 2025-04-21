import React from 'react';
import VideoGrid from '../components/threat-lab/VideoGrid';
import BlogGrid from '../components/threat-lab/BlogGrid';
import TerminalWindow from '../components/ui/TerminalWindow';

const ThreatLabPage: React.FC = () => {
  const terminalLines = [
    { text: './threat_lab.sh --initialize', className: 'text-yellow-400' },
    { text: 'Loading security intelligence database...', className: 'text-terminal-text', delay: 500 },
    { text: 'Connecting to threat feeds...', className: 'text-terminal-text', delay: 1000 },
    { text: 'Analyzing current attack vectors...', className: 'text-terminal-text', delay: 1500 },
    { text: 'Ready to display security knowledge resources', className: 'text-hacker-green', delay: 2000 }
  ];

  return (
    <>
      <section className="pt-32 pb-16 bg-terminal-black relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 terminal-text">
              Think Like an Attacker, Train Like a Defender
            </h1>
            <p className="text-terminal-text text-lg mb-6">
              Welcome to the Threat Lab — your resource for staying informed about the latest cyber threats, attack techniques, and defensive strategies.
            </p>
            
            <div className="max-w-xl mx-auto mt-8">
              <TerminalWindow
                lines={terminalLines}
                className="shadow-lg"
              />
            </div>
          </div>
        </div>
        <div className="binary-bg absolute inset-0 z-0"></div>
      </section>
      
      <VideoGrid />
      <BlogGrid />
    </>
  );
};

export default ThreatLabPage;