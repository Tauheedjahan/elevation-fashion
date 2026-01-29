
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CampaignBanner: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0.3, 0.7], [0, -100]);

  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
      {/* Combined duplicate style attributes into a single object */}
      <motion.div 
        style={{ 
          y, 
          backgroundImage: 'url(https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000)' 
        }}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 text-center text-white px-6">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-6xl md:text-9xl serif italic font-light tracking-tighter"
        >
          Solstice ’26
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8"
        >
          <button className="px-10 py-4 bg-white text-black text-[11px] uppercase tracking-widest font-medium hover:bg-neutral-100 transition-colors">
            Discover the Lookbook
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CampaignBanner;
