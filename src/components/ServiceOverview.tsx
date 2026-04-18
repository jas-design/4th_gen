/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Hammer, Home, Search, Umbrella, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface ServiceOverviewProps {
  onCtaClick: (page: Page) => void;
}

const services = [
  {
    icon: Hammer,
    title: 'Roof Repair',
    desc: 'From small leaks to major storm damage, we provide fast and reliable repairs to extend your roof life.',
    color: 'bg-orange-50',
    iconColor: 'text-primary'
  },
  {
    icon: Home,
    title: 'Roof Replacement',
    desc: 'Premium full roof replacements using high-quality materials from top brands like GAF and Owens Corning.',
    color: 'bg-blue-50',
    iconColor: 'text-secondary'
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    desc: 'Comprehensive 21-point inspections to identify potential issues before they become expensive problems.',
    color: 'bg-gray-50',
    iconColor: 'text-gray-700'
  },
  {
    icon: Umbrella,
    title: 'Emergency Service',
    desc: '24/7 emergency tarping and rapid response repairs for critical leaks during heavy storms.',
    color: 'bg-red-50',
    iconColor: 'text-red-600'
  }
];

export default function ServiceOverview({ onCtaClick }: ServiceOverviewProps) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl mb-8 md:mb-0">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block underline decoration-secondary underline-offset-8">Best in Class</span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-secondary mb-6">
              Full Spectrum Roofing Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              We provide comprehensive services tailored specifically for the unique climate and construction challenges of local homes.
            </p>
          </div>
          <button 
            onClick={() => onCtaClick('services')}
            className="flex items-center text-secondary font-bold hover:text-primary transition-colors group"
          >
            Explore all services 
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 bg-white border border-gray-100 rounded-2xl hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className={service.iconColor} size={28} />
              </div>
              <h3 className="text-xl font-display font-extrabold text-secondary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-sm flex-grow">
                {service.desc}
              </p>
              <button 
                onClick={() => onCtaClick('contact')}
                className="flex items-center text-xs font-black uppercase tracking-wider text-primary group/btn"
              >
                Get Quote
                <div className="ml-2 w-0 group-hover/btn:w-4 overflow-hidden transition-all duration-300">
                  <ArrowRight size={14} />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
