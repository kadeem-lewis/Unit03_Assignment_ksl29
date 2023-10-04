import { createContext, useState } from "react";

const PokemonContext = createContext([]);

export const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
