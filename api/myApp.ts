import cors from "cors";
import express, { Application, Request, Response } from "express";
import user from "./router/userRouter";
import fs from "fs";
import path from "path";
import lodash from "lodash";

export const mainApp = (app: Application) => {
  app.use(express.json());
  app.use(cors());

  app.use("/api", user);

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "Api is ready to be consumed",
      });
    } catch (error: any) {
      return res.status(404).json({
        message: "error on Default GET",
        data: error.message,
      });
    }
  });

  app.get("/read", (req: Request, res: Response) => {
    try {
      const myPath = path.join(__dirname, "data", "./database.json");
      fs.readFile(myPath, (err, resp) => {
        if (err) {
          return err;
        } else {
          const file = JSON.parse(Buffer.from(resp).toString());

          return res.status(200).json({
            message: "API readings success",
            data: file,
          });
        }
      });
    } catch (error: any) {
      return res.status(404).json({
        message: "error while reading",
        data: error.message,
      });
    }
  });

  app.post("/data", (req: Request, res: Response) => {
    try {
      const { data } = req.body;
      const myPath = path.join(__dirname, "data", "./database.json");

      fs.readFile(myPath, (err, resp) => {
        if (err) {
          return err;
        } else {
          const file = JSON.parse(Buffer.from(resp).toString());
          if (lodash.some(file, data)) {
            return res.status(200).json({
              message: "Re-rendering unacceptable",
              data: file,
            });
          } else {
            file.push(data);
            fs.writeFile(myPath, JSON.stringify(file), () => {
              console.log("Completed");
            });

            return res.status(201).json({
              message: "Generated New",
              data: file,
            });
          }
        }
      });
    } catch (error: any) {
      return res.status(404).json({
        message: "error generating data",
        data: error.message,
      });
    }
  });
};
