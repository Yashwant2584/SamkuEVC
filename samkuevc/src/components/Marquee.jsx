import React from "react";
import olaLogo from "../images/marquee/ola.png";
import bajajLogo from "../images/marquee/bajaj.png";
import mgLogo from "../images/marquee/mg.png";
import bmwLogo from "../images/marquee/bmw.png";
import okinawaLogo from "../images/marquee/okinawa.png";
import teslaLogo from "../images/marquee/tesla.png";
import revoltLogo from "../images/marquee/revolt.png";
import audiLogo from "../images/marquee/audip.png";
import emotoradLogo from "../images/marquee/emotorad.png";
import mahindraLogo from "../images/marquee/mahindra.png";
import olectraLogo from "../images/marquee/olectrap.png";
import kiaLogo from "../images/marquee/kia.png";
import volvoLogo from "../images/marquee/volvo.png";
import heroLogo from "../images/marquee/hero.png";
import avonLogo from "../images/marquee/avon.png";
import benlingLogo from "../images/marquee/benling.png";
// import atherLogo from "../images/marquee/ather.png";
import tvsLogo from "../images/marquee/tvs.png";
import vwLogo from "../images/marquee/vw.png";
import toyoLogo from "../images/marquee/toyota.png";
import virtusLogo from "../images/marquee/virtus.png";
import gemopaiLogo from "../images/marquee/gemopai.png";
import nissanLogo from "../images/marquee/nissan.png";
// import tataloLogo from "../images/marquee/tata.png";

const Marquee = () => {
  const evCompanies = [
    { name: "Ola Electric", logo: olaLogo },
    { name: "Tesla", logo: teslaLogo },
    { name: "Bajaj", logo: bajajLogo },
    { name: "Revolt", logo: revoltLogo },
    { name: "Okinawa", logo: okinawaLogo },
    { name: "Bmw", logo: bmwLogo },
    { name: "MG", logo: mgLogo },
    { name: "Audi", logo: audiLogo },
    { name: "Hyundai", logo: emotoradLogo },
    { name: "Mahindra", logo: mahindraLogo },
    { name: "Olectra", logo: olectraLogo },
    { name: "Kia", logo: kiaLogo },
    { name: "Volvo", logo: volvoLogo },
    { name: "Hero", logo: heroLogo },
    { name: "Avon", logo: avonLogo },
    { name: "Benling", logo: benlingLogo },
    // { name: "Ather", logo: atherLogo },
    { name: "TVS", logo: tvsLogo },
    { name: "VW", logo: vwLogo },
    { name: "Toyota", logo: toyoLogo },
    { name: "Virtus", logo: virtusLogo },
    { name: "Gemopai", logo: gemopaiLogo },
    { name: "Nissan", logo: nissanLogo },
    // { name: "tata", logo: tataloLogo },
  ];

  return (
    <div className="py-8 bg-gradient-to-b from-gray-50 to-white">
      {/* Styled Heading */}
      <div className="text-center mb-16">
        <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold tracking-wide inline-block relative">
          <span className="text-blue-800">Your Vehicles, </span>
          <span className="text-green-600">Our Priority.</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Marquee Container */}
      <div className="relative overflow-hidden px-4 sm:px-6 md:px-8 max-w-full sm:max-w-lg md:max-w-3xl lg:max-w-5xl mx-auto">
        {/* Outer container to ensure proper animation */}
        <div className="marquee-container">
          {/* Inner track with animation */}
          <div className="marquee-track">
            {/* First set of logos */}
            {evCompanies.map((company, index) => (
              <div 
                key={`first-${index}`} 
                className="marquee-item"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-8 sm:h-14 md:h-16 w-auto object-contain mx-auto"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {evCompanies.map((company, index) => (
              <div 
                key={`second-${index}`} 
                className="marquee-item"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-8 sm:h-14 md:h-16 w-auto object-contain mx-auto"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Left overlay*/}
        <div 
          className="absolute inset-y-0 left-0 w-24 sm:w-40 md:w-48 pointer-events-none" 
          style={{
            background: "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 20%, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 0.3) 60%, rgba(255, 255, 255, 0.1) 80%, rgba(255, 255, 255, 0) 100%)"
          }} 
        />
        {/* Right overlay */}
        <div 
          className="absolute inset-y-0 right-0 w-24 sm:w-40 md:w-48 pointer-events-none" 
          style={{
            background: "linear-gradient(to left, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 20%, rgba(255, 255, 255, 0.6) 40%, rgba(255, 255, 255, 0.3) 60%, rgba(255, 255, 255, 0.1) 80%, rgba(255, 255, 255, 0) 100%)"
          }} 
        />
      </div>

      {/* CSS for the marquee */}
      <style jsx="true">{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
        }
        
        .marquee-track {
          display: flex;
          width: fit-content;
          animation: marquee 20s linear infinite;
        }
        
        .marquee-item {
          flex: 0 0 auto;
          width: 100px; /* Reduced for mobile */
          padding: 0 10px; /* Reduced padding for tighter spacing */
          text-align: center;
        }
        
        /* Responsive widths for marquee items */
        @media (min-width: 640px) {
          .marquee-item {
            width: 160px;
            padding: 0 20px; /* Original padding for larger screens */
          }
        }
        
        @media (min-width: 768px) {
          .marquee-item {
            width: 180px;
          }
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Pause on hover (desktop only) */
        @media (min-width: 768px) {
          .marquee-track:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;