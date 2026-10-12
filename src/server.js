require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5001;

if (!process.env.JWT_SECRET) {
  console.error("Missing JWT_SECRET in .env");
  process.exit(1);
}

app.use(cors({
  origin: process.env.FRONTEND_URL || "*"
}));

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.json({
    name: "PrimeTask Academy V2 API",
    status: "running",
    version: "2.0.0"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "PrimeTask Academy V2 API is running.",
    database: mongoose.connection.readyState === 1
      ? "connected"
      : "disconnected"
  });
});
app.use("/api/progress", require("./routes/progress"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/courses", require("./routes/courses"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/resources", require("./routes/resources"));
app.use("/api/quizzes", require("./routes/quizzes"));
app.use("/api/certificates", require("./routes/certificates"));
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found."
  });
});

async function startServer() {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB connected.");
    } else {
      console.warn("MONGODB_URI is missing. Database features will not work.");
    }

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`PrimeTask Academy V2 running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Startup failed:", error.message);
    process.exit(1);
  }
}

startServer();
