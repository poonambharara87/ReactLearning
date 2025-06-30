import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Chai from "./Chai.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Chai />
  </StrictMode>
);
