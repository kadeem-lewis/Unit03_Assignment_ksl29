import { Search } from "./components/Search";
import { Card } from "./components/Card";
import { PokemonProvider } from "./components/PokemonProvider";

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
          <footer>&copy; Kadeem Lewis</footer>
        </div>
      </PokemonProvider>
    </>
  );
}

export default App;
