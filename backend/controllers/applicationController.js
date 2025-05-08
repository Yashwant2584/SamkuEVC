const {
  Application,
  ServiceCenterApplication,
  ChargingStationApplication,
  RecruitmentApplication,
  ContactQuery,
  Enquiry,
} = require("../models/Application");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary with credentials from environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Ensure upload directories exist for temporary storage
const ensureDirectoryExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const uploadsDir = path.join(__dirname, "../temp_uploads");
ensureDirectoryExists(uploadsDir);

// Generate unique application ID
const generateApplicationId = async (prefix) => {
  const date = new Date();
  const year = date.getFullYear().toString().slice(2);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const random = Math.floor(Math.random() * 9000 + 1000);
  return `${prefix}${year}${month}-${random}`;
};

// Configure multer for temporary file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname ? path.extname(file.originalname) : '.bin';
    const fileName = `${file.fieldname}-${uniqueSuffix}${extension}`;
    cb(null, fileName);
  },
});

// File filter for multer
const fileFilter = (req, file, cb) => {
  console.log("Processing file:", {
    fieldname: file.fieldname,
    mimetype: file.mimetype,
    originalname: file.originalname,
  });

  if (file.fieldname === "resume") {
    if (
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/msword" ||
      file.mimetype ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Resume must be PDF, DOC, or DOCX"), false);
    }
  } else if (file.fieldname === "photo") {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Photo must be JPG, JPEG, or PNG"), false);
    }
  } else {
    cb(null, true);
  }
};

// Configure multer
const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// Function to upload file to Cloudinary
const uploadToCloudinary = async (filePath, folder) => {
  try {
    if (!filePath) return null;
    const result = await cloudinary.uploader.upload(filePath, {
      folder: `SAMKU_EVC/${folder}`,
      resource_type: "auto"
    });
    
    // Delete the temporary file after upload
    fs.unlinkSync(filePath);
    
    return {
      url: result.secure_url,
      public_id: result.public_id
    };
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    // Try to delete the temporary file if it exists
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    return null;
  }
};

// Submit Service Center Application
exports.submitServiceCenterApplication = async (req, res) => {
  try {
    const uploadMiddleware = upload.single("photo");
    uploadMiddleware(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: `Multer error: ${err.message}` });
      } else if (err) {
        return res.status(400).json({ error: err.message });
      }

      if (!req.body.personalInfo || !req.body.businessInfo || !req.body.technicalInfo) {
        return res.status(400).json({ error: "Missing required form fields" });
      }

      const applicationId = await generateApplicationId("SC");
      const { personalInfo, businessInfo, technicalInfo, additionalInfo } = req.body;

      const parsedPersonalInfo =
        typeof personalInfo === "string" ? JSON.parse(personalInfo) : personalInfo;
      const parsedBusinessInfo =
        typeof businessInfo === "string" ? JSON.parse(businessInfo) : businessInfo;
      const parsedTechnicalInfo =
        typeof technicalInfo === "string" ? JSON.parse(technicalInfo) : technicalInfo;
      const parsedAdditionalInfo =
        typeof additionalInfo === "string" ? JSON.parse(additionalInfo) : additionalInfo;

      // Validate that preferredLocation is not empty
      if (!parsedBusinessInfo.preferredLocation || parsedBusinessInfo.preferredLocation.trim() === '') {
        return res.status(400).json({ error: "Preferred location is required" });
      }

      // Upload photo to Cloudinary if it exists
      if (req.file) {
        const photoResult = await uploadToCloudinary(req.file.path, "servicecenter");
        if (photoResult) {
          parsedPersonalInfo.photoUrl = photoResult.url;
          parsedPersonalInfo.photoPublicId = photoResult.public_id;
        }
      }

      const application = new ServiceCenterApplication({
        applicationId,
        applicationType: "service-center",
        personalInfo: parsedPersonalInfo,
        businessInfo: parsedBusinessInfo,
        technicalInfo: parsedTechnicalInfo,
        additionalInfo: parsedAdditionalInfo,
      });

      await application.save();

      // Send WebSocket notification
      if (global.sendNotificationWs) {
        global.sendNotificationWs({
          type: "application",
          targetRole: "admin",
          notification: {
            title: "New Service Center Application",
            message: `New service center application from ${parsedPersonalInfo.fullName || "Applicant"}`,
            data: {
              applicationId,
              applicationType: "service-center",
              applicantName: parsedPersonalInfo.fullName,
              location: parsedBusinessInfo.businessAddress || parsedPersonalInfo.address,
            },
          },
        });
      }

      res.status(201).json({
        message: "Service Center application submitted successfully",
        applicationId,
      });
    });
  } catch (error) {
    console.error("Error submitting service center application:", error);
    res.status(500).json({ error: "Error submitting application" });
  }
};

