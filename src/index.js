import React from "react";
import ReactDOM from "react-dom/client";
import { MenuProvider } from "./Context";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MenuProvider>
    <App />
  </MenuProvider>
);
