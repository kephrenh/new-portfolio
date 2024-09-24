import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  createdAt: { type: Date, default: Date.now() },
});

const User = models.User ?? model("User", UserSchema);

export default User;

export type UserType = {
  fistName: string;
  lastName: string;
  email: string;
  password: string;
};
