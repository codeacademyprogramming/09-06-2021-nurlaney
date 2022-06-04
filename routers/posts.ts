import { Router } from "express";

export const PostRouter = Router();

PostRouter.get("/", (req, res) =>
  res.json({
    post: [],
  })
);
