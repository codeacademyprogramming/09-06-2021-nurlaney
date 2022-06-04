import { Router } from "express";
import { IRegisterPayload } from "../interfaces/auth";
import * as yup from "yup";
import UserModel from "../models/user";

export const AuthRouter = Router();

let registerPayloadSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().required(),
});

AuthRouter.post("/register", async (req, res) => {
  const registerPayload: IRegisterPayload = req.body;
  try {
    const isPayloadValid = await registerPayloadSchema.isValid(registerPayload);
    let newUser = new UserModel(isPayloadValid);
    newUser = await newUser.save();
    res.json({ isPayloadValid });
  } catch (err) {
    res.status(422).json({ errors: err.errors });
  }
});

AuthRouter.post("/login", (req, res) =>
  res.json({
    token: "token",
  })
);
