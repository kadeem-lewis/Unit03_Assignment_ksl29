//Kadeem Lewis
//ksl29
//12-01-2023
//IT301 - 001
//Unit 11 Assignment

import { Icons } from "./Icons";
import styles from "./Card.module.css";

const pokemonTrivia = [
  "Rhydon was the first Pokémon ever created.",
  "The Swords of Justice are based on The Three Musketeers",
  "Koffing & Weezing Used To Be Named After American Cities",
  "Ash Ketchum's name in Japan is Satoshi",
  "Caterpie is the first pokemon ash caught himself",
];

export const Card = ({ pokemon }) => {
  return pokemon ? (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.cardHeading}>
          <Icons.caretDown />
          Info
        </div>
        <div className={styles.cardImg}>
          <img src={pokemon.sprite} alt={`${pokemon.name} sprite`} />
        </div>
        <div className={styles.cardData}>
          <div className={styles.cardName}>
            <Icons.pokeball className={styles.pokeball} />
            {pokemon.id.toString().padStart(3, "0")} {pokemon.name}
          </div>
          <div className={styles.typeBox}>
            {pokemon.types.map((type, index) => (
              <div key={index} className={`type ${type.name}`}>
                {type.name}
              </div>
            ))}
          </div>
          <div className={styles.stats}>
            <div className={styles.physicalStats}>
              <span>HT</span>
              <span className={styles.uom}>{pokemon.height / 10}m</span>
            </div>
            <div className={styles.physicalStats}>
              <span>WT</span>
              <span className={styles.uom}>
                {(pokemon.weight / 10).toFixed(1)} lbs.
              </span>
            </div>
          </div>
        </div>
        <p className={styles.cardDescription}>
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
