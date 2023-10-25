import express, { Application } from "express";
import { db } from "./config/dbConfig";
import { mainApp } from "./myApp";

const port: number = 1000;
const app: Application = express();
mainApp(app);

const server = app.listen(process.env.PORT || port, () => {
  db();
});

process.on("uncaughtException", (error: Error | any) => {
  console.log("uncaughtException: ", error);
  process.exit(1);
});

process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection: ", reason);
  server.close(() => {
    process.exit(1);
  });
});
