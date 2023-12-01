//Kadeem Lewis
//ksl29
//12-01-2023
//IT301 - 001
//Unit 11 Assignment

import React from "react";
import { Card } from "../components/Card.jsx";
import { getPokemon } from "../service/PokemonDataService.js";
import { Outlet, useLoaderData, useOutletContext } from "react-router-dom";

export async function pokemonLoader({ params }) {
  const pokemon = await getPokemon(params.id);
  return pokemon;
}

export default function Pokemon() {
  const pokemon = useLoaderData();
  const { user } = useOutletContext();

  return (
    <>
      <Card pokemon={pokemon} />
      <Outlet context={{ user }} />
    </>
  );
}
