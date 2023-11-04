//Kadeem Lewis
//ksl29
//11-03-2023
//IT301 - 001
//Unit 07 Assignment

import express from "express";
import { getPokedex } from "../controllers/pokedex.controller.js";

const router = express.Router();

router.get("/pokemon", getPokedex);

export { router as pokedexRouter };
