import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
const app = express();
import cors from 'cors';

app.use(express.json());
app.use(cors());

//routers
import scienceRouter from "./routes/scienceRouter.js";

app.use("/api/scientists/",scienceRouter);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
