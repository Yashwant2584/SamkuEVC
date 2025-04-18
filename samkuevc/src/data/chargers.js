import detailimages30DC from "../images/C-Images/30-DC-d.png"
import detailimages30DC2 from "../images/C-Images/30DC2.png"

import detailimages120DC from "../images/C-Images/60-120-180-DC-d.png"
import detailimages120DC2b from "../images/C-Images/30DC2.png"

import detailimages40DC from "../images/C-Images/240-DC-d.png"
import DC_Charger_60KW from "../images/C-Images/DC_Charger_60KW.png"
import DC_Charger_120KW from "../images/C-Images/DC_Charger_120KW.png"
import DC_Charger_180KW from "../images/C-Images/DC_Charger_180KW.png"
import DC_Charger_60_120_180KW from "../images/C-Images/DC_Charger_60-120-180KW.png"

import detailimages360DC from "../images/C-Images/360-720-DC-d.png"
import detailimages360DC2 from "../images/C-Images/30DC2.png"

import li_Ion_battery from "../images/C-Images/li-Ion-battery.png"
import life_po_battery from "../images/C-Images/life-po-battery.png"
import ThreeK3 from "../images/C-Images/3K3.png" 
import ac_point_02gun from "../images/C-Images/ac-point-02gun.png"
import lightning from "../images/C-Images/lightning.png"
import AC3k3ocpp from "../images/C-Images/AC3k3ocpp.png"
import AC3k3ocpp1 from "../images/C-Images/AC3k3ocpp1.jpeg"
import cargo_e_bike from "../images/C-Images/Cargo_bike.png"
import cargo_e_bike1 from "../images/C-Images/Cargo_bike1.png"

