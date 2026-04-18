/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

const galleryItems = [
  { id: 1, title: 'Modern Shingle Replacement', category: 'Replacement', url: 'https://picsum.photos/seed/roof1/1200/800' },
  { id: 2, title: 'Storm Damage Repair', category: 'Repair', url: 'https://picsum.photos/seed/roof2/1200/800' },
  { id: 3, title: 'Commercial Flat Roof', category: 'Commercial', url: 'https://picsum.photos/seed/commercial1/1200/800' },
  { id: 4, title: 'Custom Metal Roofing', category: 'Replacement', url: 'https://picsum.photos/seed/metalroof/1200/800' },
  { id: 5, title: 'Historic Roof Restoration', category: 'Repair', url: 'https://picsum.photos/seed/historic/1200/800' },
  { id: 6, title: 'Residential Gutter System', category: 'Repair', url: 'https://picsum.photos/seed/gutters/1200/800' },
  { id: 7, title: 'Luxury Tile Installation', category: 'Replacement', url: 'https://picsum.photos/seed/tiles/1200/800' },
  { id: 8, title: 'Industrial Roof Safety', category: 'Commercial', url: 'https://picsum.photos/seed/industrial/1200/800' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const categories = ['All', 'Replacement', 'Repair', 'Commercial'];
  const filteredItems = filter === 'All' ? galleryItems : galleryItems.filter(item => item.category === filter);

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header with Background */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center bg-secondary overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?auto=format&fit=crop&q=80&w=2070)' }}
        >
          <div className="absolute inset-0 bg-secondary/80 backdrop-blur-[2px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block"
          >
            Our Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-extrabold text-white"
          >
            Recent Projects
          </motion.h1>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode='popLayout'>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square bg-gray-100 rounded-3xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <Maximize2 className="text-white mb-2" size={32} />
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <span className="text-primary text-xs font-black uppercase tracking-widest">{item.category}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-secondary/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="w-full aspect-video object-cover rounded-3xl shadow-2xl mb-6"
                referrerPolicy="no-referrer"
              />
              <div className="text-center">
                <h3 className="text-3xl font-display font-extrabold text-white mb-2">{selectedImage.title}</h3>
                <span className="text-primary font-bold uppercase tracking-widest">{selectedImage.category} Installation</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
