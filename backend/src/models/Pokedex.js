//Kadeem Lewis
//ksl29
//11-03-2023
//IT301 - 001
//Unit 07 Assignment

import { Schema, model } from "mongoose";

const PokedexSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  generation: { type: Number, required: true },
  types: { type: Array, required: true },
  sprite: { type: String, required: true },
  flavorText: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
});

const Pokedex = model("pokedex_ksl29", PokedexSchema, "pokedex_ksl29");
export default Pokedex;
