import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Rss, Shield, Mail, Twitter } from 'lucide-react';
import GlitchText from '../ui/GlitchText';

const Footer: React.FC = () => {
  return (
    <footer className="bg-terminal-black border-t border-light-dark">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-hacker-green mr-2" />
              <GlitchText 
                text="NextWave" 
                className="text-lg font-bold" 
                color="green"
              />
            </div>
            <p className="text-terminal-text text-sm mb-4">
              We simulate real-world hacks, patch weak links, and build digital armor around your people, platforms, and data.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-terminal-text hover:text-hacker-purple transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-terminal-text hover:text-hacker-red transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-terminal-text hover:text-hacker-green transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-terminal-text hover:text-hacker-green transition-colors">
                <Rss className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-terminal-text font-bold mb-4">Terminal Nav</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-terminal-text hover:text-hacker-green transition-colors text-sm">Services</Link></li>
              <li><Link to="/packages" className="text-terminal-text hover:text-hacker-green transition-colors text-sm">Packages</Link></li>
              <li><Link to="/case-files" className="text-terminal-text hover:text-hacker-green transition-colors text-sm">Case Files</Link></li>
              <li><Link to="/threat-lab" className="text-terminal-text hover:text-hacker-green transition-colors text-sm">Threat Lab</Link></li>
              <li><Link to="/contact" className="text-terminal-text hover:text-hacker-green transition-colors text-sm">Get Access</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-terminal-text font-bold mb-4">Tool Tags</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-medium-dark px-2 py-1 text-xs text-hacker-green rounded">GoPhish</span>
              <span className="bg-medium-dark px-2 py-1 text-xs text-hacker-red rounded">Evilginx</span>
              <span className="bg-medium-dark px-2 py-1 text-xs text-hacker-green rounded">Wireshark</span>
              <span className="bg-medium-dark px-2 py-1 text-xs text-hacker-purple rounded">Defender</span>
              <span className="bg-medium-dark px-2 py-1 text-xs text-hacker-green rounded">Burp Suite</span>
              <span className="bg-medium-dark px-2 py-1 text-xs text-hacker-red rounded">Metasploit</span>
              <span className="bg-medium-dark px-2 py-1 text-xs text-hacker-purple rounded">EDR</span>
              <span className="bg-medium-dark px-2 py-1 text-xs text-hacker-green rounded">MFA</span>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-terminal-text font-bold mb-4">Downloads</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-terminal-text hover:text-hacker-green transition-colors text-sm">[ Service Brief.pdf ]</a></li>
              <li><a href="#" className="text-terminal-text hover:text-hacker-green transition-colors text-sm">[ Security Stack.pdf ]</a></li>
              <li><a href="#" className="text-terminal-text hover:text-hacker-green transition-colors text-sm">[ Dark Web Alerts Signup ]</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-light-dark mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-terminal-text text-xs mb-4 md:mb-0">
            <pre className="font-mono">
              {`
  _   _           _   _                     
 | \\ | |         | | | |                    
 |  \\| | _____  _| |_| |    ___ _____   ___ 
 | . \` |/ _ \\ \\/ / __| |   / __/ _ \\ \\ / / |
 | |\\  |  __/>  <| |_| |_ _\\__ \\  __/\\ V /| |
 |_| \\_|\\___/_/\\_\\\\__|\\___(_)___/\\___| \\_/ |_|
              `}
            </pre>
          </div>
          <div className="text-terminal-text text-xs">
            &copy; {new Date().getFullYear()} Next Wave Digital Solutions. All rights reserved. <span className="text-hacker-green">[SECURED]</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;