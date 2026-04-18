/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Hammer, Home, Search, Umbrella, CheckCircle2, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const servicesItems = [
  {
    id: 'repair',
    icon: Hammer,
    title: 'Roof Repair',
    desc: 'Don’t let a small leak turn into a structural disaster. We offer specialized repair services for all roof types.',
    bullets: [
      'Leak detection & diagnostics',
      'Shingle replacement',
      'Flashing & vent repair',
      'Chimney cricket installation'
    ],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'replacement',
    icon: Home,
    title: 'Roof Replacement',
    desc: 'When repairs aren’t enough, a full replacement secures your home for decades. We specialize in asphalt, metal, and tile.',
    bullets: [
      'Full tear-off & disposal',
      'Decking inspection & prep',
      'High-performance underlayment',
      'Lifetime shingle installation'
    ],
    image: 'https://images.unsplash.com/photo-1628412852155-d144e051ae94?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'inspection',
    icon: Search,
    title: 'Roof Inspection',
    desc: 'Perfect for real estate transactions, insurance claims, or annual maintenance. Get a certified report on your roof’s health.',
    bullets: [
      'Digital photo documentation',
      'Structural integrity check',
      'Ventilation analysis',
      'Moisture & leak mapping'
    ],
    image: 'https://images.unsplash.com/photo-1635424710928-0544e8512ffe?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'storm',
    icon: Umbrella,
    title: 'Storm Damage',
    desc: 'Hail, wind, and fallen trees require immediate action. We work directly with your insurance to ensure full coverage.',
    bullets: [
      '24/7 Emergency tarping',
      'Insurance claim assistance',
      'Hail impact assessment',
      'Structural storm bracing'
    ],
    image: 'https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?auto=format&fit=crop&q=80&w=2070'
  }
];

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="bg-white">
      {/* Page Header with Background */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-secondary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1628412852155-d144e051ae94?auto=format&fit=crop&q=80&w=2070)' }}
        >
          <div className="absolute inset-0 bg-secondary/80 backdrop-blur-[2px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold text-white"
          >
            Expert Roofing Services
          </motion.h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {servicesItems.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="text-primary" size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary mb-6">{service.title}</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">{service.desc}</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {service.bullets.map((bullet, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle2 size={18} className="text-primary shrink-0" />
                      <span className="font-bold text-secondary text-sm">{bullet}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="cta-button-primary flex items-center"
                >
                  Request {service.title} 
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
              <div className={`relative h-[400px] sm:h-[500px] ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                 <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl"
                  referrerPolicy="no-referrer"
                 />
                 {/* Decorative elements */}
                 <div className="absolute -z-10 -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-[2.5rem]" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-display font-extrabold text-secondary mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { step: '01', title: 'Schedule', desc: 'Book your free 21-point evaluation.' },
                    { step: '02', title: 'Consult', desc: 'Receive a detailed digital report & quote.' },
                    { step: '03', title: 'Install', desc: 'Professional installation in as little as 1 day.' }
                ].map((p, i) => (
                    <div key={i} className="bg-white p-10 rounded-3xl border border-gray-100">
                        <span className="text-5xl font-display font-black text-primary/20 block mb-4">{p.step}</span>
                        <h4 className="text-xl font-bold text-secondary mb-2">{p.title}</h4>
                        <p className="text-gray-500 font-medium text-sm">{p.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
