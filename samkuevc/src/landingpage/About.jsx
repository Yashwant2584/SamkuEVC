import React from 'react';

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">About SamkuEVC</h1>
        
        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To accelerate the world's transition to sustainable energy by providing innovative
                and accessible EV charging solutions that empower individuals and businesses to
                embrace electric mobility.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading provider of EV charging infrastructure, creating a seamless
                and sustainable charging network that supports the global shift towards electric
                transportation.
              </p>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8">Our Expertise</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Continuous investment in R&D to develop cutting-edge charging technologies
                  that meet evolving industry standards and user needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quality</h3>
                <p className="text-gray-600">
                  Rigorous testing and quality control processes ensure our products meet
                  the highest safety and performance standards.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Support</h3>
                <p className="text-gray-600">
                  Dedicated customer support and maintenance services to ensure optimal
                  performance of our charging solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Doe',
                position: 'CEO',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
              },
              {
                name: 'Jane Smith',
                position: 'Technical Director',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
              },
              {
                name: 'Mike Johnson',
                position: 'Head of Operations',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;