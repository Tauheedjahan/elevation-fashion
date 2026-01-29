
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-100 pt-24 pb-12 px-6 md:px-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
        <div>
          <h4 className="text-[11px] uppercase tracking-widest font-bold mb-8">Shop</h4>
          <ul className="space-y-4 text-[12px] text-neutral-500 font-light tracking-wide">
            <li><a href="#" className="hover:text-black transition-colors">New Arrivals</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Dresses</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Studio Collection</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Archives</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[11px] uppercase tracking-widest font-bold mb-8">Company</h4>
          <ul className="space-y-4 text-[12px] text-neutral-500 font-light tracking-wide">
            <li><a href="#" className="hover:text-black transition-colors">Our Story</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Sustainability</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Store Locator</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-widest font-bold mb-8">Support</h4>
          <ul className="space-y-4 text-[12px] text-neutral-500 font-light tracking-wide">
            <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-widest font-bold mb-8">Connect</h4>
          <ul className="space-y-4 text-[12px] text-neutral-500 font-light tracking-wide">
            <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Pinterest</a></li>
            <li><a href="#" className="hover:text-black transition-colors">TikTok</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Newsletter</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-100 pt-16 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
        <div className="max-w-md">
           <h2 className="text-4xl md:text-5xl serif italic font-light tracking-tight mb-4">
             Designed in Silence. <br /> Worn with Confidence.
           </h2>
        </div>
        
        <div className="flex flex-col items-center md:items-end">
          <p className="text-[10px] uppercase tracking-[0.4em] mb-4">© 2026 Élévation Studio</p>
          <div className="flex space-x-4">
            <span className="w-10 h-[1px] bg-neutral-200"></span>
            <span className="w-10 h-[1px] bg-neutral-200"></span>
            <span className="w-10 h-[1px] bg-neutral-200"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
