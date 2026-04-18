/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  if (formState === 'success') {
    return (
      <div className="bg-green-50 border border-green-100 p-12 rounded-2xl text-center space-y-4">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-display font-extrabold text-green-900">Request Received!</h3>
        <p className="text-green-700 font-medium">
          Thank you for reaching out. One of our roofing specialists will contact you within 24 hours to schedule your estimate.
        </p>
        <button 
          onClick={() => setFormState('idle')}
          className="text-green-800 font-bold underline underline-offset-4 decoration-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name</label>
          <input 
            required
            type="text" 
            placeholder="John Doe"
            className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-widest text-gray-400">Phone Number</label>
          <input 
            required
            type="tel" 
            placeholder="(123) 456-7890"
            className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium" 
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
        <input 
          required
          type="email" 
          placeholder="john@example.com"
          className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium" 
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-widest text-gray-400">Service Interest</label>
        <select className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium appearance-none">
          <option>Full Roof Replacement</option>
          <option>Minor Roof Repair</option>
          <option>Storm Damage Inspection</option>
          <option>Gutter Installation</option>
          <option>Other</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-black uppercase tracking-widest text-gray-400">Your Message</label>
        <textarea 
          rows={4}
          placeholder="Tell us about your roofing needs..."
          className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium resize-none" 
        />
      </div>

      <button 
        type="submit"
        disabled={formState === 'submitting'}
        className={`cta-button-primary w-full py-4 flex items-center justify-center text-lg ${formState === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {formState === 'submitting' ? (
           <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Send size={18} className="mr-2" />
            Get My Free Estimate
          </>
        )}
      </button>
      
      <p className="text-[10px] text-gray-400 text-center font-bold uppercase tracking-widest leading-relaxed">
        By submitting this form, you agree to being contacted regarding your estimate. We never sell your data.
      </p>
    </form>
  );
}
