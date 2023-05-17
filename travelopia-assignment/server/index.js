const express = require("express");
const env = require("dotenv");
const path = require("path");
const errorHandler = require("./middleware/error");
const connect = require("./config/db");
const cors = require("cors");

// Load environment variables
env.config({ path: path.join(__dirname, "config/config.env") });

// Connect to database
connect();

// Route files
const users = require("./routes/user");

const app = express();

app.use(express.json());

app.use(cors());

//Mount routers
app.use("/api/v1", users);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle Unhandled Rejection
process.on("unhandledRejection", (err, promise) => {
  console.log(`Unhandled Rejection : ${err.message}`);
  // Close Server
  server.close(() => process.exit(1));
});
