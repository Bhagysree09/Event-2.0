const express = require("express");
const connectDB = require("./config/dbconection");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const UserRoutes = require("./routes/userRoutes");
const EventRoutes = require("./routes/eventRoutes");
const cors = require("cors");

// Connect to database
connectDB();

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

// Middleware
app.use(bodyParser.json());

app.use(
  cors()
  // origin: process.env.CROS_ORIGIN,
  // Credentials: true,
);

// Routes
app.use("/api/user", UserRoutes);
app.use("/api/events", EventRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
