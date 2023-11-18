//Kadeem Lewis
//ksl29
//11-17-2023
//IT301 - 001
//Unit 09 Assignment

import Comment from "../models/Comment.js";

export const addComment = async (req, res) => {
  const { username, comment, userId, pokemonId } = req.body;
  const newComment = new Comment({ username, comment, userId, pokemonId });
  try {
    const response = await newComment.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateComment = async (req, res) => {
  const { userId, comment, commentId } = req.body;

  try {
    const updateResponse = await Comment.updateOne(
      { _id: commentId, userId: userId },
      { $set: { comment: comment, date: Date.now() } }
    );

    if (updateResponse.modifiedCount === 0) {
      return res.status(404).json({
        error: `${commentId} not updated.`,
      });
    }

    res
      .status(200)
      .json({ message: "Comment updated successfully", ...updateResponse });
  } catch (e) {
    console.error(`Unable to update comment: ${e}`);
    res.status(500).json({ error: e });
  }
};

export const deleteComment = async (req, res) => {
  const { userId, commentId } = req.body;
  try {
    const deleteResponse = await Comment.deleteOne({
      _id: commentId,
      userId: userId,
    });
    if (deleteResponse.deletedCount === 0) {
      return res.status(404).json({
        error: `${commentId} not deleted.`,
      });
    }
    res
      .status(200)
      .json({ message: "Comment deleted successfully", ...deleteResponse });
  } catch (error) {
    console.error(`Unable to delete comment: ${e}`);
    res.status(500).json({ error: e });
  }
};
