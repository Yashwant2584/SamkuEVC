import React from 'react';

const Location = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Locations</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Find Us Here</h2>
            <p className="text-gray-600 mb-6">
              Visit our showroom to explore our range of EV charging solutions or find the nearest
              charging station in your area.
            </p>
          </div>
          
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d80.20901349999999!3d13.047525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1652960879737!5m2!1sen!2sin"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SamkuEVC Location"
            ></iframe>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Showroom</h3>
                <address className="text-gray-600 not-italic">
                  123 EV Street<br />
                  Anna Nagar<br />
                  Chennai, Tamil Nadu 600040<br />
                  India
                </address>
                <div className="mt-4">
                  <p className="text-gray-600">
                    <strong>Phone:</strong> +91 123 456 7890
                  </p>
                  <p className="text-gray-600">
                    <strong>Email:</strong> info@samkuevc.com
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;