//Kadeem Lewis
//ksl29
//10-06-2023
//IT301 - 001
//Unit 03 Assignment

import React from "react";
import ReactDOM from "react-dom/client";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import Pokemon from "./routes/pokemon.jsx";
import "./index.css";
import RootLayout from "./layouts/RootLayout.jsx";

const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<RootLayout/>}>
  <Route index element={<Root/>} />
  <Route path=":id" element={<Pokemon/>} />
</Route>
))

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
