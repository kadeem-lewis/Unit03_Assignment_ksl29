//Kadeem Lewis
//ksl29
//12-01-2023
//IT301 - 001
//Unit 11 Assignment

import React from 'react'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from "react";
import { getPokedex } from '../api/GetPokemon';

export default function RootLayout() {

    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        (async () => {
          const pokemon = await getPokedex();
          setPokemon(pokemon.results);
        })();
      }, []);
    
  return (
    <div className="container">
        <header>National Pokedex</header>
        <main>
            <Outlet context={{pokemon,setPokemon,selectedPokemon,setSelectedPokemon}}/>
        </main>
        <footer>&copy; Kadeem Lewis 2023</footer>
    </div>
  )
}
