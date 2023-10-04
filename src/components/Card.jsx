import { useContext } from "react";
import { PokemonContext } from "./PokemonProvider";

export const Card = () => {
  const { selectedPokemon } = useContext(PokemonContext);
  return selectedPokemon ? (
    <div className="card">
      <div className="card-heading">Info</div>
      <div className="card-img">
        <img
          src={selectedPokemon.sprites.front_default}
          alt={`${selectedPokemon.name} sprite`}
        />
      </div>
      <div className="card-data">
        <div className="card-name">
          {selectedPokemon.id.toString().padStart(3, "0")}{" "}
          {selectedPokemon.name}
        </div>
        <div className="type-box">
          {selectedPokemon.types.map((type, index) => (
            <div key={index} className={`type ${type.type.name}`}>
              {type.type.name}
            </div>
          ))}
        </div>
        <div className="physical-stats">
          <span>HT</span>
          <span>{selectedPokemon.height / 10}"</span>
        </div>
        <div className="physical-stats">
          <span>WT</span>
          <span>{(selectedPokemon.weight / 10).toFixed(1)} lbs.</span>
        </div>
      </div>
      <p className="card-description">
        {selectedPokemon.flavorText.flavor_text}
      </p>
    </div>
  ) : (
    <p>Search for a pokemon</p>
  );
};
