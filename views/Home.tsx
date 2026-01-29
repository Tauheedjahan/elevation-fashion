
import React from 'react';
import Hero from '../components/Hero';
import CollectionGrid from '../components/CollectionGrid';
import ProductCard from '../components/ProductCard';
import CampaignBanner from '../components/CampaignBanner';
import { PRODUCTS } from '../constants';

interface HomeProps {
  onProductClick: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ onProductClick }) => {
  return (
    <main>
      <Hero />
      
      <CollectionGrid />
      
      {/* Featured Products Grid */}
      <section className="py-24 px-6 md:px-12 bg-[#F5F5F3]">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="max-w-sm">
              <h2 className="text-[11px] uppercase tracking-[0.4em] text-neutral-400 mb-6">Seasonal Selects</h2>
              <h3 className="text-3xl md:text-4xl serif font-light">The Essential Dresses</h3>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {PRODUCTS.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={onProductClick}
              />
            ))}
          </div>
        </div>
      </section>

      <CampaignBanner />

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 bg-white flex flex-col items-center text-center">
        <div className="max-w-3xl">
          <span className="text-[11px] uppercase tracking-[0.4em] text-neutral-400 mb-8 block">Our Philosophy</span>
          <h3 className="text-4xl md:text-6xl serif font-light leading-snug mb-12">
            Luxury is not about excess. <br />
            It is about the <span className="italic">clarity</span> of intent <br />
            and the quality of the finish.
          </h3>
          <p className="text-neutral-500 font-light text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Each garment is a dialogue between material and form, crafted to endure beyond seasonal whims.
          </p>
          <button className="text-[11px] uppercase tracking-widest border border-black px-10 py-3 hover:bg-black hover:text-white transition-all duration-500">
            Our Story
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 md:px-12 bg-black text-white">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl serif font-light mb-8 italic">Join our Style Circle.</h3>
          <p className="text-[12px] uppercase tracking-[0.2em] text-neutral-400 mb-12 font-light">
            Receive exclusive updates, private sales, and seasonal lookbooks.
          </p>
          <form className="flex flex-col md:flex-row border-b border-neutral-800 pb-2 gap-4">
            <input 
              type="email" 
              placeholder="YOUR EMAIL ADDRESS" 
              className="bg-transparent text-white w-full outline-none text-[11px] tracking-widest py-2"
            />
            <button className="text-[11px] uppercase tracking-[0.3em] font-medium hover:opacity-50 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Home;
