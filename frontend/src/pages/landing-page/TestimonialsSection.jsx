import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Person1 from "../../images/reviews/person1.png";
import Person2 from "../../images/reviews/person2.png";
import Person3 from "../../images/reviews/person3.png";
import Person4 from "../../images/reviews/person4.png";
import Person5 from "../../images/reviews/person5.png";
import Person6 from "../../images/reviews/person6.png";
import Person7 from "../../images/reviews/person7.png";
import Person8 from "../../images/reviews/person8.png";
import Person9 from "../../images/reviews/person9.png";



const TestimonialsSection = () => {
  const testimonials = [
    { name: "Neha Gurav", vehicle: "Bajaj Chetak",rating: 5, image: Person1, quote: "The technicians at SamkuEvc really understand electric vehicles. Honest people and best service one could take in affordable price. Highly recommended." },
    { name: "Ashish Hakke", vehicle: "Revolt RV1", rating: 4,image: Person2, quote: "Absolutely professional services and trustworthy team. They understand the client problems and concerns very well and give the best services. Great work and value for money." },
    { name: "Santram Sabne", vehicle: "Ola S1 Pro", rating: 5,image: Person3, quote: "Get the best service for lower price water cooler repairing. Their battery health check program has given me peace of mind about my older Leaf." },
    { name: "Omkar Biradar", vehicle: "MG Comet EV", rating: 4,image: Person4, quote: "Highly satisfied with their timely and professional service. Samku Service is my go-to place for EV maintenance." },
    { name: "Amol Rakh", vehicle: "TVS iQube", rating:4,image: Person5, quote: "They provide quality repair work and excellent customer service. My EV runs like new again!" },
    { name: "Sahil Wadaskar", vehicle: "Okinawa iPraise+", rating: 5,image: Person6, quote: "Very happy with their service. They diagnosed and fixed battery issue quickly. Great experience!" },
    { name: "Yash Ghorband", vehicle: "Ather 450X", rating: 5,image: Person7, quote: "The technicians at SamkuEvc really understand electric vehicles. They diagnosed and fixed an issue that two other shops couldn't figure out." },
    { name: "Karan Lande", vehicle: "Ather Apex", rating: 5,image: Person8, quote: "I've been bringing my Ather Apex here for two years. Their maintenance programs have kept my EV running perfectly, and their charging station is always reliable." },
    { name: "Dashrath Bogati", vehicle: "Tata Punch EV", rating: 4,image: Person9, quote: "The team at SamkuEvc took the time to educate me about my vehicle. Extremely satisfied with their service." }
  ];


  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const RatingStars = ({ rating }) => (
    <div className="flex justify-center gap-1 mb-3">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What Our <span className="text-blue-600">Customers</span> Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by EV owners across India for exceptional service and expertise
            </p>
          </motion.div>
        </div>
        
        <div className="px-2 sm:px-6 lg:px-8">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3 py-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 relative h-auto sm:h-[420px] flex flex-col"
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white p-1 shadow-lg">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full rounded-full object-cover" 
                        onError={(e) => {
                          e.target.src = "/api/placeholder/150/150";
                        }}
                      />
                    </div>
                  </div>

                  <div className="pt-10 sm:pt-14 text-center flex flex-col justify-between h-full">
                    <div>
                      <RatingStars rating={testimonial.rating} />
                      <p className="text-gray-700 italic mb-6 line-clamp-4 sm:line-clamp-5 text-base sm:text-lg leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <h4 className="font-semibold text-blue-600 text-lg mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.vehicle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;