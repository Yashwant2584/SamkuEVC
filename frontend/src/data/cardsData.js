import charger_installation_service from "../images/service_card_coverimages/charger-installation-service.png";
import washing_service from "../images/service_card_coverimages/washing-service.png";
import battery_services from "../images/service_card_coverimages/battery-services.png";
import software_service from "../images/service_card_coverimages/software-service.png";
import wheel_service from "../images/service_card_coverimages/wheel-service.png";
import Empergency_service from "../images/service_card_coverimages/Emergency_Services.png";
import repairng_maintance_service from "../images/service_card_coverimages/Repairing_Maintenance_service.png"

import ChargingInstallationImage1 from "../images/cardModalImages/ChargingInstallation-Image1.jpg";
import ChargingInstallationImage2 from "../images/cardModalImages/ChargingInstallation-Image2.jpg";
import ChargingInstallationImage3 from "../images/cardModalImages/ChargingInstallation-Image3.jpg";
import ChargingInstallationImage4 from "../images/cardModalImages/ChargingInstallation-Image4.jpg";
import ChargingInstallationImage5 from "../images/cardModalImages/ChargingInstallation-Image5.jpg";
import washingimage1 from "../images/cardModalImages/washing_service-image1.jpg";
import washingimage2 from "../images/cardModalImages/washing_service-image2.jpg";
import washingimage3 from "../images/cardModalImages/washing_service-image3.jpg";
import washingimage4 from "../images/cardModalImages/washing_service-image4.jpg";
import batteryserviceimage1 from "../images/cardModalImages/battery_services-image1.jpg";
import batteryserviceimage2 from "../images/cardModalImages/battery_services-image2.jpg";
import batteryserviceimage3 from "../images/cardModalImages/battery_services-image3.jpg";
import reparing_maintanceserviceimage1 from "../images/cardModalImages/repairingmaintainence_service-image1.jpg";
import reparing_maintanceserviceimage2 from "../images/cardModalImages/repairingmaintainence_service-image2.jpg";
import reparing_maintanceserviceimage3 from "../images/cardModalImages/repairingmaintainence_service-image3.jpg";
import reparing_maintanceserviceimage4 from "../images/cardModalImages/repairingmaintainence_service-image4.jpg";
import reparing_maintanceserviceimage5 from "../images/cardModalImages/repairingmaintainence_service-image5.jpg";
import wheelserviceimage1 from "../images/cardModalImages/Wheel_Services_image1.jpg";
import wheelserviceimage2 from "../images/cardModalImages/Wheel_Services_image2.jpg";
import Emergencyserviceimage1 from "../images/cardModalImages/EmergencyServices_image1.jpg";
import Emergencyserviceimage2 from "../images/cardModalImages/EmergencyServices_image2.jpg";
import Emergencyserviceimage3 from "../images/cardModalImages/EmergencyServices_image3.jpg";
import Emergencyserviceimage4 from "../images/cardModalImages/EmergencyServices_image4.jpg";


