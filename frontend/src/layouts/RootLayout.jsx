//Kadeem Lewis
//ksl29
//12-01-2023
//IT301 - 001
//Unit 11 Assignment

import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import styles from "./RootLayout.module.css";

export default function RootLayout() {
  const [user, setUser] = useState(
    () => JSON.parse(sessionStorage.getItem("user")) || null,
  );

  async function logout() {
    setUser(null);
    sessionStorage.removeItem("user");
  }

  console.log(user);
  return (
    <div className="container">
      <header>
        <nav className={styles.navbar}>
          <Link to="/" className={styles.brand}>
            National Pokedex
          </Link>
          <menu className={styles.menu}>
            <li>
              <Link to="/ksl29_pokemon">Pokemon</Link>
            </li>
            <li>
              {user ? (
                <button onClick={logout}>Logout</button>
              ) : (
                <Link to="/ksl29_login">Login</Link>
              )}
            </li>
          </menu>
        </nav>
      </header>
      <main>
        <Outlet context={{ user, setUser }} />
      </main>
      <footer>&copy; Kadeem Lewis 2023</footer>
    </div>
  );
}
