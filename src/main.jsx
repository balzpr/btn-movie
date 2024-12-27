import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18+
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/btn-movie">
    <App />
  </BrowserRouter>
);