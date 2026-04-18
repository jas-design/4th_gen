/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'About Us', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`glass-header ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => setCurrentPage('home')}
          >
            <div className="flex flex-col">
              <span className="text-2xl font-black font-display text-secondary leading-none group-hover:text-primary transition-colors">
                4TH<span className="text-primary group-hover:text-secondary">GEN</span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-gray-500 group-hover:text-primary uppercase">
                Roofing
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  currentPage === item.id ? 'text-primary' : 'text-secondary hover:text-primary'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+18005551234" 
              className="flex items-center text-secondary font-bold hover:text-primary transition-colors"
            >
              <Phone size={18} className="mr-2" />
              (800) 555-1234
            </a>
            <button 
              onClick={() => setCurrentPage('contact')}
              className="cta-button-primary text-sm px-5 py-2.5 flex items-center"
            >
              <Calendar size={16} className="mr-2" />
              Get Free Estimate
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-secondary p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-4 text-base font-bold rounded-lg ${
                    currentPage === item.id 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-secondary hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <a 
                  href="tel:+18005551234" 
                  className="flex items-center justify-center p-3 text-secondary font-bold border-2 border-secondary rounded-lg"
                >
                  <Phone size={18} className="mr-2" />
                  Call Us Now
                </a>
                <button 
                  onClick={() => {
                    setCurrentPage('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="cta-button-primary w-full p-3 flex items-center justify-center"
                >
                  <Calendar size={18} className="mr-2" />
                  Free Estimate
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
