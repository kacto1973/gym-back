import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import clientRoutes from "./routes/clientRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/clients", clientRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/gym-manager";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
    console.log("Connected to MongoDB 😊");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB ☹️:", error);
  });
