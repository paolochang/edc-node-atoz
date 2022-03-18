import express from "express";

const route = express.Router();

// GET
route.get("/", (req, res) => {
  res.status(200).json({ message: "message" });
});

// POST
route.post("/", (req, res) => {
  const body = req.body;
  // save to memory or database
  res.status(201).json(body);
});

export default route;
