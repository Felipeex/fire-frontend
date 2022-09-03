import React from "react";
import ReactDOM from "react-dom/client";

import { Home } from "./page/Home";

import "./styles/global.css";
import "aos/dist/aos.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
