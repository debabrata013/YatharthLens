// models/Resume.ts
import mongoose, { Schema, Document } from "mongoose";

export interface Resume extends Document {
  userId: string;
  cloudinaryUrl: string;
  trustScore: number;
  label: string;
  uploadedAt: Date;
}

const ResumeSchema = new Schema<Resume>({
  userId: { type: String, required: true },
  cloudinaryUrl: { type: String, required: true },
  trustScore: { type: Number, required: true },
  label: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Resume || mongoose.model<Resume>("Resume", ResumeSchema);
