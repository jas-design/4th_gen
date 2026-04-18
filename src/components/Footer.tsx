/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
             <div 
              className="flex flex-col cursor-pointer" 
              onClick={() => { setCurrentPage('home'); scrollToTop(); }}
            >
              <span className="text-3xl font-black font-display text-white leading-none">
                4TH<span className="text-primary">GEN</span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-gray-300 uppercase">
                Roofing
              </span>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed max-w-xs">
              Providing top-tier roofing solutions for four generations. We combine traditional craftsmanship with modern technology to protect your home.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Gallery', 'About Us', 'Contact'].map((item, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => {
                        const pageLabel = item.toLowerCase().replace(' ', '');
                        const targetPage = (pageLabel === 'aboutus' ? 'about' : pageLabel) as Page;
                        setCurrentPage(targetPage);
                        scrollToTop();
                    }}
                    className="text-gray-200 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-200 text-sm font-medium">
              {['Residential Roofing', 'Commercial Roofing', 'Roof Repair', 'Storm Damage', 'Gutters & Siding'].map((item, idx) => (
                <li key={idx} className="hover:text-primary cursor-pointer transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary mr-3 mt-1 shrink-0" size={18} />
                <span className="text-gray-200 text-sm leading-relaxed">
                  123 Roofing Lane, Suite 100<br />
                  Chicago, IL 60601
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary mr-3 shrink-0" size={18} />
                <a href="tel:+18005551234" className="text-gray-200 hover:text-primary transition-colors text-sm font-medium">
                  (800) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary mr-3 shrink-0" size={18} />
                <a href="mailto:info@4thgenroofing.com" className="text-gray-200 hover:text-primary transition-colors text-sm font-medium">
                  info@4thgenroofing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500 font-bold uppercase tracking-widest">
          <p>© 2026 4th Generation Roofing. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="group flex items-center hover:text-white transition-colors"
          >
            Back to top
            <ArrowUp size={14} className="ml-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
