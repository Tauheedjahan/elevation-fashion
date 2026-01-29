
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, Plus, Minus, Info } from 'lucide-react';
import { Product } from '../types';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ product, onBack }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Breadcrumb / Back button */}
      <div className="px-6 md:px-12 py-6 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center text-[10px] uppercase tracking-[0.3em] hover:opacity-50 transition-opacity"
        >
          <ArrowLeft size={14} className="mr-2" /> Back to Collection
        </button>
      </div>

      <div className="flex flex-col lg:flex-row px-6 md:px-12 gap-12 lg:gap-24">
        {/* Vertical Image Gallery */}
        <div className="w-full lg:w-3/5 space-y-6">
          {product.images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="aspect-[3/4] overflow-hidden bg-neutral-50"
            >
              <img 
                src={img} 
                alt={`${product.name} view ${idx + 1}`} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Sticky Details Sidebar */}
        <div className="w-full lg:w-2/5 relative">
          <div className="lg:sticky lg:top-32 space-y-12">
            <div>
              <h1 className="text-3xl md:text-4xl serif font-light mb-4">{product.name}</h1>
              <p className="text-xl font-light mb-8">${product.price}</p>
              <p className="text-neutral-500 font-light leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium">Select Size</span>
                <button className="text-[10px] uppercase tracking-widest text-neutral-400 border-b border-transparent hover:border-neutral-400 transition-all">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-[11px] border transition-all duration-300 ${
                      selectedSize === size 
                        ? 'bg-black text-white border-black' 
                        : 'bg-white text-black border-neutral-200 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <button className="w-full py-5 bg-black text-white text-[11px] uppercase tracking-[0.3em] font-medium hover:bg-neutral-800 transition-colors">
                Add to Shopping Bag
              </button>
              <button className="w-full py-5 border border-neutral-200 text-black text-[11px] uppercase tracking-[0.3em] font-medium hover:border-black transition-colors">
                Find in Store
              </button>
            </div>

            {/* Product Meta Info */}
            <div className="border-t border-neutral-100 pt-8 space-y-8">
              <div>
                <h4 className="text-[11px] uppercase tracking-widest font-bold mb-4 flex items-center">
                  <Info size={14} className="mr-2" /> Details & Composition
                </h4>
                <ul className="space-y-2 text-[12px] text-neutral-500 font-light list-disc list-inside">
                  {product.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
              
              <div className="text-[11px] text-neutral-400 tracking-wide">
                Ref. 0932/445 — Designed in Paris, Ethically made in Portugal.
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Section Spacer */}
      <div className="h-24" />
    </div>
  );
};

export default ProductPage;
