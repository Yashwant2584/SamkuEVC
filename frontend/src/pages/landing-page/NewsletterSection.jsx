import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-blue-50 rounded-2xl shadow-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Stay Updated on <span className="text-blue-600">EV Technology</span></h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive the latest news, maintenance tips, and exclusive offers for electric vehicle owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://img.freepik.com/free-vector/electric-car-concept-illustration_114360-1487.jpg" 
              alt="Electric Vehicle Newsletter" 
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;