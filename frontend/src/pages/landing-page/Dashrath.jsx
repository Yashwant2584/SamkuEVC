import React from 'react';
import { MapPin, Phone, Mail,Target, Compass, Heart  } from "lucide-react";

function Card({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <section className="bg-gray-50 py-16 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Professional, Reliable, Affordable
              </h1>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  SAMKU SERVICE is a trusted electric vehicle service company based in Pune, India. We are committed to 
                  providing comprehensive and innovative solutions to meet the needs of EV owners. Our mission is to 
                  accelerate the adoption of electric vehicles by offering reliable and convenient services .
              </p>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                SamkuService also provides customized solutions, installation, maintenance, and support services to ensure a seamless charging experience. Committed to quality, innovation, and excellent customer service, SamkuService is driving the adoption of electric vehicles and reducing carbon emissions in India and beyond.
              </p>
            </div>

            {/* Video Section */}
            <div className="flex justify-center md:justify-end">
              <div className="w-full max-w-3xl h-[300px] md:h-[400px] lg:h-[400px]">
                <iframe
                  src="https://www.youtube.com/embed/y3WEOx3arRw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Vision, Mission, And Values
          </h2>
          <div className=" rounded-full mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Vision Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 mx-auto">
              <Target className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Vision</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              To become the most trusted name in EV services, contributing to a greener 
              and more sustainable future.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
              <Compass className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Mission</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              To deliver high-quality, timely, and eco-friendly services that empower 
              EV owners and promote clean energy adoption.
            </p>
          </div>

          {/* Values Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto">
              <Heart className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Values</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                Customer satisfaction as our top priority
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                Innovation and eco-conscious solutions
              </li>
              <li className="flex items-center justify-center">
                <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                Integrity, transparency, and professionalism
              </li>
            </ul>
          </div>


        </div>
        </section>
      </div>

      {/* Who We Are Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Who We Are</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              SAMKU SERVICE is a trusted electric vehicle service company headquartered in Pune, India. 
              As pioneers in the EV service industry, we're dedicated to providing comprehensive and 
              innovative solutions that meet the evolving needs of electric vehicle owners. Our 
              state-of-the-art facilities and highly skilled technicians ensure your EV receives the 
              specialized care it deserves.
            </p>
          </div>
        </div>
      </section>



      {/* Right Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-10">
        
        <h1 className="text-4xl font-bold mt-2">BUSINESS PROPOSAL CONTAINS</h1>
        <p className="text-gray-600 mt-4">
          I founded Design & Code which is a global community with a mission to connect designers and developers to create a happy community eager to learn, innovate and grow together. We welcome all designers and developers: beginners, intermediates, and experts willing to learn together.
        </p>
        <div className="flex space-x-10 mt-6 text-lg font-semibold">
          <div><span className="text-black text-2xl">20+</span> Community Members</div>
          <div><span className="text-black text-2xl">25+</span> Branch </div>
          <div><span className="text-black text-2xl">8+</span> Years </div>
        </div>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">Join Community</button>
      </div>

      {/* Left Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-1/2 mt-10">
 
        <Card icon="💼" title="Opportunities" description="Get Internships and Job opportunities and gain experience while you learn." />

        <Card icon="💚" title="Help & Reviews" description="Get your portfolio and projects reviewed by Industry experts and mentors." />
      </div>


      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Contact Us</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-5 rounded-2xl shadow-xl">
              <div className="space-y-8">
                <div className="contact-info flex items-start gap-6">
                  <div className="p-4 bg-blue-100 rounded-xl flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Address</h3>
                    <p className="text-gray-600 text-lg">
                      SAMKU EV POWERING SERVICE PRIVATE LIMITED<br />
                      Vighnaharta Services Industrial Complex, Charholi Khurd Rd <br />
                      Pune, Maharashtra 412105
                    </p>
                  </div>
                </div>
                <div className="contact-info flex items-center gap-6">
                  <div className="p-4 bg-blue-100 rounded-xl flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Phone</h3>
                    <p className="text-gray-600 text-lg">9561137963 / 9209404123</p>
                  </div>
                </div>
                <div className="contact-info flex items-center gap-6">
                  <div className="p-4 bg-blue-100 rounded-xl flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Website</h3>
                    <p className="text-gray-600 text-lg">www.samkueservices.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;