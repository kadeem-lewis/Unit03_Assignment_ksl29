import React from "react";
import styles from "./PokemonCard.module.css";
import { Link } from "react-router-dom";

export default function PokemonCard({ pokemon }) {
  return (
    <Link className={styles.card} to={`/${pokemon._id}`}>
      <img
        src={pokemon.sprite}
        alt={`${pokemon.name} sprite`}
        className={styles.image}
      />
      <p>{pokemon.name}</p>
    </Link>
  );
}
