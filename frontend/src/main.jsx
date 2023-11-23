//Kadeem Lewis
//ksl29
//12-01-2023
//IT301 - 001
//Unit 11 Assignment

import React from "react";
import ReactDOM from "react-dom/client";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import Pokemon from "./routes/pokemon.jsx";
import "./index.css";
import RootLayout from "./layouts/RootLayout.jsx";
import Comment from "./routes/comment.jsx";
import AddComment from "./routes/addComment.jsx";
import Login from "./routes/login.jsx";

const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<RootLayout/>}>
  <Route index element={<Root/>} />
  <Route path="ksl29_login" element={<Login/>} />
  <Route path=":id" element={<Pokemon/>}>
    <Route index element={<Comment/>} />
    <Route path="add-comment" element={<AddComment/>} />
  </Route>

</Route>
))

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