// Submit Charging Station Application
exports.submitChargingStationApplication = async (req, res) => {
  try {
    const uploadMiddleware = upload.single("photo");
    uploadMiddleware(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: `Multer error: ${err.message}` });
      } else if (err) {
        return res.status(400).json({ error: err.message });
      }

      if (!req.body.personalInfo || !req.body.businessInfo || !req.body.technicalInfo) {
        return res.status(400).json({ error: "Missing required form fields" });
      }

      const applicationId = await generateApplicationId("CS");
      const { personalInfo, businessInfo, technicalInfo, additionalInfo } = req.body;

      const parsedPersonalInfo =
        typeof personalInfo === "string" ? JSON.parse(personalInfo) : personalInfo;
      const parsedBusinessInfo =
        typeof businessInfo === "string" ? JSON.parse(businessInfo) : businessInfo;
      const parsedTechnicalInfo =
        typeof technicalInfo === "string" ? JSON.parse(technicalInfo) : technicalInfo;
      const parsedAdditionalInfo =
        typeof additionalInfo === "string" ? JSON.parse(additionalInfo) : additionalInfo;

      // Validate that preferredLocation is not empty
      if (!parsedBusinessInfo.preferredLocation || parsedBusinessInfo.preferredLocation.trim() === '') {
        // If it's empty, set a default value
        parsedBusinessInfo.preferredLocation = "Not specified";
      }

      // Upload photo to Cloudinary if it exists
      if (req.file) {
        const photoResult = await uploadToCloudinary(req.file.path, "chargingstation");
        if (photoResult) {
          parsedPersonalInfo.photoUrl = photoResult.url;
          parsedPersonalInfo.photoPublicId = photoResult.public_id;
        }
      }

      const application = new ChargingStationApplication({
        applicationId,
        applicationType: "charging-station",
        personalInfo: parsedPersonalInfo,
        businessInfo: parsedBusinessInfo,
        technicalInfo: parsedTechnicalInfo,
        additionalInfo: parsedAdditionalInfo,
      });

      await application.save();

      // Send WebSocket notification
      if (global.sendNotificationWs) {
        global.sendNotificationWs({
          type: "application",
          targetRole: "admin",
          notification: {
            title: "New Charging Station Application",
            message: `New charging station application from ${parsedPersonalInfo.fullName || "Applicant"}`,
            data: {
              applicationId,
              applicationType: "charging-station",
              applicantName: parsedPersonalInfo.fullName,
              location: parsedBusinessInfo.businessAddress || parsedPersonalInfo.address,
            },
          },
        });
      }

      res.status(201).json({
        message: "Charging Station application submitted successfully",
        applicationId,
      });
    });
  } catch (error) {
    console.error("Error submitting charging station application:", error);
    res.status(500).json({ error: "Error submitting application" });
  }
};

