//Kadeem Lewis
//ksl29
//11-17-2023
//IT301 - 001
//Unit 09 Assignment

import express from "express";
import {
  addComment,
  updateComment,
  deleteComment,
} from "../controllers/comments.controller.js";

const router = express.Router();

router
  .route("/comments")
  .post(addComment)
  .put(updateComment)
  .delete(deleteComment);

export { router as commentRouter };
