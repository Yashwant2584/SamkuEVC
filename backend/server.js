const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const http = require("http");
const WebSocket = require("ws");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["https://www.samkuev.com", "http://localhost:5173"], // Update with your frontend URL
    methods: ["GET", "POST", "PATCH"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

// Serve static files from uploads directory
app.use("/uploads", express.static(path.join(__dirname, "Uploads")));

// Routes
const applicationRoutes = require("./routes/applications");
app.use("/api/applications", applicationRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Application API is running");
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "API Server is running",
    time: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    message: process.env.NODE_ENV === "development" ? err.message : "Something went wrong",
  });
});

// Create HTTP server
const server = http.createServer(app);

// WebSocket server for notifications
const wss = new WebSocket.Server({ server });

// Store admin WebSocket clients
const adminClients = new Set();

// WebSocket connection handler
wss.on("connection", (ws) => {
  console.log("WebSocket connection established");

  // Mark as admin client (no auth required for simplicity)
  adminClients.add(ws);

  ws.on("message", (message) => {
    try {
      const data = JSON.parse(message);
      if (data.type === "ping") {
        ws.send(JSON.stringify({ type: "pong" }));
      }
    } catch (err) {
      console.error("Error processing WebSocket message:", err);
    }
  });

  ws.on("close", () => {
    console.log("WebSocket connection closed");
    adminClients.delete(ws);
  });
});

// Broadcast notifications via WebSocket
global.sendNotificationWs = (notification) => {
  const { type, notification: notificationData } = notification;
  console.log(`Sending WebSocket notification: ${type}`);

  adminClients.forEach((ws) => {
    if (ws.readyState === WebSocket.OPEN) {
      try {
        ws.send(JSON.stringify({ type: "notification", notification: notificationData }));
      } catch (err) {
        console.error("Error sending WebSocket notification:", err);
      }
    }
  });
};

// Connect to MongoDB and start server
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb+srv://biradaromkar4176:omkar2003@cluster1.dso0r.mongodb.net/SamkuEvc_db";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    server.listen(PORT, () => {
      console.log(`HTTP Server running on port ${PORT}`);
      console.log(`WebSocket Server running on ws://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

module.exports = app;
