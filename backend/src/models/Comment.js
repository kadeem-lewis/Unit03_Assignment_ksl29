//Kadeem Lewis
//ksl29
//11-17-2023
//IT301 - 001
//Unit 09 Assignment

import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
  userId: { type: String, required: true },
  username: { type: String, required: true },
  comment: { type: String, required: true },
  pokemonId: { type: Schema.Types.ObjectId, required: true },
  lastModified: { type: Date, default: Date.now },
});

const Comment = model("comment_ksl29", CommentSchema);
export default Comment;
