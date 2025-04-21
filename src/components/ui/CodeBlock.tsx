import React, { useEffect, useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  animate?: boolean;
  className?: string;
  highlightedLines?: number[];
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'javascript',
  animate = true,
  className = '',
  highlightedLines = []
}) => {
  const [displayedCode, setDisplayedCode] = useState(animate ? '' : code);
  const [isAnimating, setIsAnimating] = useState(animate);
  
  useEffect(() => {
    if (!animate) return;
    
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= code.length) {
        setDisplayedCode(code.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsAnimating(false);
      }
    }, 20);
    
    return () => clearInterval(interval);
  }, [code, animate]);

  const formatCode = (codeString: string) => {
    if (!codeString) return [];
    
    return codeString.split('\n').map((line, index) => {
      const isHighlighted = highlightedLines.includes(index + 1);
      
      return (
        <div 
          key={index} 
          className={`${isHighlighted ? 'bg-hacker-green bg-opacity-10' : ''}`}
        >
          <span className="text-gray-500 mr-4 select-none">{index + 1}</span>
          {line || ' '}
        </div>
      );
    });
  };

  return (
    <div className={`bg-terminal-black rounded-md p-4 overflow-auto ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400 text-sm">{language}</span>
        {isAnimating && (
          <span className="text-hacker-green text-sm animate-pulse">
            typing...
          </span>
        )}
      </div>
      <pre className="font-mono text-sm text-terminal-text">
        <code>
          {formatCode(displayedCode)}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;