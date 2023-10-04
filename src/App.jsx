import { useState } from "react";
import { Search } from "./components/Search";
import { Card } from "./components/Card";
import { PokemonProvider } from "./components/PokemonProvider";

function App() {
  return (
    <>
      <PokemonProvider>
        <nav>Hello World</nav>
        <main>
          <Search />
        </main>
      </PokemonProvider>
    </>
  );
}

export default App;
