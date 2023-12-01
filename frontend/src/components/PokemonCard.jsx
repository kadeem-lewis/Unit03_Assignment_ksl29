//Kadeem Lewis
//ksl29
//12-01-2023
//IT301 - 001
//Unit 11 Assignment

import React from "react";
import styles from "./PokemonCard.module.css";
import { Link } from "react-router-dom";

export default function PokemonCard({ pokemon }) {
  return (
    <Link className={styles.card} to={`/ksl29_pokemon/${pokemon._id}`}>
      <img
        src={pokemon.sprite}
        alt={`${pokemon.name} sprite`}
        className={styles.image}
      />

      <p className={styles.pokeId}>#{String(pokemon.id).padStart(3, "0")}</p>
      <div>{pokemon.name}</div>
      <span>
        {pokemon.types
          .filter((type) => type !== "none")
          .map((type) => (
            <span key={type} className={`type ${type}`}>
              {type}
            </span>
          ))}
      </span>
    </Link>
  );
}
