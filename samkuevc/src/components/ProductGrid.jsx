import React from 'react';
import ProductCard from './ProductCard';
import { chargers } from '../data/chargers.js';
import { useParams } from 'react-router-dom';

const ProductGrid = () => {
  const { category } = useParams();
  
  // Filter chargers by category if a category is provided
  const filteredChargers = category 
    ? chargers.filter(charger => {
        const categoryLower = category.replace(/-/g, ' ');
        return charger.category && charger.category.toLowerCase() === categoryLower;
      })
    : chargers;

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {category 
              ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') 
              : 'EV Charging Solutions'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of innovative electric vehicle charging solutions for every need
          </p>
        </div>
        {filteredChargers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredChargers.map((charger) => (
              <ProductCard key={charger.id} charger={charger} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;