//Kadeem Lewis
//ksl29
//12-01-2023
//IT301 - 001
//Unit 11 Assignment

import { useLoaderData, useSearchParams } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import styles from "./root.module.css";

export async function rootLoader({ request }) {
  const url = new URL(request.url);
  const searchParams = url.searchParams.toString();
  console.log("Search Params:", searchParams);
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/v1/ksl29/pokemon?${searchParams}`,
  );
  const pokedex = await response.json();
  return pokedex.results;
}

const pokemonTypes = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

export default function Root() {
  const pokedex = useLoaderData();
  let [searchParams, setSearchParams] = useSearchParams();
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements["pokemon-search"].value;
    setSearchParams({ name: name });
  };
  const handleSelectSubmit = (event) => {
    event.preventDefault();
    const type = event.target.elements["pokemon-type"].value;
    setSearchParams({ type: type });
  };
  return (
    <>
      <div className={styles.filters}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="pokemon-search" className="search">
            Search for a pokemon:
          </label>
          <input type="text" list="pokedex" id="pokemon-search" />
          <button type="submit">Submit</button>
        </form>
        <form onSubmit={(e) => handleSelectSubmit(e)}>
          <label htmlFor="pokemon-type" className="search">
            Filter by type:
          </label>
          <select id="pokemon-type">
            {pokemonTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="pokedex-grid">
        {pokedex?.map((pokemon) => (
          <PokemonCard key={pokemon._id} pokemon={pokemon} />
        ))}
      </div>
      <section className={styles.pagination}>
        {[...Array(Math.ceil(150 / 20))].map((value, index) => (
          <button key={index} onClick={() => setSearchParams({ page: index })}>
            {index}
          </button>
        ))}
      </section>
    </>
  );
}
