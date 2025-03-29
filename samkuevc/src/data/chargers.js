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
  }
];