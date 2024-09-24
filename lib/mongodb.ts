import mongoose from "mongoose";
import { getErrorMessage, reportError } from "./utils";

const MONGODB_URI = process.env.MONGODB_URI;

export default async function dbConnect() {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already connected");
    return;
  }

  if (connectionState === 2) {
    console.log("Connecting...");
    return;
  }

  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "portfolioDB",
      bufferCommands: true,
    });
    console.log("Connected");
  } catch (error) {
    reportError({ message: getErrorMessage(error) });
  }
}