const cardsData = [
  {
    id: 1,
    title: "EV Charger Installation & Maintenance",
    subtitle: "Professional & Efficient",
    description:
      "Professional installation and maintenance services for all types of EV chargers",
    price: "1,999",
    services: [
      "Installation of All Types of chargers.",
      "Fast Charging Installation.",
      "Wall-mounted or portable charger setup.",
    ],
    image: charger_installation_service,
    isPrime: true,
    rating: 4.8,
    scheduleImages: [
      ChargingInstallationImage1,
      ChargingInstallationImage2,
      ChargingInstallationImage3,
      ChargingInstallationImage4,
      ChargingInstallationImage5,
    ],
    customQuestions: [
      {
        type: "checkbox",
        label: "Select Services:",
        name: "selectServiceType",
        options: [
          { value: "all type charger", label: "Installation of All Types of chargers." },
          { value: "fast charging installation", label: "Fast Charging Installation." },
          { value: "charger setup type", label: "Wall-mounted or portable charger setup." }
        ]
      },
      {
        type: "radio",
        label: "Charger Type:",
        name: "chargerType",
        options: [
          { value: "level1", label: "Level 1 (Standard)" },
          { value: "level2", label: "Level 2 (Fast Charging)" },
          { value: "level3", label: "Level 3 (DC Fast Charging)" }
        ]
      },
      {
        type: "radio",
        name: "serviceType", // This will override the default service type question
        label: "Select Service Type:",
        options: [
          { value: "home", label: "Home Installation (Additional ₹149 charges)" },
          { value: "site", label: "Commercial Installation (Additional ₹499 charges)" }
        ]
      },
      {
        type: "radio",
        name: "vehicleType", // This will override the default vehicle type question
        label: "Select Vehicle Type:",
        options: [
          { value: "2wheeler", label: "2-Wheeler" },
          { value: "3wheeler", label: "3-Wheeler" },
          { value: "4wheeler", label: "4-Wheeler" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "EV Washing & Polishing",
    subtitle: "Expert Care & Attention",
    description:
      "Premium EV washing & polishing with eco-friendly cleaning. Keeps your vehicle spotless and well-maintained.",
    price: "999",
    services: [
      "Normal wash.",
      "Premium wash (Includes waxing and polishing).",
    ],
    image: washing_service,
    isPrime: true,
    rating: 4.5,
    scheduleImages: [
      washingimage1,
      washingimage2,
      washingimage3,
      washingimage4,
    ],
    customQuestions: [
      {
        type: "radio",
        label: "Wash Type:",
        name: "washType",
        options: [
          { value: "basic", label: "Normal Wash (₹149/-)", defaultChecked: true },
          { value: "premium", label: "Premium Wash (₹249/-)" }
        ]
      },
      {
        type: "checkbox",
        label: "Additional Services:",
        options: [
          { value: "polish", label: "Polishing (+₹799)" },
          { value: "wax", label: "Waxing (+₹599)" },
          { value: "interior", label: "Interior Cleaning (+₹399)" }
        ]
      },
      {
        type: "radio",
        name: "vehicleType", // This will override the default vehicle type question
        label: "Select Vehicle Type:",
        options: [
          { value: "2wheeler", label: "2-Wheeler" },
          { value: "3wheeler", label: "3-Wheeler (Currently unavailable)", disabled: true },
          { value: "4wheeler", label: "4-Wheeler (Currently unavailable)",  disabled: true }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Battery Services",
    subtitle: "Fast & Precision-Engineered",
    description:
      "Complete battery maintenance & optimization services for your EV.",
    price: "499",
    services: [
      "Battery health diagnostics and maintenance.",
      "Battery cleaning and terminal checks.",
      "Replacement of worn-out batteries.",
    ],
    image: battery_services,
    isPrime: true,
    rating: 4.7,
    scheduleImages: [
      batteryserviceimage1,
      batteryserviceimage2,
      batteryserviceimage3,
    ],
    customQuestions: [
      {
        type: "checkbox",
        label: "Select Services:",
        name: "selectServiceType",
        options: [
          { value: "all type charger", label: "Battery health diagnostics and maintenance.", defaultChecked: true },
          { value: "fast charging installation", label: "Battery cleaning and terminal checks." },
          { value: "charger setup type", label: "Replacement of worn-out batteries." }
        ]
      },
      {
        type: "radio",
        label: "Service Required:",
        name: "batteryServiceType",
        options: [
          { value: "diagnosis", label: "Battery Diagnosis", defaultChecked: true },
          { value: "maintenance", label: "Battery Maintenance" },
          { value: "replacement", label: "Battery Replacement" }
        ]
      },
      {
        type: "checkbox",
        label: "Additional Checks:",
        options: [
          { value: "performance", label: "Performance Check" },
          { value: "charging", label: "Charging System Check" },
          { value: "terminals", label: "Terminal Cleaning" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Vehicle Parts - Repairing and Maintenance",
    subtitle: "Reliable & Sustainable",
    description:
      "Expert EV parts repairing and maintenance for optimal performance, longevity, and reliability.",
    price: "399",
    services: [
      "Charger repairing.",
      "Controller repairing.",
      "Motor repairing.",
    ],
    image: repairng_maintance_service,
    isPrime: false,
    rating: 3.4,
    scheduleImages: [
      reparing_maintanceserviceimage1,
      reparing_maintanceserviceimage2,
      reparing_maintanceserviceimage3,
      reparing_maintanceserviceimage4,
      reparing_maintanceserviceimage5,
    ],
    customQuestions: [
      {
        type: "checkbox",
        label: "Repair Type:",
        name: "repairType",
        options: [
          { value: "charger", label: "Charger Repair (₹199/-)" },
          { value: "controller", label: "Controller Repair (₹199/-)" },
          { value: "motor", label: "Motor Repair (₹199/-)" },
          { value: "other", label: "Other Components" }
        ]
      },
      {
        type: "checkbox",
        label: "Issue Description:",
        options: [
          { value: "notWorking", label: "Not Working" },
          { value: "intermittent", label: "Intermittent Issues" },
          { value: "noise", label: "Unusual Noise" },
          { value: "overheating", label: "Overheating" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Tyre & Wheel Services",
    subtitle: "Certified & Quality-Checked",
    description:
      "Premium tyre and wheel services to ensure your EV's precised balance, saftey and longetivity .",
    price: "1,499",
    services: [
      "Tyre replacement.",
      "Puncture repairs and replacements.",
      "Wheel cleaning and polishing.",
    ],
    image: wheel_service,
    isPrime: false,
    rating: 3.4,
    scheduleImages: [wheelserviceimage1, wheelserviceimage2],
    customQuestions: [
      {
        type: "checkbox",
        label: "Wheel Service Type:",
        name: "wheelServiceType",
        options: [
          { value: "tyre-replacement", label: "Tyre Replacement (249 per Tyre)" },
          { value: "puncture-repair", label: "Puncture repairs and replacements. (99 per puncture)" },
          { value: "wheel-balancing", label: "Wheel cleaning and polishing. (149rs" }
        ]
      },
      {
        type: "checkbox",
        label: "Number of Wheels:",
        options: [
          { value: "front", label: "Front Wheel(s)" },
          { value: "rear", label: "Rear Wheel(s)" },
          { value: "all", label: "All Wheels" }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Routine Maintenance Services",
    subtitle: "Advanced & Dependable",
    description:
      "Routine EV maintenance ensures optimal performance, battery health, safety, and longevity with expert care.",
    price: "2,999",
    services: [
      "Brake system checks and repairs.",
      "Cooling system servicing for EV-specific needs.",
      "Inspection of electrical systems and components.",
    ],
    image: software_service,
    isPrime: false,
    rating: 3.4,
    scheduleImages: [ChargingInstallationImage1],
    customQuestions: [
      {
        type: "checkbox",
        label: "Additional Checks:",
        options: [
          { value: "brake", label: "Brake system checks and repairs (₹499/-)" },
          { value: "cooling", label: "Cooling system servicing for EV-specific needs. (₹499/-) " },
          { value: "electrical", label: "Inspection of electrical systems and components. (₹499/-)" }
        ]
      },
      {
        type: "radio",
        label: "Maintenance Package:",
        name: "maintenancePackage",
        options: [
          { value: "basic", label: "Basic Maintenance" },
          { value: "standard", label: "Standard Maintenance" },
          { value: "premium", label: "Premium Maintenance" }
        ]
      },
      {
        type: "radio",
        name: "serviceType", // This will override the default service type question
        label: "Select Service Type:",
        options: [
          { value: "home", label: "Home Installation (Additional ₹149 charges)" },
          { value: "site", label: "Commercial Installation (Additional ₹499 charges)" }
        ]
      },
      
    ]
  },
  {
    id: 7,
    title: "Emergency Services (Coming-Soon)",
    subtitle: "Rapid & Efficient",
    description:
      "Rapid and efficient emergency services for your EV to ensure you're never stranded.",
    price: "1,999",
    services: [
      "Mobile charging for stranded EVs.",
      "On-site minor repairs and troubleshooting.",
      "Emergency roadside assistance.",
    ],
    image: Empergency_service,
    isPrime: false,
    rating: 3.4,
    scheduleImages: [
      Emergencyserviceimage1,
      Emergencyserviceimage2,
      Emergencyserviceimage3,
      Emergencyserviceimage4,
    ],
    customQuestions: [
      {
        type: "checkbox",
        label: "Required Assistance:",
        options: [
          { value: "mobile-charging", label: "Mobile Charging" },
          { value: "towing", label: "Towing Service" },
          { value: "on-site-repair", label: "On-site Repair" }
        ]
      },
      {
        type: "radio",
        label: "Emergency Type:",
        name: "emergencyType",
        options: [
          { value: "battery", label: "Battery Died" },
          { value: "breakdown", label: "Vehicle Breakdown" },
          { value: "accident", label: "Accident/Damage" },
          { value: "other", label: "Other Emergency" }
        ]
      },
    ]
  },
];

export default cardsData;

