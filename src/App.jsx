import { Search } from "./components/Search";
import { Card } from "./components/Card";
import { PokemonProvider } from "./components/PokemonProvider";

function App() {
  return (
    <>
      <PokemonProvider>
        <div className="container">
          <header>National Pokedex</header>
          <main>
            <Search />
            <Card />
          </main>
          <footer>&copy; Kadeem Lewis 2023</footer>
        </div>
      </PokemonProvider>
    </>
  );
}

export default App;
