
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-neutral-900">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1539109132384-3615557ef7c3?auto=format&fit=crop&q=80&w=2000)' }}
      />
      
      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[10px] md:text-[12px] uppercase tracking-[0.5em] font-medium mb-6"
        >
          The Atelier Collection
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-8xl serif font-light mb-8 leading-tight tracking-tight"
        >
          Designed for the <br />
          <span className="italic">Woman</span> You Are <br />
          Becoming.
        </motion.h1>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="group relative px-8 py-3 overflow-hidden border border-white/30 hover:border-white transition-colors duration-500"
        >
          <span className="relative z-10 text-[11px] uppercase tracking-[0.3em] font-medium">Shop Collection</span>
          <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[11px] uppercase tracking-[0.3em] font-medium">Shop Collection</span>
        </motion.button>
      </div>

      {/* Decorative Bottom Left Text */}
      <div className="absolute bottom-12 left-12 hidden md:block text-white/50 text-[9px] uppercase tracking-[0.4em] transform -rotate-90 origin-left">
        Élévation / Summer 26
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40"
      >
        <div className="w-[1px] h-12 bg-white/30 mx-auto" />
      </motion.div>
    </section>
  );
};

export default Hero;
