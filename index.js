const express = require("express");
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// GET routes
app.get("/api/welcome", (req, res) => {
  res.status(200).json({ message: "Welcome to the API!" });
});

app.get("/api/user", (req, res) => {
  const userId = req.query.id;
  res.status(200).json({ message: `User ID: ${userId}` });
});

// POST route to create a new user
app.post("/api/user", (req, res) => {
  const { name, email } = req.body; // Extracting data from the request body
  
  // Example logic for creating a user (In a real app, you'd store this in a database)
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  // Respond with a success message
  res.status(201).json({
    message: "User created successfully",
    user: { name, email },
  });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

module.exports = app;
