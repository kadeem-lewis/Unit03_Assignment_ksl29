//Kadeem Lewis
//ksl29
//10-06-2023
//IT301 - 001
//Unit 03 Assignment

import { createContext, useState, useEffect } from "react";
import { getPokedex } from "../api/GetPokemon";

export const PokemonContext = createContext(null);

export const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      const pokemon = await getPokedex();
      setPokemon(pokemon.results);
    })();
  }, []);
  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
        selectedPokemon,
        setSelectedPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
