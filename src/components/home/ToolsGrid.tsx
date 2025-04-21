import React from 'react';
import { Shield, Mail, Server, Key, Users, Database, Lock, AlertTriangle } from 'lucide-react';
import { Tool } from '../../types';

const tools: Tool[] = [
  {
    name: 'GoPhish',
    icon: 'Mail',
    description: 'Advanced phishing simulation platform'
  },
  {
    name: 'Evilginx',
    icon: 'Shield',
    description: 'Security testing for MFA'
  },
  {
    name: 'Metasploit',
    icon: 'Server',
    description: 'Penetration testing framework'
  },
  {
    name: 'EDR',
    icon: 'AlertTriangle',
    description: 'Endpoint Detection & Response'
  },
  {
    name: 'MFA',
    icon: 'Key',
    description: 'Multi-Factor Authentication'
  },
  {
    name: 'Social Engineering',
    icon: 'Users',
    description: 'Human vulnerability testing'
  }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Shield': return <Shield className="h-10 w-10" />;
    case 'Mail': return <Mail className="h-10 w-10" />;
    case 'Server': return <Server className="h-10 w-10" />;
    case 'Key': return <Key className="h-10 w-10" />;
    case 'Users': return <Users className="h-10 w-10" />;
    case 'Database': return <Database className="h-10 w-10" />;
    case 'Lock': return <Lock className="h-10 w-10" />;
    case 'AlertTriangle': return <AlertTriangle className="h-10 w-10" />;
    default: return <Shield className="h-10 w-10" />;
  }
};

const ToolsGrid: React.FC = () => {
  return (
    <section className="py-16 bg-terminal-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center section-title centered">
          <span className="terminal-text">Quick Tools</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="card flex flex-col items-center text-center hover:border-hacker-green transition-all"
            >
              <div className="mb-4 text-hacker-green">
                {getIcon(tool.icon)}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-terminal-text">
                {tool.name}
              </h3>
              <p className="text-sm text-gray-400">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;