import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, Battery, Car, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powering the Future of <br />
            Electric Mobility
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Leading the charge with innovative EV charging solutions for a sustainable tomorrow.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-lg font-semibold transition-colors"
          >
            Explore Our Products
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SamkuEVC?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Charging</h3>
              <p className="text-gray-600">
                Advanced technology ensuring rapid charging for all electric vehicles
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Battery className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Solutions</h3>
              <p className="text-gray-600">
                Intelligent charging systems with remote monitoring capabilities
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety First</h3>
              <p className="text-gray-600">
                Built-in protection features ensuring safe charging every time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'EV Bike Chargers',
                image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80',
                description: 'Efficient charging solutions for electric bikes'
              },
              {
                title: 'DC Fast Chargers',
                image: 'https://images.unsplash.com/photo-1697800653529-dcc0f1b78f88?auto=format&fit=crop&q=80',
                description: 'High-power DC charging for quick turnaround'
              },
              {
                title: 'Home Charging Solutions',
                image: 'https://images.unsplash.com/photo-1697800653529-dcc0f1b78f88?auto=format&fit=crop&q=80',
                description: 'Convenient and safe charging at home'
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    to="/products"
                    className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
                  >
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Switch to Electric?
          </h2>
          <p className="text-xl text-white mb-8">
            Contact us today to learn more about our EV charging solutions
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;