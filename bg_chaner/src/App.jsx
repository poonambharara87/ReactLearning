import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <>
      <div
        className="bottom-12 inset-X-0 px-2 h-screen
         items-center z-50 w-full"
        style={{ backgroundColor: color, minHeight: "100vh" }}
      >
        <div
          className="flex flex-wrap justify-center gap-6
         shadow-lg bg-white px-3 py-2 rounded-3xl"
        >
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold color-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold color-white"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold color-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold color-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold color-white"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold color-white"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-2 rounded-full text-white font-semibold color-white"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "2rem",
          marginTop: "20px",
        }}
      ></h1>
    </>
  );
}

export default App;
