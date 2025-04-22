const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Base application schema with common fields
const applicationSchema = new Schema(
  {
    applicationId: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: ["Pending", "In-review", "Approved", "Rejected"],
      default: "Pending",
    },
    notes: {
      type: String,
      default: "",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { discriminatorKey: "applicationType" }
);

// Normalize application type
const normalizeApplicationType = (type) => {
  if (!type) return null;
  const typeStr = type.toString().toLowerCase().trim().replace(/\s+/g, "-");
  const typeMap = {
    servicecenter: "service-center",
    chargingstation: "charging-station",
    contactquery: "contact-query",
    enquiry: "enquiry",
  };
  return typeMap[typeStr] || typeStr;
};

// Middleware to normalize applicationType
applicationSchema.pre("save", function (next) {
  if (this.isModified("applicationType")) {
    const normalizedType = normalizeApplicationType(this.applicationType);
    if (normalizedType) {
      this.applicationType = normalizedType;
    }
  }
  next();
});

// Base Application model
const Application = mongoose.model("Application", applicationSchema);

// Service Center Franchise Application schema
const ServiceCenterSchema = new Schema({
  personalInfo: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    photoUrl: { type: String },
  },
  businessInfo: {
    businessExperience: { type: String, required: true },
    companyName: { type: String, required: true },
    gstNumber: { type: String, required: true },
    investmentCapacity: { type: String, required: true },
    preferredLocation: { type: String, required: true },
    propertySize: { type: String, required: true },
  },
  technicalInfo: {
    technicalBackground: { type: String, required: true },
    automobileExperience: { type: String },
    evKnowledge: { type: String },
    certifications: { type: String },
  },
  additionalInfo: {
    whyJoinUs: { type: String },
    references: { type: String },
  },
});

// Charging Station Application schema
const ChargingStationSchema = new Schema({
  personalInfo: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    photoUrl: { type: String },
  },
  businessInfo: {
    businessExperience: { type: String, required: true },
    companyName: { type: String, required: true },
    gstNumber: { type: String, required: true },
    investmentCapacity: { type: String, required: true },
    preferredLocation: { type: String, required: true, default: "" }, // Added default to prevent empty string validation errors
    propertySize: { type: String, required: true },
  },
  technicalInfo: {
    electricalInfrastructure: { type: String, required: true },
    evKnowledge: { type: String },
  },
  additionalInfo: {
    whyJoinUs: { type: String },
    references: { type: String },
  },
});

// Recruitment Application schema
const RecruitmentSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  position: { type: String, required: true },
  experience: { type: String, required: true },
  resumeUrl: { type: String, required: true },
  photoUrl: { type: String },
});

// Contact Query schema
const ContactQuerySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, default: "General Inquiry" }, // Added subject field with default value
  message: { type: String, required: true },
  resolved: { type: Boolean, default: false },
});

// Enquiry schema
const EnquirySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  product: { type: String, required: true },
  productCategory: { type: String },
  powerOutput: { type: String },
  ratedCurrent: { type: String },
  productPrice: { type: String },
  message: { type: String },
  resolved: { type: Boolean, default: false },
});

// Create models using discriminator
const ServiceCenterApplication = Application.discriminator(
  "service-center",
  ServiceCenterSchema
);
const ChargingStationApplication = Application.discriminator(
  "charging-station",
  ChargingStationSchema
);
const RecruitmentApplication = Application.discriminator(
  "recruitment",
  RecruitmentSchema
);
const ContactQuery = Application.discriminator("contact-query", ContactQuerySchema);
const Enquiry = Application.discriminator("enquiry", EnquirySchema);

module.exports = {
  Application,
  ServiceCenterApplication,
  ChargingStationApplication,
  RecruitmentApplication,
  ContactQuery,
  Enquiry,
  normalizeApplicationType,
};