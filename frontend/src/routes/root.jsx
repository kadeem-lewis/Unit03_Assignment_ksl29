//Kadeem Lewis
//ksl29
//12-01-2023
//IT301 - 001
//Unit 11 Assignment

import { Search } from "../components/Search";
import { PokemonProvider } from "../components/PokemonProvider";

export default function Root() {
  return (
    <>
      <PokemonProvider>
            <Search />
      </PokemonProvider>
    </>
  );
}
