//Kadeem Lewis
//ksl29
//11-17-2023
//IT301 - 001
//Unit 09 Assignment

import Pokedex from "../models/Pokedex.js";

export async function getPokedex(req, res, next) {
  const pokemonPerPage = parseInt(req.query.pokemonPerPage) || 20;
  const page = parseInt(req.query.page) || 0;
  const filters = {};
  if (req.query.id) {
    filters.id = req.query.id;
  } else if (req.query.name) {
    filters.name = req.query.name;
  }
  const results = await Pokedex.find(filters)
    .setOptions({ sanitizeFilter: true })
    .limit(pokemonPerPage)
    .skip(pokemonPerPage * page);

  res.json({
    results,
    page,
    pokemonPerPage,
    filters,
    totalResults: results.length,
  });
}
