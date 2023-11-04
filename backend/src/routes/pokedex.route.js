import express from "express";
import { getPokedex } from "../controllers/pokedex.controller.js";

const router = express.Router();

router.get("/pokemon", getPokedex);

export { router as pokedexRouter };
