/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import ServiceOverview from '../components/ServiceOverview';
import { Page } from '../types';
import { Phone, ArrowRight, ShieldCheck, Zap, Users, Star } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="space-y-0">
      <Hero onCtaClick={onNavigate} />
      
      <TrustSection />
      
      <ServiceOverview onCtaClick={onNavigate} />

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 10 L100 0 L100 100 L0 100 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The 4th Generation Difference</span>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8 leading-tight">
                Why Thousands of Local Families Choose Us
              </h2>
              <div className="space-y-8">
                {[
                  { icon: Zap, title: 'Extreme Speed', desc: 'Most residential roof replacements completed in a single day.' },
                  { icon: ShieldCheck, title: 'Rock-Solid Warranty', desc: 'Transferable lifetime warranties on materials and labor.' },
                  { icon: Users, title: 'Family Values', desc: 'No complex corporate red tape. You deal with owners who care.' },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-6 shrink-0 border border-white/20">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-200 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl scale-95 hover:scale-100 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=2070" 
                  alt="Roofing Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <p className="text-white font-medium italic mb-2">"Highest safety standards we've ever seen on a job site."</p>
                  <p className="text-white font-black uppercase tracking-widest text-[10px] bg-primary/80 px-2 py-1 rounded inline-block">OSHA 30 Certified Team</p>
                </div>
              </div>
              {/* Floating Stat Card */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-2xl shadow-2xl hidden md:block"
              >
                <div className="text-4xl font-display font-black mb-1">98%</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">Referral Rate</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between text-white shadow-2xl shadow-primary/30 relative overflow-hidden group">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-xl mb-10 md:mb-0">
              <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-6 leading-tight">
                Ready to Protect Your Greatest Investment?
              </h2>
              <p className="text-white/90 text-lg mb-8 font-medium">
                Our estimates are 100% free, no-obligation, and valid for 30 days. Get starting today.
              </p>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-secondary hover:text-white transition-all shadow-lg"
                >
                  Book Free Estimate
                </button>
                <div className="flex h-12 w-12 border-2 border-white/30 rounded-full items-center justify-center animate-pulse">
                  <Phone size={20} />
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center md:items-end">
              <div className="text-6xl md:text-7xl font-display font-black mb-4">4.9</div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#FFFFFF" className="text-white" />)}
              </div>
              <p className="text-xs font-black uppercase tracking-widest opacity-80">Google Review Score</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

