import { Search } from "./components/Search";
import { Card } from "./components/Card";
import { PokemonProvider, PokemonContext } from "./components/PokemonProvider";

function App() {
  return (
    <>
      <PokemonProvider>
        <div className="container">
          <nav>Pokedex</nav>
          <main>
            <Search />
            <Card />
          </main>
          <footer></footer>
        </div>
      </PokemonProvider>
    </>
  );
}

export default App;
