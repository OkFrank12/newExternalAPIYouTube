import mongoose from "mongoose";

interface iUser {
  userName: string;
  email: string;
  password: string;
  bio: string;
  avatar: string;
  avatarID: string;
}

interface iUserData extends iUser, mongoose.Document {}

const userModel = new mongoose.Schema<iUserData>(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "your email is required"],
    },
    password: {
      type: String,
    },
    bio: {
      type: String,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<iUserData>("users", userModel);
