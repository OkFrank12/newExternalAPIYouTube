import mongoose from "mongoose";

const dbUrl: string = `mongodb://127.0.0.1/youTubedb`;

export const db = () => {
  mongoose.connect(dbUrl).then(() => {
    console.log(`Database is connected ${mongoose.connection.host}`);
  });
};
