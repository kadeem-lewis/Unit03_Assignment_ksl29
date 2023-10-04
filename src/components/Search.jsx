import { useContext } from "react";
import { PokemonContext } from "./PokemonProvider";
import { getPokemon } from "../api/GetPokemon";

export const Search = () => {
  const { pokemon, setSelectedPokemon } = useContext(PokemonContext);

  const handleChange = async (event) => {
    if (event.target) {
      const isValid = pokemon.map((p) => p.name).includes(event.target.value);
      if (isValid) {
        const selected = await getPokemon(event.target.value);
        setSelectedPokemon(selected);
      }
    }
  };
  return (
    <>
      <label htmlFor="pokemon-search">Search for a pokemon:</label>
      <input
        type="text"
        list="pokedex"
        id="pokemon-search"
        onChange={handleChange}
      />
      <datalist id="pokedex">
        {pokemon.map((p) => (
          <option key={p.name} value={p.name}>
            {p.name}
          </option>
        ))}
      </datalist>
    </>
  );
};
