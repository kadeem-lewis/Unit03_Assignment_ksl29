//Kadeem Lewis
//ksl29
//12-01-2023
//IT301 - 001
//Unit 11 Assignment

import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styles from "./login.module.css";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useOutletContext();
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements["username"].value;
    const userId = event.target.elements["userId"].value;
    setUser({ username, userId });
    sessionStorage.setItem("user", JSON.stringify({ username, userId }));
    navigate("/");
  };
  return (
    <div className={styles.loginForm}>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="userId">User ID:</label>
        <input type="text" name="userId" id="userId" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
