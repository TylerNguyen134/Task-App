const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

// Import routers from route files
const taskRouter = require("./routes/taskRoutes");
const projectRouter = require("./routes/projectRoutes");

// CORS middleware to allow cross-domain requests
const cors = require("cors");
app.use(cors());

//************************************
// RUN npm run devstart to start the server
// devstart defined package.json, runs nodemon on server.js
//************************************


// MongoDB connection string
const uri = process.env.MONGODB_URI;

// Connect to MongoDB using Mongoose
mongoose.connect(uri)
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

// Middleware to parse JSON request bodies: req.body can be used to access data sent in the request body
app.use(express.json());

app.use("/task", taskRouter) // Connect to routers from route files: Tells Express to use routes defined in taskRouter for any URL starting with /task
app.use("/project", projectRouter) // Connect to routers from route files: Tells Express to use routes defined in projectRouter for any URL starting with /project

// Change listening port in production
// Listen for HTTP requests on local host
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});