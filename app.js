require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./db");

const app = express();

// ✅ Set EJS as view engine
app.set("view engine", "ejs");

// ✅ Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/", require("./routes/index"));   // Main routes
app.use("/api", require("./routes/api"));  // (Optional) API routes

// ✅ Connect to MongoDB
connectDB();

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});

