import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl  text-gray-700  bg-green-600 rounded text-center">
        Tailwind CSS with Vite
      </h1>
      <Card />
      <Card />
      <Card />
      <Card />
    </>
  );
}

export default App;
