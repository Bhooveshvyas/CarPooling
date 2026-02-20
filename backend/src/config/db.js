import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();   // ← YOU MISSED THIS

const connectDB = async () => {
  try {

    console.log("URI:", process.env.MONGO_URI); // temporary debug

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      family: 4, // Force IPv4
      serverSelectionTimeoutMS: 5000
    });

    console.log(`Mongo Connected: ${conn.connection.host}`);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
