//Kadeem Lewis
//ksl29
//12-01-2023
//IT301 - 001
//Unit 11 Assignment

import { getPokedex } from "../api/GetPokemon";
import { useLoaderData, useSearchParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

export async function rootLoader({ request }) {
  const url = new URL(request.url);
  const searchParams = url.searchParams.toString();
  console.log(searchParams);
  const response = await fetch(
    `http://localhost:5000/api/v1/ksl29/pokemon?${searchParams}`,
  );
  const pokedex = await response.json();
  return pokedex.results;
}

export default function Root() {
  const pokedex = useLoaderData();
  let [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements["pokemon-search"].value;
    setSearchParams({ name: name });
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="pokemon-search" className="search">
          Search for a pokemon:
        </label>
        <input type="text" list="pokedex" id="pokemon-search" />
        <button type="submit">Submit</button>
      </form>
      <div className="pokedex-grid">
        {pokedex?.map((pokemon) => (
          <PokemonCard key={pokemon._id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
