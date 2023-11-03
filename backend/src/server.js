import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());

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
