const express = require("express");
const applicationController = require("../controllers/applicationController");

const router = express.Router();

// Submit applications
router.post("/service-center", applicationController.submitServiceCenterApplication);
router.post("/charging-station", applicationController.submitChargingStationApplication);
router.post("/recruitment", applicationController.submitRecruitmentApplication);
router.post("/contact-query", applicationController.submitContactQuery);
router.post("/enquiry", applicationController.submitEnquiry);

// Fetch applications (for admin panel)
router.get("/", applicationController.getAllApplications);
router.get("/stats", applicationController.getApplicationStats);
router.get("/:id", applicationController.getApplicationById);
router.patch("/:id/status", applicationController.updateApplicationStatus);

module.exports = router;