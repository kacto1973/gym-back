const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Gym server backend running!");
});

const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/gym-manager";

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

/* 
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB 😊");
   
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB ☹️:", error);
  });
*/
