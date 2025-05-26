// lib/db.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed", err);
  }
};
export const disconnectDB = async () => {
  if (mongoose.connections[0].readyState) {
    await mongoose.disconnect();
    console.log("✅ MongoDB disconnected");
  }
};