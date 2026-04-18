/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Shield, ThumbsUp, MapPin, Award, CheckCircle2 } from 'lucide-react';

const badges = [
  { icon: Shield, title: 'Fully Insured', desc: 'General liability & workers comp' },
  { icon: ThumbsUp, title: '5-Star Reviews', desc: 'Over 500+ happy homeowners' },
  { icon: MapPin, title: 'Locally Owned', desc: 'Serving our community for 4 generations' },
  { icon: Award, title: 'GAF Certified', desc: 'Master Elite roofing contractor' },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: 'The team at 4th Generation Roofing was incredible. They finished our full replacement in just two days and the clean-up was spotless!',
    rating: 5,
  },
  {
    name: 'Robert Miller',
    role: 'Business Owner',
    content: 'Prompt service after the recent hail storm. They dealt with my insurance directly which saved me hours of frustration.',
    rating: 5,
  }
];

export default function TrustSection() {
  return (
    <section className="bg-light py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <badge.icon className="text-primary" size={32} />
              </div>
              <h3 className="font-display font-bold text-secondary mb-1">{badge.title}</h3>
              <p className="text-xs text-gray-600 font-medium leading-tight">{badge.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Reputation</span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-secondary mb-6">
              Homeowners Trusted us for Since 1954
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We don't just fix roofs; we protect families. Our 4th generation commitment means every nail, shingle, and flashing is installed to the highest possible standard.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#ED1935" className="text-primary" />)}
              </div>
              <span className="font-bold text-secondary">4.9 / 5.0 Rating</span>
            </div>
            <p className="text-sm font-medium text-gray-600 italic">Based on 500+ verified customer reviews</p>
          </div>

          <div className="md:col-span-3 grid sm:grid-cols-2 gap-6">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex mb-4">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={16} fill="#ED1935" className="text-primary" />)}
                  </div>
                  <p className="text-gray-600 italic mb-6">"{t.content}"</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-secondary font-bold">{t.name[0]}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-sm">{t.name}</h4>
                    <span className="text-xs text-gray-600 font-medium">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
