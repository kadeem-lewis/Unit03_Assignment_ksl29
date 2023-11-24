//Kadeem Lewis
//ksl29
//12-01-2023
//IT301 - 001
//Unit 11 Assignment

import { Icons } from "./Icons";

const pokemonTrivia = [
  "Rhydon was the first Pokémon ever created.",
  "The Swords of Justice are based on The Three Musketeers",
  "Koffing & Weezing Used To Be Named After American Cities",
  "Ash Ketchum's name in Japan is Satoshi",
  "Caterpie is the first pokemon ash caught himself",
];

export const Card = ({pokemon}) => {
  
  return pokemon ? (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-heading">
          <Icons.caretDown />
          Info
        </div>
        <div className="card-img">
          <img
            src={pokemon.sprite}
            alt={`${pokemon.name} sprite`}
          />
        </div>
        <div className="card-data">
          <div className="card-name">
            <Icons.pokeball className="pokeball" />
            {pokemon.id.toString().padStart(3, "0")}{" "}
            {pokemon.name}
          </div>
          <div className="type-box">
            {pokemon.types.map((type, index) => (
              <div key={index} className={`type ${type.name}`}>
                {type.name}
              </div>
            ))}
          </div>
          <div className="stats">
            <div className="physical-stats">
              <span>HT</span>
              <span className="uom">{pokemon.height / 10}m</span>
            </div>
            <div className="physical-stats">
              <span>WT</span>
              <span className="uom">
                {(pokemon.weight / 10).toFixed(1)} lbs.
              </span>
            </div>
          </div>
        </div>
        <p className="card-description">
          {pokemon.flavorText.replace("/n", " ")}
        </p>
      </div>
    </div>
  ) : (
    <div>
      <p className="did-you-know">Did you know?</p>
      <p className="trivia">
        {pokemonTrivia[Math.floor(Math.random() * pokemonTrivia.length)]}
      </p>
    </div>
  );
};
