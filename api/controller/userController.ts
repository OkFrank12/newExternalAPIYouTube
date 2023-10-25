import { Request, Response } from "express";
import userModel from "../model/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { streamUpload } from "../utils/streamUpload";

export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userName, email, password, bio } = req.body;
    const salted = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salted);
    const { secure_url, public_id }: any = await streamUpload(req);
    const user = await userModel.create({
      userName,
      email,
      password: hashed,
      bio,
      avatar: secure_url,
      avatarID: public_id,
    });

    return res.status(201).json({
      message: "User is created",
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error creating user",
      data: error.message,
    });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { secure_url, public_id }: any = await streamUpload(req);
    const { _id } = req.params;
    const user = await userModel.findByIdAndUpdate(
      _id,
      {
        avatar: secure_url,
        avatarID: public_id,
      },
      { new: true }
    );

    return res.status(201).json({
      message: "Updated User",
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error updating user",
      data: error.message,
    });
  }
};

export const findOne = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { _id } = req.params;

    const user = await userModel.findById(_id);

    return res.status(200).json({
      message: "find one user",
      data: user,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "error finding one user",
      data: error.message,
    });
  }
};

export const signInUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        const token = jwt.sign({ id: user.id }, "token");
        return res.status(201).json({
          message: `Welcome back ${user.userName}`,
          data: token,
        });
      } else {
        return res.status(404).json({
          message: "Invalid password",
        });
      }
    } else {
      return res.status(404).json({
        message: "User can't be found",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "error signing in user",
      data: error.message,
    });
  }
};
