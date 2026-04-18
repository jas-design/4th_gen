/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import PageTransition from './components/PageTransition';
import { Page } from './types';
import { AnimatePresence } from 'motion/react';
import { Phone } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showStickyCall, setShowStickyCall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCall(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'gallery':
        return <Gallery />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <PageTransition id={currentPage}>
            {renderPage()}
          </PageTransition>
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* Sticky Mobile Call Button */}
      <AnimatePresence>
        {showStickyCall && (
          <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end space-y-4">
             <button 
              onClick={() => setCurrentPage('contact')}
              className="md:hidden bg-primary text-white p-4 rounded-full shadow-2xl animate-bounce"
            >
              <Phone size={24} />
            </button>
            <div className="hidden md:flex bg-white/90 backdrop-blur-md border border-gray-100 p-4 rounded-2xl shadow-2xl items-center space-x-4 animate-in fade-in slide-in-from-right-10 duration-500">
               <div className="bg-primary/10 p-2 rounded-lg">
                  <Phone className="text-primary" size={20} />
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 leading-none mb-1">Emergency Service</p>
                  <a href="tel:+18005551234" className="text-lg font-display font-black text-secondary hover:text-primary transition-colors leading-none">
                    (800) 555-1234
                  </a>
               </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
