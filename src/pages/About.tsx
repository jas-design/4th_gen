/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Shield, Users, Clock, History, Award, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Page Header with Background */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-secondary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1632759145351-1d592919f507?auto=format&fit=crop&q=80&w=2070)' }}
        >
          <div className="absolute inset-0 bg-secondary/80 backdrop-blur-[2px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block"
          >
            Our Legacy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold text-white"
          >
            Generations of Trust
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070" 
                alt="Old Roofing Photo" 
                className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <History className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Established</h4>
                    <span className="text-secondary/70 font-medium">1954</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary mb-8">
                A Family Tradition of Excellence
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  4th Generation Roofing started with a simple toolbox and a commitment to doing things right the first time. Founded by Elias Miller in 1954, the company was built on the belief that a roof is more than just shingles—it's a promise of safety.
                </p>
                <p>
                  Today, over 70 years later, that same passion drives everything we do. We've seen technology change and materials evolve, but the core values of honesty, hard work, and craftsmanship haven't budged an inch.
                </p>
                <div className="pt-6 grid grid-cols-2 gap-6">
                  {[
                    'Master Elite Certified',
                    'Insured & Bonded',
                    'Veteran Owned',
                    'A+ BBB Rated'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2">
                       <CheckCircle size={18} className="text-primary flex-shrink-0" />
                       <span className="font-bold text-secondary text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary mb-6">Our Mission & Values</h2>
            <p className="text-gray-500 font-medium">We don't just aspire to be the best roofing company—we strive to be the most trusted partner for every homeowner we serve.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Shield, 
                title: 'Integrity First', 
                desc: 'We tell you what you need, not what we want to sell. If a repair is enough, we will never suggest a full replacement.' 
              },
              { 
                icon: Award, 
                title: 'Unmatched Quality', 
                desc: 'We use premium materials and rigorous installation standards that exceed local building codes every time.' 
              },
              { 
                icon: Users, 
                title: 'Personal Service', 
                desc: 'When you call, you speak to a local expert who knows your neighborhood and is invested in your project.' 
              }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <v.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-display font-extrabold text-secondary mb-4">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Years Experience', val: '70+' },
              { label: 'Roofs Installed', val: '12k+' },
              { label: 'Families Protected', val: '15k+' },
              { label: 'Local Employees', val: '45+' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl md:text-6xl font-display font-black mb-2">{s.val}</div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
