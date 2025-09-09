import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`,   
      {
        useNewUrlParser: true, //Use the new, stable connection string parser instead of the old one.”
        useUnifiedTopology: true, //ensures Mongoose uses the new engine for managing connections.
      }
    );

    console.log(
      `\n✅ MongoDB connected successfully! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("❌ MongoDB connection failed", error);
    process.exit(1); //exit the app because connection failed.
  }
};

export default connectDB;
