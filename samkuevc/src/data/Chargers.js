
export const chargers = [
  {
    id: "dc-fast-charger-pro",
    name: "DC Fast Charger Pro",
    description: "High-power DC fast charging solution for commercial and fleet applications",
    image: "https://images.unsplash.com/photo-1696446702239-e76522a74be6?w=800&auto=format&fit=crop&q=60",
    price: "7,999",
    power: "30kW",
    compatibility: ["ccs2", "GBT","CHAdeMO"],
    features: ["Dual charging ports", "Touch screen display", "Load balancing"],
    category: "DC Chargers"
  },
  {
    id: "home-flex-charger",
    name: "Home Flex Charger",
    description: "Smart home charging station with flexible power output",
    image: "https://images.unsplash.com/photo-1697490154588-d5e37c478542?w=800&auto=format&fit=crop&q=60",
    price: "$699",
    power: "11kW",
    compatibility: ["Type 2"],
    features: ["Wi-Fi connectivity", "Smartphone app", "Schedule charging"],
    category: "AC Chargers"
  },
  {
    id: "commercial-power-hub",
    name: "Commercial Power Hub",
    description: "Multi-vehicle charging solution for businesses and parking lots",
    image: "https://images.unsplash.com/photo-1633025094151-6fc996255e28?w=800&auto=format&fit=crop&q=60",
    price: "$4,999",
    power: "150kW",
    compatibility: ["CCS", "Type 2"],
    features: ["Payment terminal", "4G connectivity", "Power management"],
    category: "DC Chargers"
  },
  {
    id: "portable-ev-charger",
    name: "Portable EV Charger",
    description: "Compact and portable Level 2 charging solution",
    image: "https://images.unsplash.com/photo-1647500811408-6cca89dafd4d?w=800&auto=format&fit=crop&q=60",
    price: "$399",
    power: "7.2kW",
    compatibility: ["Type 1", "Type 2"],
    features: ["Travel case", "Multiple adapters", "LED status"],
    category: "EV Accessories"
  },
  {
    id: "urban-street-charger",
    name: "Urban Street Charger",
    description: "Sleek street-side charging station for urban environments",
    image: "https://images.unsplash.com/photo-1647427017067-8f33c2b7e381?w=800&auto=format&fit=crop&q=60",
    price: "$2,999",
    power: "22kW",
    compatibility: ["Type 2"],
    features: ["Vandal resistant", "Public access", "RFID reader"],
    category: "AC Chargers"
  },
  {
    id: "smart-grid-charger",
    name: "Smart Grid Charger",
    description: "Grid-aware charging station with dynamic load balancing",
    image: "https://images.unsplash.com/photo-1635598424147-c8a1c0ed0679?w=800&auto=format&fit=crop&q=60",
    price: "$1,499",
    power: "22kW",
    compatibility: ["Type 2"],
    features: ["Smart grid integration", "Energy monitoring", "Over-the-air updates"],
    category: "AC Chargers"
  },
  {
    id: "fleet-master-charger",
    name: "Fleet Master Charger",
    description: "Enterprise-grade charging solution for fleet management",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop&q=60",
    price: "$5,999",
    power: "150kW",
    compatibility: ["CCS", "CHAdeMO"],
    features: ["Fleet management software", "24/7 support", "Remote monitoring"],
    category: "DC Chargers"
  },
  {
    id: "solar-sync-charger",
    name: "Solar Sync Charger",
    description: "Solar-optimized charging station for green energy integration",
    image: "https://images.unsplash.com/photo-1662947995689-ec5165848ad1?w=800&auto=format&fit=crop&q=60",
    price: "$2,499",
    power: "11kW",
    compatibility: ["Type 2"],
    features: ["Solar integration", "Battery storage ready", "Energy export"],
    category: "AC Chargers"
  },
  {
    id: "rapid-charge-elite",
    name: "Rapid Charge Elite",
    description: "Ultra-fast charging station for premium locations",
    image: "https://images.unsplash.com/photo-1647427017733-13be40b0f254?w=800&auto=format&fit=crop&q=60",
    price: "$9,999",
    power: "400kW",
    compatibility: ["CCS"],
    features: ["Premium display", "Liquid-cooled cable", "Advanced diagnostics"],
    category: "DC Chargers"
  },
  {
    id: "compact-wall-charger",
    name: "Compact Wall Charger",
    description: "Space-saving wall-mounted charging solution",
    image: "https://images.unsplash.com/photo-1647427016437-e6d76128d967?w=800&auto=format&fit=crop&q=60",
    price: "$599",
    power: "7.4kW",
    compatibility: ["Type 1", "Type 2"],
    features: ["Slim design", "Easy installation", "LED status ring"],
    category: "AC Chargers"
  },
  {
    id: "workplace-pro-charger",
    name: "Workplace Pro Charger",
    description: "Professional charging solution for office environments",
    image: "https://images.unsplash.com/photo-1647427017139-6e8d943b848e?w=800&auto=format&fit=crop&q=60",
    price: "$3,499",
    power: "22kW",
    compatibility: ["Type 2"],
    features: ["Employee authentication", "Billing integration", "Usage reports"],
    category: "AC Chargers"
  },
  {
    id: "destination-charger-plus",
    name: "Destination Charger Plus",
    description: "Premium charging solution for hotels and destinations",
    image: "https://images.unsplash.com/photo-1647427016752-5cc3abc63371?w=800&auto=format&fit=crop&q=60",
    price: "$1,999",
    power: "22kW",
    compatibility: ["Type 2"],
    features: ["Guest authentication", "Hotel integration", "Status monitoring"],
    category: "AC Chargers"
  },
  {
    id: "e-bike-charger-mini",
    name: "E-Bike Charger Mini",
    description: "Compact charging solution for electric bicycles",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop&q=60",
    price: "$129",
    power: "2kW",
    compatibility: ["E-Bike Standard Connector"],
    features: ["Portable design", "Fast charging", "LED indicators"],
    category: "EV Bike Chargers"
  },
  {
    id: "e-bike-docking-station",
    name: "E-Bike Docking Station",
    description: "Multi-bike charging station for public spaces",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&auto=format&fit=crop&q=60",
    price: "$799",
    power: "3.6kW",
    compatibility: ["Universal E-Bike Connector"],
    features: ["Simultaneous charging", "Theft protection", "Weather resistant"],
    category: "EV Bike Chargers"
  },
  {
    id: "electric-cycle-charger",
    name: "Electric Cycle Charger",
    description: "Versatile charging solution for various electric cycles",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop&q=60",
    price: "$199",
    power: "1.5kW",
    compatibility: ["Standard Electric Cycle Ports"],
    features: ["Multiple adapters", "Compact design", "Energy efficient"],
    category: "EV Cycle Chargers"
  }
];