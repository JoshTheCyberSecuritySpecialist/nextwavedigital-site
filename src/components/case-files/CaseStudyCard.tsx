import React, { useState } from 'react';
import { CaseStudy } from '../../types';
import HackerButton from '../ui/HackerButton';
import TerminalWindow from '../ui/TerminalWindow';
import CodeBlock from '../ui/CodeBlock';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const terminalLines = [
    { text: `cd /case-files/${caseStudy.id}`, className: 'text-yellow-400' },
    { text: 'cat summary.txt', className: 'text-yellow-400', delay: 500 },
    { text: caseStudy.summary, className: 'text-terminal-text', delay: 500 },
    { text: 'ls -la tools/', className: 'text-yellow-400', delay: 1000 }
  ];

  return (
    <div className="card border border-light-dark overflow-hidden">
      <div className="scanline opacity-20"></div>
      
      <h3 className="text-2xl font-bold mb-4 text-terminal-text">
        <span className="text-hacker-red mr-2">Breach Attempt:</span>
        <span className="text-hacker-green">Blocked</span>
      </h3>
      
      <h4 className="text-xl font-semibold mb-6 terminal-text">
        {caseStudy.title}
      </h4>
      
      <div className="mb-6">
        <TerminalWindow
          lines={terminalLines}
          className="mb-4"
        />
      </div>
      
      {isExpanded && (
        <div className="mt-6 space-y-4">
          <h5 className="text-lg font-semibold text-terminal-text">Attack Details:</h5>
          <ul className="space-y-2 mb-4">
            {caseStudy.details.map((detail, index) => (
              <li key={index} className="text-terminal-text text-sm flex">
                <span className="text-hacker-red mr-2">&gt;</span>
                {detail}
              </li>
            ))}
          </ul>
          
          <h5 className="text-lg font-semibold text-terminal-text">Tools Used:</h5>
          <div className="flex flex-wrap gap-2 mb-4">
            {caseStudy.tools.map((tool, index) => (
              <span key={index} className="bg-medium-dark px-2 py-1 text-xs text-hacker-green rounded">
                {tool}
              </span>
            ))}
          </div>
          
          <h5 className="text-lg font-semibold text-terminal-text">Outcome:</h5>
          <CodeBlock
            code={caseStudy.outcome}
            language="bash"
            className="mb-4"
          />
        </div>
      )}
      
      <div className="text-center mt-6">
        <HackerButton onClick={toggleExpanded} color="green">
          {isExpanded ? 'Hide Details' : 'View Attack Simulation'}
        </HackerButton>
      </div>
    </div>
  );
};

export default CaseStudyCard;