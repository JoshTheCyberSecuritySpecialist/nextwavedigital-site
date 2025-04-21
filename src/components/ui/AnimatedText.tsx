import React, { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  speed = 40,
  delay = 0,
  onComplete
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: number;
    
    if (delay > 0 && currentIndex === 0) {
      timeout = setTimeout(() => {
        typeNextCharacter();
      }, delay);
      
      return () => clearTimeout(timeout);
    }
    
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        typeNextCharacter();
      }, speed);
      
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      if (onComplete) onComplete();
    }
  }, [currentIndex, delay]);

  const typeNextCharacter = () => {
    setDisplayText(text.substring(0, currentIndex + 1));
    setCurrentIndex(prev => prev + 1);
  };

  return (
    <span className={`${className} ${isComplete ? '' : 'typing-effect'}`}>
      {displayText}
    </span>
  );
};

export default AnimatedText;