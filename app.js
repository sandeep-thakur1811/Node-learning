require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/", require("./routes/index"));   // Default routes
app.use("/api", require("./routes/api"));  // API routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

