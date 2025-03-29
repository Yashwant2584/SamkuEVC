import detailimages30DC from "../images/C-Images/30-DC-d.png"
import detailimages30DC2 from "../images/C-Images/30DC2.png"

import detailimages120DC from "../images/C-Images/60-120-180-DC-d.png"
import detailimages120DC2b from "../images/C-Images/30DC2.png"

import detailimages40DC from "../images/C-Images/240-DC-d.png"


import detailimages360DC from "../images/C-Images/360-720-DC-d.png"
import detailimages360DC2 from "../images/C-Images/30DC2.png"


export const chargers = [
  {
    id: "li-Ion-battery-charger",
    name: "Li-Ion Battery Charger",
    description: "A robust charging solution designed for lithium-ion batteries, perfect for high-demand e-bike applications.",
    detailedDescription: "This Li-Ion Battery Charger offers reliable and efficient charging for commercial e-bike fleets. With its advanced power management system, it ensures optimal battery health and longevity.",
    image: ["/30-DC.png", "/img1.png", "/img2.png"],
    price: "₹7,999",
    powerOptions: ["24V", "36V", "48V", "60V", "72V"],
    ratedCurrent: ["CCS2", "GBT", "CHAdeMO"],
    features: ["Dual charging ports", "Touch screen display", "Load balancing"],
    category: "E-Bike Chargers",
    colours: []
  },
  {
    id: "lifepo4-battery-charger",
    name: "Lifepo4 Battery Charger",
    description: "High-power DC fast charging solution for commercial and fleet applications",
    detailedDescription: "Engineered for LiFePO4 batteries, this charger provides safe and efficient charging with built-in safety features for commercial use.",
    image: ["/30-DC.png", "/img1.png", "/img2.png"],
    price: "₹7,999",
    powerOptions: ["24V", "36V", "48V", "60V", "72V"],
    ratedCurrent: ["CCS2", "GBT", "CHAdeMO"],
    features: ["Dual charging ports", "Touch screen display", "Load balancing"],
    category: "E-Bike Chargers",
    colours: []
  },
  {
    id: "3K3-01",
    name: "AC EVSE Point 3K3-OCCP-01",
    description: "Smart home charging station with flexible power output",
    detailedDescription: "Perfect for residential use, this smart charger offers seamless integration with home energy systems and mobile app control.",
    image: ["/30-DC.png", "/img1.png", "/img2.png"],
    price: "₹699/-",
    powerOptions: ["3.3 kW", "7.4 kW"],
    ratedCurrent: ["Type 2"],
    features: ["Wi-Fi connectivity", "Smartphone app", "Schedule charging"],
    category: "AC Chargers",
    colours: ["Green", "Orange", "Pink"]
  },
  {
    id: "ac-point-02gun",
    name: "AC Point-02Gun",
    description: "Multi-vehicle charging solution for businesses and parking lots",
    detailedDescription: "Designed for high-traffic areas, this dual-gun charger provides efficient power distribution for multiple vehicles simultaneously.",
    image: ["/30-DC.png", "/img1.png", "/img2.png"],
    price: "₹4,999",
    powerOptions: ["100kW", "150kW", "200kW"],
    ratedCurrent: ["CCS", "Type 2"],
    features: ["Payment terminal", "4G connectivity", "Power management"],
    category: "AC Chargers",
    colours: []
  },
  {
    id: "ac-lightning-ev-charger",
    name: "AC Lightning EV Charger",
    description: "Compact and portable Level 2 charging solution",
    detailedDescription: "A lightweight and portable charging solution ideal for EV owners on the go, complete with multiple adapter options.",
    image: ["/30-DC.png", "/img1.png", "/img2.png"],
    price: "₹399/-",
    powerOptions: ["7.4kW", "11kW", "22kW"],
    ratedCurrent: ["Type 1", "Type 2"],
    features: ["Travel case", "Multiple adapters", "LED status"],
    category: "AC Chargers",
    colours: ["Pink", "Green"]
  },
  {
    id: "ac-point-haibrid-ocpp",
    name: "AC Point-Haibrid-OCPP",
    description: "Sleek street-side charging station for urban environments",
    detailedDescription: "Built for city use, this charger combines durability with modern design, perfect for public charging infrastructure.",
    image: ["/30-DC.png", "/img1.png", "/img2.png"],
    price: "₹2,999",
    powerOptions: ["11kW", "22kW", "43kW"],
    ratedCurrent: ["Type 2"],
    features: ["Vandal resistant", "Public access", "RFID reader"],
    category: "AC Chargers",
    colours: []
  },
  {
    id: "ac-point-3k3-ieco3",
    name: "AC Point-3k3-IEC03",
    description: "Grid-aware charging station with dynamic load balancing",
    detailedDescription: "An intelligent charger that adapts to grid demands, offering efficient energy use for eco-conscious installations.",
    image: ["/30-DC.png", "/img1.png", "/img2.png"],
    price: "₹1,499",
    powerOptions: ["11kW", "22kW", "33kW"],
    ratedCurrent: ["Type 2"],
    features: ["Smart grid integration", "Energy monitoring", "Over-the-air updates"],
    category: "AC Chargers",
    colours: []
  },
  {
    id: "ac-point-3k3-ocpp",
    name: "AC Point-3k3-OCPP",
    description: "Enterprise-grade charging solution for fleet management",
    detailedDescription: "Tailored for business fleets, this charger provides robust monitoring and management capabilities for large-scale operations.",
    image: ["/30-DC.png", "/img1.png", "/img2.png"],
    price: "₹5,999",
    powerOptions: ["100kW", "150kW", "200kW"],
    ratedCurrent: ["CCS", "CHAdeMO"],
    features: ["Fleet management software", "24/7 support", "Remote monitoring"],
    category: "AC Chargers",
    colours: []
  },
  {
    id: "dc-single-gun-charger",
    name: "DC Single Gun Charger",
    description: "Solar-optimized charging station for green energy integration",
    detailedDescription: "Optimized for solar power systems, this charger supports sustainable energy solutions with efficient power delivery.",
    image: ["/30-DC.png",detailimages30DC2, detailimages30DC],
    price: "₹2,499",
    powerOptions: ["20kW"],
    ratedCurrent: ["Type 1", "Type 2", "Type 3"],
    features: ["Solar integration", "Battery storage ready", "Energy export"],
    category: "DC Chargers",
    colours: []
  },
  {
    id: "dc-dual-gun-charger",
    name: "DC Dual Gun Charger",
    description: "Ultra-fast charging station for premium locations",
    detailedDescription: "A high-performance charger designed for premium locations, offering rapid charging with advanced cooling technology.",
    image: ["/60-120-180-DC.png" , detailimages120DC2b,detailimages120DC],
    price: "₹9,999",
    powerOptions: ["60kW", "120kW", "180kW"],
    ratedCurrent: ["CCS2", "GBT", "CHAdeMO"],
    features: ["Premium display", "Liquid-cooled cable", "Advanced diagnostics"],
    category: "DC Chargers",
    colours: []
  },
  {
    id: "dc-rapid-ev-charger",
    name: "DC Rapid EV Charger",
    description: "Space-saving wall-mounted charging solution",
    detailedDescription: "A compact, wall-mounted charger perfect for tight spaces, delivering fast charging without compromising on power.",
    image: ["/240-DC.png", detailimages120DC2b,detailimages40DC],
    price: "₹599",
    powerOptions: ["240kW"],
    ratedCurrent: ["CCS2", "CHAdeMO"],
    features: ["Slim design", "Easy installation", "LED status ring"],
    category: "DC Chargers",
    colours: []
  },
  {
    id: "dc-rapid-elite-charger",
    name: "DC Rapid Elite Charger",
    description: "Professional charging solution for office environments",
    detailedDescription: "Designed for workplace use, this charger offers advanced features like employee authentication and usage tracking.",
    image: ["/360-720-DC.png",  detailimages360DC2, detailimages360DC],
    price: "₹3,499",
    powerOptions: ["360kW", "720kW"],
    ratedCurrent: ["CCS2", "CHAdeMO"],
    features: ["Employee authentication", "Billing integration", "Usage reports"],
    category: "DC Chargers",
    colours: []
  },
  {
    id: "cargo-e-bike",
    name: "Cargo E-Bike",
    description: "Versatile charging solution for various electric cycles",
    detailedDescription: "A flexible charger for cargo e-bikes, offering reliable performance and ratedCurrent with various cycle models.",
    image: ["/30-DC.png", "/img1.png", "/img2.png"],
    price: "₹199",
    powerOptions: ["1.5kW", "2kW", "3kW"],
    ratedCurrent: ["Standard Electric Cycle Ports"],
    features: ["Multiple adapters", "Compact design", "Energy efficient"],
    category: "Electric Cycles",
    colours: []
  },
  {
    id: "type-2-charging-gun",
    name: "AC Type-2 Charging Gun",
    description: "The Type-02 Charging Gun is a versatile and reliable charging solution designed for efficient and safe charging across various e-bike models",
    detailedDescription: "Crafted for compatibility with standard electric bicycle charging ports, the Type-02 Charging Gun offers a seamless charging experience. Its compact and ergonomic design allows for easy handling and storage, while the inclusion of multiple adapters ensures broad compatibility with different e-bike models. Built with safety in mind, this charging gun incorporates features such as overvoltage and overcurrent protection, safeguarding both the charger and the e-bike's battery during the charging process.",
    image: ["/type 2.webp", "/type 2 2.jpg"],
    price: "₹6200 + 18% tax",
    powerOptions: ["3.3kW", "7.4W", "11kW", "22kW"],
    ratedCurrent: ["Standard Electric Cycle Ports"],
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
    price: "₹",
    powerOptions: ["3kW"],
    ratedCurrent: ["Type 6"],
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
    price: "₹199",
    powerOptions: ["3kW"],
    ratedCurrent: ["Type 7"],
    features: ["High Power Capacity", "Durable Build", "Cable Length: 5 meter", "Compatibilty: Type 7"],
    category: "EV Accessories",
    colours: []
  },
  {
    id: "ccs-type-2-charging-gun",
    name: "CCS Type-2 Charging Gun",
    description: "​The CCS Type-2 Charging Gun is a high-performance charging solution designed for electric vehicles (EVs) compatible with the Combined Charging System (CCS) Type 2 standard. It offers efficient and rapid charging capabilities, ensuring your EV is ready for the road in minimal time.",
    detailedDescription: "Engineered to support charging capacities ranging from 30kW to 240kW and cable size from 16mm to 70mm, the CCS Type-2 Charging Gun accommodates diverse charging requirements. Its ergonomic design facilitates easy handling and storage, making it suitable for both personal and commercial use. The charging gun incorporates advanced safety features, including overvoltage, overcurrent, and short-circuit protection, ensuring a secure and reliable charging experience.​",
    image: ["/type 7.jpg"],
    price: "₹199",
    powerOptions: ["30kW", "60kW", "150kW", "240kW"],
    ratedCurrent: ["CCS Type 2"],
    features: ["IP44 Protection", "Voltage: 1000V", "Cable Length: 5 meter", "Compatibilty: CCS Type 2"],
    category: "EV Accessories",
    colours: []
  },
  {
    id: "mate60-2-4-pin",
    name: "Chogori Mate60 2+4 Pin",
    description: "The Chogori Mate60 2+4 Pin Connector is a high-quality, waterproof electrical connector designed for efficient charging and discharging applications in electric vehicles (EVs) and other high-power systems. Featuring a 2+4 pin configuration, it ensures reliable power transmission and signal communication between components.",
    detailedDescription: "Designed for demanding charging and discharging applications, the Chogori Mate60 2+4 Pin Connector boasts a robust push-lock mechanism that provides a secure connection with an audible click when engaged. Its locking nut with lever ensures a tight fit, while the three-dot design enhances stability in vibrating environments. The connector also offers a countersunk panel mount solution with a 90-degree cable exit, reducing overall height. It is RoHS and REACH compliant, meeting stringent environmental and safety standards.",
    image: ["/type 7.jpg"],
    price: "₹945 + 18% tax",
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
    image: ["/type 7.jpg"],
    price: "₹945 + 18% tax",
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
    image: ["/type 7.jpg"],
    price: "₹5200 + 5% tax",
    powerOptions: ["4kW"],
    ratedCurrent: ["16A"],
    features: ["IP44 Protection", "RFID Secure", "Auto-Cut on Full Charge", "Compatibible with Multiple EVs"],
    category: "AC Chargers",
    colours: []
  }
];