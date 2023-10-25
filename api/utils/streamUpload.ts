import streamifier from "streamifier";
import cloudinary from "../config/cloudinary";

export const streamUpload = async (req: any) => {
  return new Promise(async (resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream((err, result) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(result);
      }
    });

    streamifier.createReadStream(req.file.buffer).pipe(stream);
  });
};
