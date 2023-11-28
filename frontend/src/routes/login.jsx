import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import styles from "./login.module.css";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useOutletContext();
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements["username"].value;
    const password = event.target.elements["password"].value;
    setUser({ username, password });
    sessionStorage.setItem("user", JSON.stringify({ username, password }));
    navigate("/");
  };
  return (
    <div className={styles.loginForm}>
      <h1>Login</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
