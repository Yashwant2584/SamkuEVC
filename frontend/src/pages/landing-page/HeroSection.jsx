import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight, FaUsers, FaBuilding, FaTools, FaChargingStation } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Img1 from "../../images/img1.png";
import Img2 from "../../images/Img2.png";
import Img3 from "../../images/Img3.png";
import { useNavigate } from 'react-router-dom';

// Counter animation component
const AnimatedCounter = ({ value, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const valueNum = parseInt(value.replace(/\D/g, ''));

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCount();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const animateCount = () => {
    let start = 0;
    const end = valueNum;
    const increment = Math.ceil(end / 40);
    const startTime = performance.now();
    
    const updateCount = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const currentCount = Math.min(Math.floor(easedProgress * end), end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(updateCount);
  };
  
  const easeOutCubic = (x) => {
    return 1 - Math.pow(1 - x, 3);
  };
  
  return (
    <span ref={countRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Function to handle button clicks
  const handleButtonClick = (linkType, target) => {
    if (linkType === 'scroll') {
      const section = document.getElementById(target);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (linkType === 'navigate') {
      navigate(target);
    }
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const StatCards = () => {
    const stats = [
      {
        value: "10000+",
        label: "Active Users",
        icon: <FaUsers className="text-blue-500 text-2xl" />,
        color: "bg-[#ffffff80] p-4",
        textColor: "text-gray-800",
        suffix: "+"
      },
      {
        value: "3+",
        label: "Service Centers",
        icon: <FaBuilding className="text-green-500 text-2xl" />,
        color: "bg-[#ffffff80] p-4",
        textColor: "text-gray-800",
        suffix: "+"
      },
      {
        value: "120+",
        label: "Services Offered",
        icon: <FaTools className="text-purple-500 text-2xl" />,
        color: "bg-[#ffffff80] p-4",
        textColor: "text-gray-800",
        suffix: "+"
      },
      {
        value: "50+",
        label: "Charging Stations",
        icon: <FaChargingStation className="text-orange-500 text-2xl" />,
        color: "bg-[#ffffff80] p-4",
        textColor: "text-gray-800",
        suffix: "+"
      }
    ];

    const cardsPosition = isMobile ? "bottom-16" : "bottom-20";
  
    return (
      <div className={`absolute left-0 right-0 z-20 px-3 ${cardsPosition} top-[350px] sm:top-auto`}>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                onAnimationComplete={() => setAnimationStarted(true)}
                className={`${stat.color} rounded-lg shadow-xl p-2 sm:p-4 flex items-center 
                  w-full backdrop-blur-md bg-opacity-80 
                  border border-white/30 transform hover:scale-105 transition-all duration-300
                  mb-0 sm:mb-0 hover:bg-opacity-90`}
              >
                <div className="mr-2 sm:mr-4 p-2 rounded-full bg-gray-50/90 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div>
                  <h3 className={`text-lg sm:text-2xl font-bold ${stat.textColor}`}>
                    {animationStarted ? (
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    ) : "0"}
                  </h3>
                  <p className="text-[11px] sm:text-xs md:text-base text-gray-700 font-normal">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  const arrowPositionClass = isMobile ? "top-1/3" : "top-1/2";

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    beforeChange: (_, next) => setCurrentSlide(next),
    nextArrow: <CustomNextArrow positionClass={arrowPositionClass} />,
    prevArrow: <CustomPrevArrow positionClass={arrowPositionClass} />,
  };
  
  const CustomDots = () => (
    <div className="absolute z-20 bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 sm:gap-4">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 
            ${index === currentSlide 
              ? 'bg-blue-600 scale-125' 
              : 'bg-gray-300 hover:bg-gray-400'}`}
        />
      ))}
    </div>
  );

  const slides = [
    {
      image: Img1,
      title: 'Powering The Future',
      subtitle: 'Your premium electric vehicle service center',
      buttonText: 'Discover Services',
      buttonColor: 'bg-gradient-to-r from-blue-600 to-blue-800',
      overlay: 'bg-gradient-to-r from-black/50 via-black/30 to-black/50',
      linkType: 'scroll', // Scrolls to section
      target: 'services-section',
    },
    {
      image: Img2,
      title: 'Expert EV Maintenance',
      subtitle: 'Specialized care for all electric vehicle models',
      buttonText: 'Book Service',
      buttonColor: 'bg-gradient-to-r from-green-600 to-green-800',
      overlay: 'bg-gradient-to-b from-black/50 via-black/30 to-black/50',
      linkType: 'navigate', // Navigates to another page
      target: '/services',
    },
    {
      image: Img3,
      title: 'Sustainable Solutions',
      subtitle: 'Join our mission for a cleaner, greener future',
      buttonText: 'Learn More',
      buttonColor: 'bg-gradient-to-r from-teal-600 to-teal-800',
      overlay: 'bg-gradient-to-l from-black/50 via-black/30 to-black/50',
      linkType: 'navigate', // Navigates to another page
      target: '/about',
    }
  ];

  return (
    <section className="relative bg-white text-gray-800" id='home'>
      <div className="relative h-[80vh] min-h-[600px]">
        <CustomDots />
        <Slider {...sliderSettings} className="h-[110%]">
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[84vh] min-h-[600px]">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${slide.image}')` }}></div>
              <div className={`absolute inset-0  ${slide.overlay}`}></div>
              <div className="absolute top-[130px] left-0 right-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-center max-w-4xl mx-auto"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 drop-shadow-lg text-white">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto font-light drop-shadow-md text-white">
                    {slide.subtitle}
                  </p>
                  <button className={`${slide.buttonColor} hover:scale-105 transition-all duration-300 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full flex items-center mx-auto shadow-lg text-sm sm:text-base`}
                   onClick={() => handleButtonClick(slide.linkType, slide.target)}>
                    {slide.buttonText} <FaArrowRight className="ml-2" />
                  </button>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
        <StatCards />
      </div>
    </section>
  );
};

const CustomNextArrow = (props) => {
  const { onClick, positionClass } = props;
  return (
    <button
      onClick={onClick}
      className={`absolute right-2 sm:right-4 ${positionClass} -translate-y-1/2 z-10 
                 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/40 backdrop-blur-sm 
                 text-white flex items-center justify-center hover:bg-white/60 
                 transition-all duration-300 shadow-md`}
      aria-label="Next slide"
    >
      <FaArrowRight className="text-sm sm:text-base" />
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick, positionClass } = props;
  return (
    <button
      onClick={onClick}
      className={`absolute left-2 sm:left-4 ${positionClass} -translate-y-1/2 z-10 
                 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/40 backdrop-blur-sm 
                 text-white flex items-center justify-center hover:bg-white/60 
                 transition-all duration-300 shadow-md rotate-180`}
      aria-label="Previous slide"
    >
      <FaArrowRight className="text-sm sm:text-base" />
    </button>
  );
};

export default HeroSection;