// Submit Recruitment Application
exports.submitRecruitmentApplication = async (req, res) => {
  try {
    const uploadMiddleware = upload.fields([
      { name: "resume", maxCount: 1 },
      { name: "photo", maxCount: 1 },
    ]);

    uploadMiddleware(req, res, async (err) => {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ error: `Multer error: ${err.message}` });
      } else if (err) {
        return res.status(400).json({ error: err.message });
      }

      if (!req.body.fullName || !req.body.email || !req.body.phone || !req.body.position || !req.body.experience) {
        return res.status(400).json({ error: "Missing required form fields" });
      }

      if (!req.files || !req.files.resume) {
        return res.status(400).json({ error: "Resume file is required" });
      }

      const applicationId = await generateApplicationId("RC");
      let resumeUrl, resumePublicId, photoUrl, photoPublicId;
      
      // Upload files to Cloudinary
      if (req.files) {
        if (req.files.resume) {
          const resumeResult = await uploadToCloudinary(req.files.resume[0].path, "recruitment");
          if (resumeResult) {
            resumeUrl = resumeResult.url;
            resumePublicId = resumeResult.public_id;
          }
        }
        if (req.files.photo) {
          const photoResult = await uploadToCloudinary(req.files.photo[0].path, "recruitment");
          if (photoResult) {
            photoUrl = photoResult.url;
            photoPublicId = photoResult.public_id;
          }
        }
      }

      const application = new RecruitmentApplication({
        applicationId,
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        position: req.body.position,
        experience: req.body.experience,
        resumeUrl,
        resumePublicId,
        photoUrl,
        photoPublicId
      });

      await application.save();

      // Send WebSocket notification
      if (global.sendNotificationWs) {
        global.sendNotificationWs({
          type: "application",
          targetRole: "admin",
          notification: {
            title: "New Recruitment Application",
            message: `New recruitment application from ${req.body.fullName || "Applicant"}`,
            data: {
              applicationId,
              applicationType: "recruitment",
              applicantName: req.body.fullName,
              position: req.body.position,
            },
          },
        });
      }

      res.status(201).json({
        message: "Recruitment application submitted successfully",
        applicationId,
      });
    });
  } catch (error) {
    console.error("Error submitting recruitment application:", error);
    res.status(500).json({ error: "Error submitting application" });
  }
};

// Submit Contact Query
exports.submitContactQuery = async (req, res) => {
  try {
    const applicationId = await generateApplicationId("CQ");
    const { name, email, message, subject = "General Inquiry" } = req.body;  // Added subject with default

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required" });
    }

    const contactQuery = new ContactQuery({
      applicationId,
      name,
      email,
      subject, // Added subject field
      message,
    });

    await contactQuery.save();

    // Send WebSocket notification
    global.sendNotificationWs({
      type: "application",
      targetRole: "admin",
      notification: {
        title: "New Contact Query",
        message: `New contact query from ${name || "Applicant"}`,
        data: {
          applicationId,
          applicationType: "contact-query",
          applicantName: name,
          subject, // Include subject in notification
        },
      },
    });

    res.status(201).json({
      message: "Contact query submitted successfully",
      applicationId,
    });
  } catch (error) {
    console.warn("Error submitting contact query:", error);
    res.status(500).json({ error: "Error submitting contact query" });
  }
};

// Submit Enquiry
exports.submitEnquiry = async (req, res) => {
  try {
    const applicationId = await generateApplicationId("EQ");
    const {
      name,
      email,
      phone,
      product,
      productCategory,
      powerOutput,
      ratedCurrent,
      productPrice,
      message,
    } = req.body;

    if (!name || !email || !phone || !product) {
      return res.status(400).json({ error: "Name, email, phone, and product are required" });
    }

    const enquiry = new Enquiry({
      applicationId,
      name,
      email,
      phone,
      product,
      productCategory,
      powerOutput,
      ratedCurrent,
      productPrice,
      message,
    });

    await enquiry.save();

    // Send WebSocket notification
    global.sendNotificationWs({
      type: "application",
      targetRole: "admin",
      notification: {
        title: "New Product Enquiry",
        message: `New enquiry from ${name || "Applicant"} about ${product || "a product"}`,
        data: {
          applicationId,
          applicationType: "enquiry",
          applicantName: name,
          product,
        },
      },
    });

    res.status(201).json({
      message: "Enquiry submitted successfully",
      applicationId,
    });
  } catch (error) {
    console.error("Error submitting enquiry:", error);
    res.status(500).json({ error: "Error submitting enquiry" });
  }
};

