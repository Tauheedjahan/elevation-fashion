
import React from 'react';
import { motion } from 'framer-motion';

const CollectionGrid: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between">
        <div className="max-w-xl">
          <h2 className="text-[11px] uppercase tracking-[0.4em] text-neutral-400 mb-6">New Arrivals</h2>
          <h3 className="text-4xl md:text-6xl serif font-light leading-tight">
            The Studio <br />
            <span className="italic">Perspective</span>
          </h3>
        </div>
        <div className="mt-8 md:mt-0">
          <button className="text-[11px] uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity">
            Explore All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Left Large Column */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7 relative"
        >
          <div className="aspect-[4/5] overflow-hidden bg-neutral-50 mb-8 group">
            <img 
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=1200" 
              alt="Editorial look 1" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
          </div>
          <div className="max-w-md">
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 mb-2 block italic">Featured Silhouette</span>
            <p className="text-xl serif font-light text-neutral-700 leading-relaxed mb-6">
              A exploration of structure and drape. Our new column silhouettes are designed to move with the body, not against it.
            </p>
          </div>
        </motion.div>

        {/* Right Smaller/Floating Column */}
        <div className="md:col-span-5 md:pt-32 flex flex-col space-y-24">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden bg-neutral-50 group">
              <img 
                src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=800" 
                alt="Editorial look 2" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
            <div className="mt-6 flex justify-between items-center px-2">
              <span className="text-[11px] uppercase tracking-widest font-medium">Summer Evening Gown</span>
              <span className="text-[11px] text-neutral-500">$595</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:ml-12"
          >
             <div className="aspect-square overflow-hidden bg-neutral-50 group">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
                alt="Editorial look 3" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
            </div>
            <p className="mt-8 text-[12px] font-light leading-relaxed text-neutral-500 uppercase tracking-widest">
              Inspired by the quietude of early morning light in Paris.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;
