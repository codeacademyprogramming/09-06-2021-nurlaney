import { Router } from "express";
import { IRegisterPayload } from "../interfaces/auth";
import * as yup from "yup";

export const AuthRouter = Router();

let registerPayloadSchema = yup.object().shape({
  email: yup.string().email(),
  password: yup.string().required(),
});

AuthRouter.post("/register", async (req, res) => {
  const registerPayload: IRegisterPayload = req.body;
  const isPayloadValid = await registerPayloadSchema.isValid(registerPayload);
  res.json(registerPayload);
});

AuthRouter.post("/login", (req, res) =>
  res.json({
    token: "token",
  })
);
