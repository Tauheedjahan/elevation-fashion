
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['New In', 'Dresses', 'Collections', 'Studio'];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-6 flex items-center justify-between ${
        isScrolled ? 'bg-white border-b border-neutral-100 py-4' : 'bg-transparent text-white'
      }`}
    >
      {/* Brand Logo */}
      <div 
        className="cursor-pointer group flex items-center" 
        onClick={() => onNavigate('home')}
      >
        <span className={`text-2xl tracking-[0.2em] uppercase font-light transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
          Élévation
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-10">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => onNavigate('home')}
            className={`text-[11px] uppercase tracking-[0.2em] font-medium relative group overflow-hidden transition-colors duration-300 ${
              isScrolled ? 'text-neutral-600 hover:text-black' : 'text-neutral-200 hover:text-white'
            }`}
          >
            {link}
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
          </button>
        ))}
      </div>

      {/* Icons */}
      <div className={`flex items-center space-x-6 ${isScrolled ? 'text-black' : 'text-white'}`}>
        <button className="hover:opacity-60 transition-opacity">
          <Search size={20} strokeWidth={1} />
        </button>
        <button className="hover:opacity-60 transition-opacity flex items-center">
          <ShoppingBag size={20} strokeWidth={1} />
          <span className="ml-1 text-[10px] font-medium">(0)</span>
        </button>
        <button 
          className="md:hidden hover:opacity-60 transition-opacity"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={20} strokeWidth={1} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-12 text-black"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} strokeWidth={1} />
              </button>
            </div>
            <div className="flex flex-col space-y-8">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx + 0.3 }}
                  className="text-3xl serif italic text-left"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate('home');
                  }}
                >
                  {link}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
