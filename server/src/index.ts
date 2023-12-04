import express, { Request, Response, Application } from "express";
require("dotenv").config();
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/posts";

const app: Application = express();
const MONGO_URL:string = process.env.MONGO_URL ;
const PORT = process.env.PORT || 8000;
app.use(express.json());

app.use(express.urlencoded({ limit: "30mb", extended: true }));



mongoose
  .connect(MONGO_URL,{})
  .then(() => console.log("connected to mongo db"))
  .catch((err) => console.log(err));

app.use('/api/posts', router)
app.use(cors());
app.listen(PORT, (): void => {
  console.log(`server is listening to port ${PORT}`);
});
