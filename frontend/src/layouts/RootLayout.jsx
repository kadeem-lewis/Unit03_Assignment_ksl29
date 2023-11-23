//Kadeem Lewis
//ksl29
//12-01-2023
//IT301 - 001
//Unit 11 Assignment

import React from 'react'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="container">
        <header>National Pokedex</header>
        <main>
            <Outlet/>
        </main>
        <footer>&copy; Kadeem Lewis 2023</footer>
    </div>
  )
}
