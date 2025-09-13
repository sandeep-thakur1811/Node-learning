require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./db");

const app = express();

// ✅ Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/", require("./routes/index"));   // Default routes
app.use("/api", require("./routes/api"));  // API routes

// ✅ Connect Database
connectDB();

// ✅ Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on http://0.0.0.0:${PORT}`);
});
app.set('view engine', 'ejs'); // Add this line

