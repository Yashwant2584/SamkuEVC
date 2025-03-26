import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Battery, Zap, Check } from 'lucide-react';
import { chargers } from '../data/chargers';

const ProductDetails = () => {
  const { id } = useParams();
  const charger = chargers.find((c) => c.id === id);

  if (!charger) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} />
          Back to products
        </Link>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-[400px] overflow-hidden">
              <img
                src={charger.image}
                alt={charger.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{charger.name}</h1>
              <p className="text-xl text-gray-600 mb-6">{charger.description}</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Zap className="text-blue-600" size={24} />
                  <div>
                    <h3 className="font-semibold">Power Output</h3>
                    <p>{charger.power}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Battery className="text-blue-600" size={24} />
                  <div>
                    <h3 className="font-semibold">Compatibility</h3>
                    <p>{charger.compatibility.join(", ")}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Key Features</h3>
                  <ul className="space-y-2">
                    {charger.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="text-green-500" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <span className="text-3xl font-bold text-blue-600">{charger.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;