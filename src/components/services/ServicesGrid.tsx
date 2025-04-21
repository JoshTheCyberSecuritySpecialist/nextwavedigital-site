import React from 'react';
import { Shield, Database, Server, Key, Users, AlertTriangle, Lock, Eye } from 'lucide-react';
import { ServiceCardProps } from '../../types';
import HackerButton from '../ui/HackerButton';

const offensiveServices: ServiceCardProps[] = [
  {
    title: 'Phishing Simulations',
    description: 'Realistic spear phishing and pharming attacks to test your team\'s awareness.',
    icon: 'Mail'
  },
  {
    title: 'Credential Harvesting',
    description: 'Identify exposed credentials and implement protection measures.',
    icon: 'Key'
  },
  {
    title: 'Penetration Testing',
    description: 'Comprehensive network and web application security assessments.',
    icon: 'Server'
  },
  {
    title: 'MFA Configuration',
    description: 'Implementation and testing of multi-factor authentication systems.',
    icon: 'Shield'
  },
  {
    title: 'Email Spoofing Detection',
    description: 'DNS hardening and protection against email-based attacks.',
    icon: 'Mail'
  },
  {
    title: 'Red Team Assessments',
    description: 'Live simulated attacks against your infrastructure and personnel.',
    icon: 'AlertTriangle'
  }
];

const defensiveServices: ServiceCardProps[] = [
  {
    title: 'Endpoint Protection',
    description: 'Modern EDR/XDR solutions to protect your devices against threats.',
    icon: 'Shield'
  },
  {
    title: 'Website/App Hardening',
    description: 'Security reinforcement for your digital assets and customer-facing services.',
    icon: 'Lock'
  },
  {
    title: 'Secure Payment Integration',
    description: 'Crypto/XRP payment integration with enhanced security measures.',
    icon: 'Database'
  },
  {
    title: 'Zero Trust Framework',
    description: 'Design and implementation of comprehensive zero trust architecture.',
    icon: 'Users'
  },
  {
    title: 'SIEM Dashboard',
    description: 'Security information and event management system configuration.',
    icon: 'Eye'
  }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Shield': return <Shield className="h-8 w-8" />;
    case 'Mail': return <Shield className="h-8 w-8" />;
    case 'Server': return <Server className="h-8 w-8" />;
    case 'Key': return <Key className="h-8 w-8" />;
    case 'Users': return <Users className="h-8 w-8" />;
    case 'Database': return <Database className="h-8 w-8" />;
    case 'Lock': return <Lock className="h-8 w-8" />;
    case 'AlertTriangle': return <AlertTriangle className="h-8 w-8" />;
    case 'Eye': return <Eye className="h-8 w-8" />;
    default: return <Shield className="h-8 w-8" />;
  }
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="card group">
      <div className="mb-4 text-hacker-green group-hover:text-hacker-green transition-colors">
        {getIcon(icon)}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-terminal-text group-hover:text-hacker-green transition-colors">
        {title}
      </h3>
      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
};

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-16 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center section-title centered">
          <span className="terminal-text">Our Services</span>
        </h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 section-title">
            <span className="terminal-text-red">Offensive Security Services</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offensiveServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 section-title">
            <span className="terminal-text">Defensive Engineering</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defensiveServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <HackerButton to="/contact">
            Get Your Security Assessment
          </HackerButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;