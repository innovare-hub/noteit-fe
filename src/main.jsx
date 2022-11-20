import { AuthProvider } from "@contexts/AuthProvider";
import Root from "@screens/Root";
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "extended-normalize.css";
import "./assets/sass/style.scss";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    {/* <AuthProvider> */}
    <Root />
    {/* </AuthProvider> */}
  </React.StrictMode>
);
