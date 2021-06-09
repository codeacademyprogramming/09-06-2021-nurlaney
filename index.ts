import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const cors = require("cors");
const port = 8000;

const app = express();

app.use(cors());
app.use(express.json());

const router = express.Router();

app.use("/", router);

const url = process.env.MONGO_KEY || "";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (err: any) => console.log(err));
db.once("open", () => console.log("connected"));

mongoose.set("useFindAndModify", false);
dotenv.config();
