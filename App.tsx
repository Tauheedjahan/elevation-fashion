
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import ProductPage from './views/ProductPage';
import { PRODUCTS } from './constants';
import { Product, Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  const handleProductClick = (id: string) => {
    setSelectedProductId(id);
    setCurrentPage('product');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    setSelectedProductId(null);
    window.scrollTo(0, 0);
  };

  const currentProduct = PRODUCTS.find(p => p.id === selectedProductId);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNavigate={handleNavigate} />
      
      <div className="flex-grow">
        {currentPage === 'home' && (
          <Home onProductClick={handleProductClick} />
        )}
        
        {currentPage === 'product' && currentProduct && (
          <ProductPage 
            product={currentProduct} 
            onBack={() => setCurrentPage('home')} 
          />
        )}
        
        {currentPage === 'category' && (
          <div className="pt-32 px-12 text-center h-[60vh] flex items-center justify-center">
             <h2 className="text-4xl serif italic">The Studio Collection</h2>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;
