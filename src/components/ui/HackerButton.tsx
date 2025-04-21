import React from 'react';
import { Link } from 'react-router-dom';

interface HackerButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  className?: string;
  color?: 'green' | 'red' | 'purple';
  type?: 'button' | 'submit' | 'reset';
  external?: boolean;
}

const HackerButton: React.FC<HackerButtonProps> = ({
  children,
  onClick,
  to,
  className = '',
  color = 'green',
  type = 'button',
  external = false
}) => {
  const colorClass = color === 'green' 
    ? 'hacker-btn' 
    : color === 'red' 
      ? 'hacker-btn red' 
      : 'hacker-btn purple';

  if (to) {
    if (external) {
      return (
        <a 
          href={to}
          target="_blank"
          rel="noopener noreferrer"
          className={`${colorClass} ${className}`}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link 
        to={to} 
        className={`${colorClass} ${className}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={`${colorClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default HackerButton;