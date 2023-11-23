//Kadeem Lewis
//ksl29
//10-06-2023
//IT301 - 001
//Unit 03 Assignment

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
