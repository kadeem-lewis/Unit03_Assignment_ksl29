//Kadeem Lewis
//ksl29
//11-03-2023
//IT301 - 001
//Unit 07 Assignment

import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { pokedexRouter } from "./routes/pokedex.route.js";
import { commentRouter } from "./routes/comments.route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/v1/ksl29", pokedexRouter);
app.use("/api/v1/ksl29", commentRouter);
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

const PORT = process.env.PORT || 5000;

try {
  await mongoose.connect(process.env.DB_URI);
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
} catch (error) {
  console.error(error);
}
mongoose.connection.on("error", (error) => console.log(error));
