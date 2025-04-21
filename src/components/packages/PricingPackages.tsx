import React from 'react';
import { Check, Shield, ShieldAlert, ShieldCheck } from 'lucide-react';
import HackerButton from '../ui/HackerButton';
import { PackagePlan } from '../../types';

const packages: PackagePlan[] = [
  {
    title: 'Recon Kit',
    price: '$2,999',
    description: 'Basic security assessment and initial protection setup',
    features: [
      'Phishing Simulation Campaign',
      'MFA Setup & Configuration',
      'Email Security Scan',
      'Basic Vulnerability Assessment',
      'Security Awareness Training',
    ],
    color: 'green'
  },
  {
    title: 'Tactical Defense Suite',
    price: '$7,999',
    description: 'Comprehensive security for growing businesses',
    features: [
      'Everything in Recon Kit',
      'EDR Implementation',
      'Website Penetration Test',
      'Network Security Assessment',
      'Offsite Backup Setup',
      'Dark Web Monitoring',
      'Quarterly Security Reviews'
    ],
    color: 'purple'
  },
  {
    title: 'Black Ops Protection',
    price: '$14,999',
    description: 'Enterprise-grade security with constant monitoring',
    features: [
      'Everything in Tactical Defense',
      'Live Red Team Simulation',
      'Custom Security Dashboard',
      'Zero Trust Implementation',
      'Monthly Threat Hunting',
      'SIEM Integration',
      'Social Engineering Tests',
      '24/7 Incident Response'
    ],
    color: 'red'
  }
];

const PackageCard: React.FC<PackagePlan> = ({ title, price, description, features, color }) => {
  const getIcon = () => {
    switch(title) {
      case 'Recon Kit':
        return <Shield className={`h-10 w-10 text-hacker-${color}`} />;
      case 'Tactical Defense Suite':
        return <ShieldCheck className={`h-10 w-10 text-hacker-${color}`} />;
      case 'Black Ops Protection':
        return <ShieldAlert className={`h-10 w-10 text-hacker-${color}`} />;
      default:
        return <Shield className={`h-10 w-10 text-hacker-${color}`} />;
    }
  };

  return (
    <div className={`card border border-hacker-${color} relative overflow-hidden`}>
      {/* Highlight effect on hover */}
      <div className={`absolute inset-0 bg-hacker-${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
      
      <div className="mb-6 flex justify-center">
        {getIcon()}
      </div>
      
      <h3 className={`text-2xl font-bold mb-2 text-hacker-${color} text-center`}>
        {title}
      </h3>
      
      <div className="text-center mb-6">
        <span className="text-3xl font-bold text-terminal-text">{price}</span>
      </div>
      
      <p className="text-gray-400 mb-6 text-center">
        {description}
      </p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className={`h-5 w-5 text-hacker-${color} mr-2 flex-shrink-0 mt-0.5`} />
            <span className="text-terminal-text text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="text-center">
        <HackerButton color={color as 'green' | 'red' | 'purple'} to="/contact">
          Select Plan
        </HackerButton>
      </div>
    </div>
  );
};

const PricingPackages: React.FC = () => {
  return (
    <section className="py-16 bg-dark-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          <span className="terminal-text">Pick Your Security Stack</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Customized security packages designed to protect organizations of all sizes. Each tier builds on the previous one for comprehensive protection.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Need a custom solution? We'll build a security plan that fits your specific needs.
          </p>
          <HackerButton to="/contact" color="purple">
            Get Custom Quote
          </HackerButton>
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;