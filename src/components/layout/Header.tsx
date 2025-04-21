import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Terminal } from 'lucide-react';
import GlitchText from '../ui/GlitchText';
import HackerButton from '../ui/HackerButton';
import { NavItem } from '../../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Packages', path: '/packages' },
  { label: 'Case Files', path: '/case-files' },
  { label: 'Threat Lab', path: '/threat-lab' },
  { label: 'Get Access', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrollPosition > 50 ? 'bg-terminal-black bg-opacity-95 shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Shield className="h-8 w-8 text-hacker-green mr-2" />
            <GlitchText 
              text="NextWave" 
              className="text-lg font-bold mr-1"
              glitchInterval={7000}
            />
            <Terminal className="h-5 w-5 text-hacker-red" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-hacker-green ${
                  location.pathname === item.path ? 'text-hacker-green' : 'text-terminal-text'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <HackerButton to="/contact" color="red">
              Secure Access
            </HackerButton>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-terminal-text hover:text-hacker-green transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-terminal-black bg-opacity-95 shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-hacker-green ${
                    location.pathname === item.path ? 'text-hacker-green' : 'text-terminal-text'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <HackerButton to="/contact" color="red" className="self-start mt-2">
                Secure Access
              </HackerButton>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;