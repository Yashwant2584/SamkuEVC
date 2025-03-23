import React from 'react';

const EVSolutions = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">EV Solutions</h1>
        <div className="space-y-16">
          {/* Home Chargers Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-8">Home Chargers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { power: '1.2 kW', description: 'Perfect for overnight charging' },
                { power: '7 kW', description: 'Ideal for daily home use' },
                { power: '11/22 kW', description: 'Fast home charging solution' }
              ].map((charger, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{charger.power} Charger</h3>
                  <p className="text-gray-600">{charger.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Commercial Chargers Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-8">Commercial Chargers</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6">
                Our commercial charging solutions are designed to meet the demands of businesses,
                fleet operators, and public charging stations. We offer scalable and reliable
                charging infrastructure that can be customized to your specific needs.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>High-power DC fast charging stations</li>
                <li>Multi-point charging systems</li>
                <li>Smart load management</li>
                <li>Remote monitoring and management</li>
                <li>Payment integration solutions</li>
              </ul>
            </div>
          </section>

          {/* Accessories Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-8">Sockets and Additional Accessories</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Charging Sockets</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Type 2 Sockets</li>
                    <li>CCS Connectors</li>
                    <li>CHAdeMO Connectors</li>
                    <li>Standard AC Sockets</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Accessories</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Charging Cables</li>
                    <li>Cable Management Systems</li>
                    <li>Protection Equipment</li>
                    <li>Mounting Solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EVSolutions;