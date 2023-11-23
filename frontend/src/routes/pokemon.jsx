//Kadeem Lewis
//ksl29
//12-01-2023
//IT301 - 001
//Unit 03 Assignment

import React from 'react'
import {Card} from '../components/Card.jsx'
import { getPokemon } from '../api/GetPokemon.js'
import { Outlet } from 'react-router-dom'

export async function loader({}){
  const pokemon = await getPokemon()
  return pokemon
}

export default function Pokemon() {
  return (
    <>
    <Card />
    <Outlet/>
    </>
  )
}
