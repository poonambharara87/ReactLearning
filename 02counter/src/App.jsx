import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log("clicked:", counter);
    if (counter >= 20) {
      alert("Counter cannot be more than 20");
      return;
    }
    counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = () => {
    console.log("clicked:", counter);
    if (counter <= 0) {
      alert("Counter cannot be less than 0");
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai or react</h1>
      <br />
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