export const chargers = [
  {
    id: "li-Ion-battery-charger",
    name: "Li-Ion Battery Charger",
    description: "A robust charging solution designed for lithium-ion batteries, perfect for high-demand e-bike applications.",
    detailedDescription: "This Li-Ion Battery Charger offers reliable and efficient charging for commercial e-bike fleets. With its advanced power management system, it ensures optimal battery health and longevity.",
    image: [li_Ion_battery ],
    price: "₹2,548",
    powerImages: {
      "24V": {
        main: li_Ion_battery, 
        additional: []
      },
      "36V": {
        main: li_Ion_battery, 
        additional: []
      },
      "48V": {
        main: li_Ion_battery, 
        additional: []
      }
      ,
      "60V": {
        main: li_Ion_battery, 
        additional: []
      },
      "72V": {
        main: li_Ion_battery, 
        additional: []
      }
    },
    powerPrices: {
      "24V": "₹2,548",
      "36V": "₹4,186",
      "48V": "₹5,460",
      "60V": "₹6,188",
      "72V": "₹8,190"
    },
    

    powerOptions: ["24V", "36V", "48V", "60V", "72V"],
    ratedCurrent: ["3A", "5A", "8A", "10A", "12A"],
    combinedPrices: {
      "24V": {
        "3A": "₹2,548",
        "5A": "₹4,186",
      },
      "36V": {
        "5A": "₹4,186",
        "8A": "₹5,187",
        "10A": "₹6,188",
      },
      "48V": {
        "8A": "₹5,460",
        "10A": "₹6,188"
      },
      "60V": {
        "6A": "₹4,368",
        "8A": "₹5,460",
        "10A": "₹6,188",
      },
      "72V": {
        "6A": "₹4,641",
        "8A": "₹5,824",
        "10A": "₹6,734",
        "12A": "₹8,190"
      }
    },
    features: ["Power Management", "IP68 Rated", "Load balancing"],
    category: "E-Bike Chargers",
    colours: []
  },
  {
    id: "lifepo4-battery-charger",
    name: "Lifepo4 Battery Charger",
    description: "High-power DC fast charging solution for commercial and fleet applications",
    detailedDescription: "Engineered for LiFePO4 batteries, this charger provides safe and efficient charging with built-in safety features for commercial use.",
    image: [life_po_battery],
    price: "₹2,548",
    powerImages: {
      "24V": {
        main: life_po_battery, 
        additional: []
      },
      "36V": {
        main: life_po_battery, 
        additional: []
      },
      "48V": {
        main: life_po_battery, 
        additional: []
      },
      "60V": {
        main: life_po_battery, 
        additional: []
      },
      "72V": {
        main: life_po_battery, 
        additional: [detailimages120DC2b, detailimages120DC]
      }
    },
    powerPrices: {
      "24V": "₹2,548",
      "36V": "₹4,186",
      "48V": "₹5,460",
      "60V": "₹6,188",
      "72V": "₹8,190"
    },
    powerOptions: ["24V", "36V", "48V", "60V", "72V"],
    ratedCurrent: ["3A", "5A", "8A", "10A", "12A"],
    combinedPrices: {
      "24V": {
        "3A": "₹2,548",
        "5A": "₹4,186",
      },
      "36V": {
        "5A": "₹4,186",
        "8A": "₹5,460",
        "10A": "₹6,188",
      },
      "48V": {
        "8A": "₹5,460",
        "10A": "₹6,188"
      },
      "60V": {
        "6A": "₹4,368",
        "8A": "₹5,460",
        "10A": "₹6,188",
      },
      "72V": {
        "6A": "₹4,641",
        "8A": "₹5,824",
        "10A": "₹6,734",
        "12A": "₹8,190"
      }
    },
    features: ["Power Management", "IP68 Rated", "Load balancing"],
    category: "E-Bike Chargers",
    colours: []
  },
  {
    id: "3K3-01",
    name: "AC EVSE Point 3K3-01",
    description: "A basic AC charger designed for home and small commercial charging with a 3.5 kW output and essential safety features.",
    detailedDescription: "The SAMKU AC EVSE POINT 3K3-01 delivers reliable charging with a 3.3kW output through a 16A Indian socket, powered by a single-phase input (170-260V, 16A). It boasts an impressive ≥99.9% efficiency and features a seven-segment display for easy monitoring. With IP54 protection, it’s suitable for indoor and outdoor use, supported by natural convection cooling. Offline operation with manual authentication ensures straightforward access. Compact in design (228x105x228mm) and lightweight (1-3kg), it comes with a 1-year warranty.",
    image: [ThreeK3],
    price: "₹4,000",
    powerImages: {
      "3.3kW": {
        main: ThreeK3, 
        additional: []
      }
    },
    powerPrices: {
      "3.3kW": "₹4,000",
    },
    powerOptions: ["3.3 kW"],
    ratedCurrent: ["16A"],
    features: ["Compact and Simple Design", "Basic Charging Capabilities", "Essential Safety Features", "IP54 protection"],
    category: "AC Chargers",
    colours: ["Green", "Orange", "Pink"]
  },
  {
    id: "ac-point-02gun",
    name: "AC POINT-7k4-TYP2-02",
    description: "The SAMKU AC POINT-7.4KW-Type-2-02Gun is a dual-gun AC EV charger delivering 15kW (7.5kW per gun). It supports Type 2 connectors, smart authentication (RFID, app, plug-and-charge), and OCPP connectivity for remote monitoring and management.",
    detailedDescription: "The SAMKU AC POINT-7.4KW-Type-2-02Gun provides powerful charging with a 15kW total output, split between two Type 2 guns (7.5kW, 32A each), powered by a three-phase input (380-415V). It features an LCD display and supports OCPP 1.6J for seamless smart connectivity. Authentication options include RFID, app, and plug-and-charge for secure and convenient access. With IP54 protection and natural convection cooling, it’s built for reliable indoor and outdoor operation. Each gun comes with a 5m cable, and the unit measures 378x150x598mm, weighing 4.5kg, with a 1-year warranty.",
    image: [ac_point_02gun],
    price: "₹75,600",
    powerImages: {
      "15kW": {
        main: ac_point_02gun, 
        additional: []
      }
    },
    powerPrices: {
      "15kW": "₹75,600",
      
    },
    powerOptions: ["15kW"],
    ratedCurrent: ["32A"],
    features: ["Dual Charging Capability", "Smart Authentication & Monitoring", "OCPP Connectivity", "Advanced Safety Feature"],
    category: "AC Chargers",
    colours: []
  },
  {
    id: "ac-lightning-ev-charger",
    name: "AC Lightning EV Charger",
    description: "The SAMKU AC Lightning EV Charger delivers 7.4kW to 22kW power for residential and commercial use. With a sleek design, Type 2 connectors, multi-user authentication, and IP54 protection, it ensures reliable indoor and outdoor charging.",
    detailedDescription: "The SAMKU AC Lightning EV Charger offers flexible charging with power options of 7.4kW, 11kW, and 22kW, supporting single or three-phase input (190-415V, 16-32A). Equipped with a Type 2 connector and a 5m cable, it features an LCD display and OCPP 1.6J for smart connectivity. Secure access is ensured through RFID, app, or plug-and-charge authentication methods. With IP54 protection and natural convection cooling, it’s designed for dependable indoor and outdoor use. The charger measures 267x130x369mm, weighs 3.5kg, and includes a 1-year warranty.",
    image: [lightning],
    price: "₹49,000",
    powerImages: {
      "7.4kW": {
        main: lightning, 
        additional: []
      },
      "11kW": {
        main: lightning, 
        additional: []
      },
      "22kW": {
        main: lightning, 
        additional: []
      },
    },
    powerPrices: {
      "7.4kW": "₹49,000",
      "11kW": "₹68,000",
      "22kW": "₹75,200"
    },
    powerOptions: ["7.4kW", "11kW", "22kW"],
    ratedCurrent: ["32A"],
    features: ["Versatile Power Output", "Smart Connectivity", "Advanced Safety Features", "IP54-rated"],
    category: "AC Chargers",
    colours: ["Blue", "Green"]
  },
  {
    id: "ac-point-haibrid-ocpp",
    name: "AC Point-Haibrid-OCPP",
    description: "The AC Point-Haibrid-OCPP is a hybrid EV charger supporting both AC and DC charging, ensuring wide compatibility and seamless OCPP-based network integration.",
    detailedDescription: "The SAMKU AC POINT-HAIBRID-OCPP delivers versatile charging with a 14kW total output, combining a 7.5kW Type 2 gun (32A) and a 3.3kW 16A Indian socket, powered by a three-phase input (380-415V). It features an LCD display and supports OCPP 1.6J for advanced connectivity. Authentication options include RFID, app, and plug-and-charge for secure access. With IP54 protection, a 5m cable for the Type 2 gun, and natural convection cooling, it ensures reliable performance indoors and outdoors. The unit measures 378x150x598mm, weighs 4.5kg, and comes with a 1-year warranty.",
    image: [ac_point_02gun],
    price: "₹67,200",
    powerImages: {
      "14kW": {
        main: ac_point_02gun, 
        additional: []
      }
    },
    powerPrices: {
      "14kW": "₹67,200",
    },
    powerOptions: ["14kW"],
    ratedCurrent: ["32A"],
    features: ["Hybrid Charging Capability", "OCPP Compliance", "Robust Safety Features", "Versatile Installation Options"],
    category: "AC Chargers",
    colours: []
  },
  {
    id: "ac-point-3k3-ieco3",
    name: "AC Point-3k3-IEC-03",
    description: "The AC Point-3k3-IEC-03 is a compact and efficient 3.3 kW AC charger designed for electric vehicles (EVs), offering reliable charging capabilities suitable for residential and light commercial applications.",
    detailedDescription: "The SAMKU AC POINT-3K3-IEC03 (BHARAT AC 001) provides robust charging with a 10kW total output, distributed across three 16A sockets (3.3kW each), powered by a three-phase input (380-415V). It features an LCD display and supports OCPP 1.6J for smart connectivity. Secure access is enabled through RFID, app, or plug-and-charge authentication. With IP54 protection and natural convection cooling, it’s built for dependable indoor and outdoor operation. The charger measures 378x150x598mm, weighs 4.5kg, and includes a 1-year warranty.",
    image: [ThreeK3],
    price: "₹45,760",
    powerImages: {
      "10kW": {
        main: ThreeK3, 
        additional: []
      }
    },
    powerPrices: {
      "10kW": "₹45,760"
    },
    powerOptions: ["10kW"],
    ratedCurrent: ["16A"],
    features: ["Flexible Output Options", "Secure Authentication and Billing", "IP54-rated"],
    category: "AC Chargers",
    colours: []
  },
  {
    id: "ac-point-3k3-ocpp",
    name: "AC POINT-3K3-16A-01-OCPP",
    description: "An OCPP-enabled AC charger with Ethernet and Wi-Fi support, suitable for smart charging networks.",
    detailedDescription: "The SAMKU AC EVSE POINT-3K3-OCPP-16A-01 offers efficient charging with a 3.3kW output via a 16A socket, driven by a single-phase input (170-260V, 16A). It achieves ≥99.9% efficiency and features an LCD display with OCPP 1.6J support for smart connectivity. Authentication methods include RFID, app, and plug-and-charge for secure and convenient access. With IP54 protection and natural convection cooling, it’s ideal for indoor and outdoor use. Compact at 250x130x300mm and weighing 3kg, it comes with a 1-year warranty.",
    image: [AC3k3ocpp, AC3k3ocpp1],
    powerImages: {
      "3.3kW": {
        main: AC3k3ocpp, 
        additional: [AC3k3ocpp1]
      }
    },
    powerPrices: {
      "3.3kW": "₹19,200",
    },
    price: "₹19,200",
    powerOptions: ["3.3kW"],
    ratedCurrent: ["16 A"],
    features: ["Smart Connectivity", "OCPP 1.6 J Compliance", "Multi-User Authentication", "Advanced Safety Measures "],
    category: "AC Chargers",
    colours: []
  },
  {
    id: "ac-lightning-ev-charger",
    name: "AC-POINT-7k4-TYP2-01",
    description: "The SAMKU AC-POINT-7k4-TYP2-01 delivers 7.4kW to 22kW power for residential and commercial use. With a sleek design, Type 2 connectors, multi-user authentication, and IP54 protection, it ensures reliable indoor and outdoor charging.",
    detailedDescription: "The SAMKU AC-POINT-7k4-TYP2-01 offers flexible charging with power options of 7.4kW, 11kW, and 22kW, supporting single or three-phase input (190-415V, 16-32A). Equipped with a Type 2 connector and a 5m cable, it features an LCD display and OCPP 1.6J for smart connectivity. Secure access is ensured through RFID, app, or plug-and-charge authentication methods. With IP54 protection and natural convection cooling, it’s designed for dependable indoor and outdoor use. The charger measures 267x130x369mm, weighs 3.5kg, and includes a 1-year warranty.",
    image: [lightning],
    price: "₹28,800",
    powerImages: {
      "7.4kW": {
        main: lightning, 
        additional: []
      }
    },
    powerPrices: {
      "7.4kW": "₹28,800",
    },
    powerOptions: ["7.4kW"],
    ratedCurrent: ["32A"],
    features: ["Versatile Power Output", "Smart Connectivity", "Advanced Safety Features", "IP54-rated"],
    category: "AC Chargers",
    colours: ["Blue", "Green"]
  },
  {
    id: "dc-single-gun-charger",
    name: "DC Single Gun Charger",
    description: "A compact, efficient DC fast charger designed for commercial and public EV charging, ideal for 4-wheelers, offering reliable performance with advanced connectivity.",
    detailedDescription: "The 30kW DC charger supports the CCS2 charging standard, ensuring compatibility with most electric vehicles. It operates in extreme temperatures ranging from -20°C to 70°C and features built-in temperature sensors and smoke detectors for enhanced safety. The charger is built with intelligent power management, optimizing energy efficiency while minimizing losses",
    image: ["/30-DC.png",detailimages30DC2, detailimages30DC],
    powerImages: {
      "30kW": {
        main: "/30-DC.png", 
        additional: [detailimages120DC2b, detailimages120DC]
      }
    },
    powerPrices: {
      "30kW": "₹4,80,000"
    },
    price: "₹4,80,000",
    powerOptions: ["30kW"],
    ratedCurrent: ["72A"],
    features: ["Solar integration", "Smart monitoring", "Advanced safety measures", "Wide operating temperature"],
    category: "DC Chargers",
    colours: []
  },
  {
    id: "dc-dual-gun-charger",
    name: "DC Dual Gun Charger",
    description: "The 60kW - 120kW DC EV Charger is a dual-gun charging station that supports dynamic load balancing. It is ideal for commercial EVs, fleet operations, and highway charging stations.",
    detailedDescription: "This mid-range DC charger is designed to offer high-speed charging with intelligent power distribution between two charging guns. The charger supports CCS2 fast-charging standards and operates efficiently in -40°C to 70°C. With an IP54-rated enclosure, it is weatherproof and suitable for both indoor and outdoor installations. It features voltage and surge protection, ensuring the safety of vehicles and the charging infrastructure.",
    // Keep the default images array
    image: [ DC_Charger_60_120_180KW, detailimages120DC2b, detailimages120DC],
    // Add this new mapping for power-specific images
    powerImages: {
      "60kW": {
        main: DC_Charger_60KW, 
        additional: [detailimages120DC2b, detailimages120DC]
      },
      "120kW": {
        main: DC_Charger_120KW, 
        additional: [detailimages120DC2b, detailimages120DC]
      },
      "180kW": {
        main: DC_Charger_180KW, 
        additional: [detailimages120DC2b, detailimages120DC]
      }
    },
    powerPrices: {
      "60kW": "₹8,32,000",
      "120kW": "₹12,32,000",
      "180kW": "₹16,80,000"
    },

    price: "₹8,32,000",
    powerOptions: ["60kW", "120kW", "180kW"],
    ratedCurrent: ["80A", "150A", "300A"],
    features: ["Dual-gun charging system", "Fast charging capability", "Durable and weather-resistant", "Enhanced safety protocols", "User-friendly interface"],
    category: "DC Chargers",
    colours: []
  },
  {
    id: "dc-rapid-ev-charger",
    name: "DC Rapid EV Charger",
    description: "The 240kW DC EV Charger is a high-speed, dual-gun EV charging station with dynamic load balancing, designed for highway rest stops, fleet depots, and commercial EVs.",
    detailedDescription: "This high-performance EV charger supports CCS2 fast-charging protocols and delivers ultra-fast power to electric vehicles. It is equipped with multiple safety layers, including temperature sensors, voltage surge protection, and insulation testing. The charger operates in extreme weather conditions and integrates smart payment options for public users.",
    image: ["/240-DC.png", detailimages120DC2b,detailimages40DC],
    price: "₹20,32,000",
    powerImages: {
      "240kW": {
        main: DC_Charger_60KW, 
        additional: [detailimages120DC2b, detailimages120DC]
      }
    },
    powerPrices: {
      "240kW": "₹20,32,000"
    },
    powerOptions: ["240kW"],
    ratedCurrent: ["345A"],
    features: ["Ultra-fast charging", "Dual charging ports", "Weather-resistant design", "Advanced safety protocols", "Smart payment options"],
    category: "DC Chargers",
    colours: []
  },
  {
    id: "dc-rapid-elite-charger",
    name: "DC Rapid Elite Charger",
    description: "The 360kW to 720kW DC EV Charger is an ultra-fast charging solution designed for commercial EV fleets, electric buses, and high-performance electric vehicles.",
    detailedDescription: "This heavy-duty charging station is designed for fast power delivery and supports CHAdeMO, CCS2, and GBT protocols. With dynamic load balancing, it can efficiently distribute power between multiple charging guns. It integrates forced air cooling to prevent overheating and includes IP54-rated protection, making it suitable for outdoor installations.",
    image: ["/360-720-DC.png",  detailimages360DC2, detailimages360DC],
    price: "₹32,16,000",
    powerImages: {
      "360kW": {
        main: DC_Charger_120KW, 
        additional: [detailimages120DC2b, detailimages120DC]
      },
      "720kW": {
        main: DC_Charger_180KW, 
        additional: [detailimages120DC2b, detailimages120DC]
      }
    },
    powerPrices: {
      "360kW": "₹32,16,000",
      "720kW": "₹51,52,000"
    },
    powerOptions: ["360kW", "720kW"],
    ratedCurrent: ["520A"],
    features: ["Ultra-high-speed charging", "Multi-standard support", "Dynamic load balancing", "Smart monitoring and remote management"],
    category: "DC Chargers",
    colours: []
  },
  {
    id: "cargo-e-bike",
    name: "Cargo E-Bike",
    description: "Versatile charging solution for various electric cycles",
    detailedDescription: "A flexible charger for cargo e-bikes, offering reliable performance and ratedCurrent with various cycle models.",
    image: [cargo_e_bike, cargo_e_bike1],
    price: "₹46,000",
    powerImages: {
      "60kW": {
        main: cargo_e_bike, 
        additional: []
      }
    },
    powerPrices: {
      "60kW": "₹46,000",
    },
    powerOptions: ["1.5kW"],
    ratedCurrent: ["3A"],
    features: ["Multiple adapters", "Compact design", "Energy efficient"],
    category: "Electric Cycles",
    colours: []
  },
  {
    id: "type-2-charging-gun",
    name: "AC Type-2 Charging Gun",
    description: "The Type-02 Charging Gun is a versatile and reliable charging solution designed for efficient and safe charging across various e-bike models",
    detailedDescription: "Crafted for compatibility with standard electric bicycle charging ports, the Type-02 Charging Gun offers a seamless charging experience. Its compact and ergonomic design allows for easy handling and storage, while the inclusion of multiple adapters ensures broad compatibility with different e-bike models. Built with safety in mind, this charging gun incorporates features such as overvoltage and overcurrent protection, safeguarding both the charger and the e-bike's battery during the charging process.",
    image: ["/type 2.webp"],
    price: "₹6,000",
    powerImages: {
      "3.3kW": {
        main: "/type 2.webp", 
        additional: []
      },
      "7.4kW": {
        main: "/type 2.webp", 
        additional: []
      },
      "11kW": {
        main: "/type 2.webp", 
        additional: []
      },
      "22kW": {
        main: "/type 2.webp", 
        additional: []
      }
    },
    powerPrices: {
      "3.3kW": "₹6,000",
      "7.4kW": "₹6,200",
      "11kW": "₹9,000",
      "22kW": "₹9,000"
    },
    powerOptions: ["3.3kW", "7.4kW", "11kW", "22kW"],
    ratedCurrent: ["16A", "32A"],
    combinedPrices: {
      "3.3kW": {
        "16A": "₹6,000"
      },
      "7.4kW": {
        "32A": "₹6,200"
      },
      "11kW": {
        "32A": "₹9,000"
      },
      "22kW": {
        "32A": "₹9,000"
      }
    },
    features: ["Multiple adapters", "Cable Length: 5 meter", "Energy efficient", "Compatibilty: AC Type 2, CSS Type 2"],
    category: "EV Accessories",
    colours: []
  },
  {
    id: "type-6-charging-gun",
    name: "Type-6 Charging Gun",
    description: "The Type-06 Charging Gun is a robust and efficient charging solution tailored for electric two- and three-wheelers, ensuring rapid and safe charging across various compatible models.",
    detailedDescription: "Designed in compliance with the IEC 62196-6 standard, the Type-06 Charging Gun supports DC fast charging with a rated voltage of up to 120V and current options ranging from 60A to 120A. Its compact and ergonomic design facilitates easy handling and storage, making it suitable for both personal and commercial use. The charging gun incorporates advanced safety features, including overvoltage, overcurrent, and short-circuit protection, ensuring a secure charging experience.",
    image: ["/type 6.webp", "/type 06.webp"],
    price: "₹8,200",
    powerImages: {
      "3kW": {
        main: "/type 6.webp", 
        additional: []
      }
    },
    powerPrices: {
      "3kW": "₹8,200",
    },
    powerOptions: ["3kW"],
    ratedCurrent: ["16A"],
    features: ["High Current Capacity", "Durable Build", "Waterproof Design", "Compatibilty: Type 6", "Cable size: 5 meter"],
    category: "EV Accessories",
    colours: []
  },
  {
    id: "type-7-charging-gun",
    name: "Type-7 Charging Gun",
    description: "​The Type-07 Charging Gun is a versatile and efficient charging solution designed for reliable performance and broad compatibility across various e-bike models.",
    detailedDescription: "Engineered to support charging capacities ranging from 1kW to 7kW with a charging current of 32A, the Type-07 Charging Gun accommodates diverse charging needs. Its compact and ergonomic design facilitates easy handling and storage, making it suitable for both personal and commercial use. The charging gun incorporates advanced safety features, including overvoltage, overcurrent, and short-circuit protection, ensuring a secure charging experience.​",
    image: ["/type 7.jpg"],
    price: "₹9,000",
    powerImages: {
      "3kW": {
        main: "/type 7.jpg", 
        additional: []
      }
    },
    powerPrices: {
      "60kW": "₹9,000"
    },
    powerOptions: ["3kW"],
    ratedCurrent: ["16A"],
    features: ["High Power Capacity", "Durable Build", "Cable Length: 5 meter", "Compatibilty: Type 7"],
    category: "EV Accessories",
    colours: []
  },
  {
    id: "ccs-type-2-charging-gun",
    name: "CCS Type-2 Charging Gun",
    description: "The CCS Type-2 Charging Gun is a high-performance charging solution designed for electric vehicles (EVs) compatible with the Combined Charging System (CCS) Type 2 standard. It offers efficient and rapid charging capabilities, ensuring your EV is ready for the road in minimal time.",
    detailedDescription: "Engineered to support charging capacities ranging from 30kW to 240kW and cable size from 16mm to 70mm, the CCS Type-2 Charging Gun accommodates diverse charging requirements. Its ergonomic design facilitates easy handling and storage, making it suitable for both personal and commercial use. The charging gun incorporates advanced safety features, including overvoltage, overcurrent, and short-circuit protection, ensuring a secure and reliable charging experience.​",
    image: ["/ccs3.jpg"],
    price: "₹21,200",
    powerImages: {
      "60kW": {
        main: "/ccs3.jpg", 
        additional: []
      },
      "150kW": {
        main: "/ccs3.jpg", 
        additional: []
      },
      "240kW": {
        main: "/ccs3.jpg", 
        additional: []
      }
    },
    powerPrices: {
      "60kW": "₹21,200",
      "120kW": "₹34,300",
      "180kW": "₹46,200"
    },
    powerOptions: ["60kW", "150kW", "240kW"],
    ratedCurrent: ["80A", "150A", "200A"],
    features: ["IP44 Protection", "Voltage: 1000V", "Cable Length: 5 meter", "Compatibilty: CCS Type 2"],
    category: "EV Accessories",
    colours: []
  },
  {
    id: "mate60-2-4-pin",
    name: "Chogori Mate60 2+4 Pin",
    description: "The Chogori Mate60 2+4 Pin Connector is a high-quality, waterproof electrical connector designed for efficient charging and discharging applications in electric vehicles (EVs) and other high-power systems. Featuring a 2+4 pin configuration, it ensures reliable power transmission and signal communication between components.",
    detailedDescription: "Designed for demanding charging and discharging applications, the Chogori Mate60 2+4 Pin Connector boasts a robust push-lock mechanism that provides a secure connection with an audible click when engaged. Its locking nut with lever ensures a tight fit, while the three-dot design enhances stability in vibrating environments. The connector also offers a countersunk panel mount solution with a 90-degree cable exit, reducing overall height. It is RoHS and REACH compliant, meeting stringent environmental and safety standards.",
    image: ["/mate6.jpg"],
    price: "₹945",
    powerImages: {
      "80V": {
        main: "/mate6.jpg", 
        additional: []
      }
    },
    powerPrices: {
      "80V": "₹945",
    },
    powerOptions: ["80V"],
    ratedCurrent: ["50A"],
    features: ["IP44 Protection", "IP67 Rated", "Audible click while locking", "RoHS and REACH Compliant"],
    category: "EV Accessories",
    colours: []
  },
  {
    id: "large60-2-4-pin",
    name: "Chogori Large 2+4 Pin",
    description: "The Chogori Large 2+4 Pin Connector is a high-quality, waterproof electrical connector designed for secure and efficient connections in electric vehicles (EVs) and other high-power applications. Featuring a 2+4 pin configuration, it ensures reliable power transmission and communication between components.​",
    detailedDescription: "Crafted from high-temperature nylon, the Chogori Large 2+4 Pin Connector is built to withstand demanding environments. It supports a current rating of up to 30A and a voltage rating of 250V, making it suitable for various EV applications. The connector's IP67 waterproof rating ensures durability and reliable performance under challenging weather conditions. Its user-friendly design allows for easy connection and disconnection, enhancing the overall user experience.",
    image: ["/large2.jpg"],
    price: "₹945",
    powerImages: {
      "80V": {
        main: "/large2.jpg", 
        additional: []
      }
    },
    powerPrices: {
      "80V": "₹945",
    },
    powerOptions: ["80V"],
    ratedCurrent: ["80A"],
    features: ["IP44 Protection", "IP67 Rated", "Audible click while locking", "RoHS and REACH Compliant"],
    category: "EV Accessories",
    colours: []
  },
  {
    id: "smart-charging-safety-box",
    name: "SMART Charging Safety Box",
    description: "​The SMART Charging Safety Box is a high-performance charging solution designed to be compatible with multiple electric vehicles (EVs). It offers efficient and rapid charging capabilities, ensuring your EV,s safety",
    detailedDescription: "Engineered to support charging capacities ranging from 30kW to 240kW, the SMART Charging Safety Box accommodates diverse charging requirements. Its ergonomic design facilitates easy handling and storage, making it suitable for both personal and commercial use. The charging unit incorporates advanced safety features, including overvoltage, overcurrent, and short-circuit protection, ensuring a secure and reliable charging experience.​",
    image: ["/smart.jpg", "/smart1.jpg", "/smart2.jpg"],
    price: "₹5,200",
    powerImages: {
      "4kW": {
        main: "/smart.jpg", 
        additional: []
      }
    },
    powerPrices: {
      "4kW": "₹5,200"
    },
    powerOptions: ["4kW"],
    ratedCurrent: ["16A"],
    features: ["IP44 Protection", "RFID Secure", "Auto-Cut on Full Charge", "Compatibible with Multiple EVs"],
    category: "AC Chargers",
    colours: []
  }
];