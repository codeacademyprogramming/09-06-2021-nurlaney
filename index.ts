import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ROUTES from "./routes";

const app = express();
const cors = require("cors");
const port = 6666;

dotenv.config();

app.use(cors());
app.use(express.json());

const router = express.Router();

app.use("/", router);

const url = process.env.MONGO_KEY || "";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", (err: any) => console.log(err));
db.once("open", () => console.log("connected to server"));

mongoose.set("useFindAndModify", false);

app.get("/", (req, res) => res.send("....."));

ROUTES.forEach((route) => {
  app.use(route.path, route.router);
});

app.listen(port, () => console.log("server started"));