// Get all applications with filtering and pagination
exports.getAllApplications = async (req, res) => {
  try {
    const { type, status, page = 1, limit = 10, search } = req.query;
    const query = {};

    if (type) {
      let applicationType = type.toLowerCase().trim().replace(/\s+/g, "-");
      if (applicationType === "servicecenter") applicationType = "service-center";
      if (applicationType === "chargingstation") applicationType = "charging-station";
      if (applicationType === "contactquery") applicationType = "contact-query";
      query.applicationType = applicationType;
    }

    if (status) {
      let normalizedStatus = status.toLowerCase();
      if (normalizedStatus === "reviewing" || normalizedStatus === "in-review") {
        normalizedStatus = "In-review";
      } else {
        normalizedStatus =
          normalizedStatus.charAt(0).toUpperCase() + normalizedStatus.slice(1);
      }
      query.status = normalizedStatus;
    }

    if (search) {
      query.$or = [
        { applicationId: { $regex: search, $options: "i" } },
        { "personalInfo.fullName": { $regex: search, $options: "i" } },
        { fullName: { $regex: search, $options: "i" } },
        { name: { $regex: search, $options: "i" } },
        { product: { $regex: search, $options: "i" } },
      ];
    }

    const applications = await Application.find(query)
      .sort({ createdAt: -1 })
      .skip((parseInt(page) - 1) * parseInt(limit))
      .limit(parseInt(limit));

    const totalApplications = await Application.countDocuments(query);

    res.status(200).json({
      applications,
      totalPages: Math.ceil(totalApplications / parseInt(limit)) || 1,
      currentPage: parseInt(page),
      totalApplications,
    });
  } catch (error) {
    console.error("Error fetching applications:", error);
    res.status(500).json({
      error: "Error fetching applications",
      applications: [],
      totalPages: 0,
      currentPage: parseInt(req.query.page || 1),
      totalApplications: 0,
    });
  }
};

// Get application by ID
exports.getApplicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Application.findById(id);
    if (!application) {
      return res.status(404).json({ error: "Application not found" });
    }
    res.status(200).json(application);
  } catch (error) {
    console.error("Error fetching application:", error);
    res.status(500).json({ error: "Error fetching application" });
  }
};

// Update application status
exports.updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const application = await Application.findById(id);
    if (!application) {
      return res.status(404).json({ error: "Application not found" });
    }

    application.status = status;
    if (notes) application.notes = notes;
    application.updatedAt = Date.now();

    await application.save();

    res.status(200).json({
      message: "Application status updated successfully",
      application,
    });
  } catch (error) {
    console.error("Error updating application status:", error);
    res.status(500).json({ error: "Error updating application status" });
  }
};

// Get application statistics
exports.getApplicationStats = async (req, res) => {
  try {
    const getCountSafely = async (model, query = {}) => {
      try {
        return await model.countDocuments(query);
      } catch (err) {
        console.error(`Error counting ${model.modelName}:`, err);
        return 0;
      }
    };

    const totalApplications = await getCountSafely(Application);
    const serviceCenterApplications = await getCountSafely(Application, {
      applicationType: "service-center",
    });
    const chargingStationApplications = await getCountSafely(Application, {
      applicationType: "charging-station",
    });
    const recruitmentApplications = await getCountSafely(Application, {
      applicationType: "recruitment",
    });
    const contactQueries = await getCountSafely(Application, {
      applicationType: "contact-query",
    });
    const enquiries = await getCountSafely(Application, {
      applicationType: "enquiry",
    });

    const pending = await getCountSafely(Application, { status: "Pending" });
    const inReview = await getCountSafely(Application, { status: "In-review" });
    const approved = await getCountSafely(Application, { status: "Approved" });
    const rejected = await getCountSafely(Application, { status: "Rejected" });

    res.status(200).json({
      totalApplications,
      serviceCenterApplications,
      chargingStationApplications,
      recruitmentApplications,
      contactQueries,
      enquiries,
      pending,
      inReview,
      approved,
      rejected,
    });
  } catch (error) {
    console.error("Error fetching application statistics:", error);
    res.status(500).json({
      error: "Error fetching application statistics",
      totalApplications: 0,
      serviceCenterApplications: 0,
      chargingStationApplications: 0,
      recruitmentApplications: 0,
      contactQueries: 0,
      enquiries: 0,
      pending: 0,
      inReview: 0,
      approved: 0,
      rejected: 0,
    });
  }
};