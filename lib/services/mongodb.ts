import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export default async function connect() {
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

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

function reportError({ message }: { message: string }) {
  console.error(`Error: ${message}`);
  throw new Error(message);
}
