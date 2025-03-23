import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const categories = [
    {
      title: 'EV Bike Chargers',
      description: 'Efficient charging solutions for electric bikes',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80'
    },
    {
      title: 'AC Chargers',
      description: 'Reliable AC charging for all electric vehicles',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80'
    },
    {
      title: 'DC Chargers',
      description: 'High-power DC fast charging solutions',
      image: 'https://images.unsplash.com/photo-1697800653529-dcc0f1b78f88?auto=format&fit=crop&q=80'
    },
    {
      title: 'EV Accessories',
      description: 'Essential accessories for your EV charging needs',
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80'
    },
    {
      title: 'EV Cycle Chargers',
      description: 'Specialized chargers for electric cycles',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link
                  to={`/products/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
                >
                  View Products
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;