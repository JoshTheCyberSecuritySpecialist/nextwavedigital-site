import React, { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText';

interface TerminalWindowProps {
  lines: {
    text: string;
    delay?: number;
    className?: string;
    speed?: number;
  }[];
  className?: string;
  prefix?: string;
  autoStart?: boolean;
  loop?: boolean;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({
  lines,
  className = '',
  prefix = '$ ',
  autoStart = true,
  loop = false
}) => {
  const [activeLineIndex, setActiveLineIndex] = useState(autoStart ? 0 : -1);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  const handleLineComplete = (index: number) => {
    setVisibleLines(prev => [...prev, index]);
    
    if (index < lines.length - 1) {
      setTimeout(() => {
        setActiveLineIndex(index + 1);
      }, 300); // Brief pause between lines
    } else if (loop) {
      setTimeout(() => {
        setVisibleLines([]);
        setActiveLineIndex(0);
      }, 2000); // Longer pause before looping
    }
  };

  useEffect(() => {
    if (autoStart && activeLineIndex === -1) {
      setActiveLineIndex(0);
    }
  }, [autoStart]);

  return (
    <div className={`terminal-window ${className}`}>
      <div className="scanline"></div>
      {lines.map((line, index) => (
        <div key={index} className="flex">
          {index === activeLineIndex || visibleLines.includes(index) ? (
            <>
              <span className="terminal-text mr-2">{prefix}</span>
              {index === activeLineIndex ? (
                <AnimatedText
                  text={line.text}
                  className={line.className || 'terminal-text'}
                  speed={line.speed || 40}
                  delay={line.delay || 0}
                  onComplete={() => handleLineComplete(index)}
                />
              ) : (
                <span className={line.className || 'terminal-text'}>{line.text}</span>
              )}
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default TerminalWindow;