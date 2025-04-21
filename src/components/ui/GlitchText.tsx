import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchInterval?: number;
  glitchDuration?: number;
  color?: 'green' | 'red' | 'purple';
}

const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = '',
  glitchInterval = 5000,
  glitchDuration = 200,
  color = 'green'
}) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsGlitching(true);
      
      setTimeout(() => {
        setIsGlitching(false);
      }, glitchDuration);
    }, glitchInterval);
    
    return () => clearInterval(intervalId);
  }, [glitchInterval, glitchDuration]);

  const colorClass = color === 'green' 
    ? 'terminal-text' 
    : color === 'red' 
      ? 'terminal-text-red' 
      : 'terminal-text-purple';

  return (
    <span 
      className={`${className} ${colorClass} ${isGlitching ? 'glitch' : ''}`}
      data-text={text}
    >
      {text}
    </span>
  );
};

export default GlitchText;