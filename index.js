const express = require("express");
const app = express();

// Funksiyalar
const welcome = (req, res) => {
  res.status(200).json({ message: "Welcome to the API!" });
};

const getUser = (req, res) => {
  const userId = req.query.id;
  res.status(200).json({ message: `User ID: ${userId}` });
};

const notFound = (req, res) => {
  res.status(404).json({ error: "Route not found" });
};

// Marshrutlar
app.get("/api/welcome", welcome);
app.get("/api/user", getUser);
app.use(notFound); // Boshqa barcha so‘rovlar uchun

module.exports = app;
