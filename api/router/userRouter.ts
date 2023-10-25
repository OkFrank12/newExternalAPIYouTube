import express from "express";
import {
  createUser,
  findOne,
  signInUser,
  updateUser,
} from "../controller/userController";
import multer from "multer";

const upload = multer().single("avatar");
const user = express.Router();

user.route("/register").post(upload, createUser);
user.route("/sign-in").post(signInUser);
user.route("/:_id").get(findOne);
user.route("/update/:_id").patch(upload, updateUser);

export default user;
