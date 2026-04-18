/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Page Header with Background */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-secondary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2070)' }}
        >
          <div className="absolute inset-0 bg-secondary/80 backdrop-blur-[2px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold text-white"
          >
            Contact 4th Generation
          </motion.h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-display font-extrabold text-secondary mb-8">How can we help?</h2>
              <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                Whether you need a minor repair, a full replacement, or just want to know if your roof survived the storm, our team is ready to help. Most site visits are scheduled within 48 hours.
              </p>

              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-6 shrink-0 border border-primary/20">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary mb-1">Call Us Directly</h4>
                    <a href="tel:+18005551234" className="text-2xl font-display font-black text-secondary hover:text-primary transition-colors">
                      (800) 555-1234
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Available 24/7 for emergency leaks</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/5 rounded-xl flex items-center justify-center mr-6 shrink-0 border border-secondary/10">
                    <Mail className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary mb-1">Email Support</h4>
                    <a href="mailto:estimates@4thgenroofing.com" className="text-lg font-medium text-gray-500 hover:text-secondary transition-colors">
                      estimates@4thgenroofing.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/5 rounded-xl flex items-center justify-center mr-6 shrink-0 border border-secondary/10">
                    <MapPin className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-secondary mb-1">Visit Our Office</h4>
                    <p className="text-lg font-medium text-gray-500">
                      123 Roofing Lane, Suite 100<br />
                      Chicago, IL 60601
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-16 p-8 bg-light rounded-3xl border border-gray-100">
                 <div className="flex items-center mb-6">
                    <Clock className="text-secondary mr-3" size={20} />
                    <h4 className="font-display font-bold text-secondary">Office Hours</h4>
                 </div>
                 <div className="space-y-3">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-500">Mon - Fri:</span>
                      <span className="text-secondary">7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-500">Saturday:</span>
                      <span className="text-secondary">8:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-gray-500">Sunday:</span>
                      <span className="text-red-500 font-bold uppercase tracking-tighter text-[10px] bg-red-50 px-2 py-1 rounded">Emergencies Only</span>
                    </div>
                 </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-100 relative">
               <div className="absolute -top-6 left-12 bg-primary text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-primary/30">
                 Request Estimate
               </div>
               <h3 className="text-2xl font-display font-extrabold text-secondary mb-8">Send us a message</h3>
               <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-100 relative grayscale hover:grayscale-0 transition-all duration-1000">
          <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2070)' }} />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="bg-white p-4 rounded-xl shadow-2xl flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                  <MapPin size={24} />
                </div>
                <div>
                   <h5 className="font-bold text-secondary">Our HQ</h5>
                   <p className="text-xs text-gray-500">Downtown Chicago</p>
                </div>
             </div>
          </div>
      </section>
    </div>
  );
}
