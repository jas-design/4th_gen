/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { Page } from '../types';

interface HeroProps {
  onCtaClick: (page: Page) => void;
}

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1628412852155-d144e051ae94?auto=format&fit=crop&q=80&w=2070',
    title: 'Reliable Roofing Services You Can Trust',
    subtitle: '4th Generation family-owned expertise. Fast, insured, and built to last.',
    cta1: 'Get Free Estimate',
    cta2: 'Our Services',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?auto=format&fit=crop&q=80&w=2070',
    title: 'Quality Craftsmanship for Your Family Home',
    subtitle: 'Expert roof replacements and repairs with industry-leading warranties.',
    cta1: 'Schedule Inspection',
    cta2: 'View Gallery',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1635424710928-0544e8512ffe?auto=format&fit=crop&q=80&w=2070',
    title: 'Emergency Storm Damage Repairs',
    subtitle: 'Available when you need us most. Same-day service in many locations.',
    cta1: 'Call for Emergency',
    cta2: 'Learn More',
  }
];

export default function Hero({ onCtaClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] md:h-[90vh] overflow-hidden bg-secondary">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-secondary/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                <ShieldCheck size={14} className="mr-2" />
                Licensed & Insured Professional Roofing
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 drop-shadow-sm">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-medium">
                {slides[currentSlide].subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => onCtaClick('contact')}
                  className="cta-button-primary text-lg px-8 py-4"
                >
                  {slides[currentSlide].cta1}
                </button>
                <button 
                  onClick={() => onCtaClick(currentSlide === 1 ? 'gallery' : 'services')}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-lg border border-white/30 transition-all text-center"
                >
                  {slides[currentSlide].cta2}
                </button>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-8">
                <div className="flex items-center text-white/80">
                  <Clock size={20} className="text-primary mr-2" />
                  <span className="text-sm font-semibold">Same-Day Service</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Award size={20} className="text-primary mr-2" />
                  <span className="text-sm font-semibold">Lifetime Warranty</span>
                </div>
                <div className="flex items-center text-white/80">
                  <ShieldCheck size={20} className="text-primary mr-2" />
                  <span className="text-sm font-semibold">Certified GAF Master</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slider Controls */}
      <div className="absolute bottom-8 right-8 flex space-x-2">
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-primary transition-colors border border-white/20"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-primary transition-colors border border-white/20"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1 transition-all duration-300 rounded-full ${
              idx === currentSlide ? 'w-8 bg-primary' : 'w-4 bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
