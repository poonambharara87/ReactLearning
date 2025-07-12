import { useState, useCallback, useEffect, useRef, use } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  console.log("App component rendered");

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABSDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    //as the length is increasing the value in str adds the char and number or special char add  if true
    for (let i = 0; i < length; i++) {
      //index added in char
      let char = Math.floor(Math.random() * str.length + 1);
      // assign to pass
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99); // For mobile devices
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div
        className="container text-center mt-5"
        style={{ width: "1000px", height: "1000px" }}
      >
        <div
          className="col-md-6 bg-dark text-warning p-3 rounded shadow"
          style={{
            width: "730px",
            height: "122px",

            marginLeft: "100px",
            borderRadius: "55px",
          }}
        >
          <input
            type="text"
            style={{
              top: "83px",
              width: "663px",
              position: "absolute",
              left: "141px",
              height: "46px",
              borderRadius: "25px",
              textAlign: "center", // Added border radius
            }}
            value={password}
            max={100}
            onChange={(e) => setPassword(e.target.value)}
            readOnly
            ref={passwordRef}
            placeholder="   Password will be generated here"
          />

          <input
            type="range"
            style={{
              width: "230px",
              position: "absolute",
              left: "144px",
              height: "20px",
              top: "137px",
              borderRadius: "5px", // Added border radius
            }}
            onChange={(e) => setLength(e.target.value)}
            readOnly
            placeholder="Password will be generated here"
          />
          <label
            style={{
              display: "inline-block",
              position: "absolute",
              top: "134px",
              left: "375px",

              fontSize: "16px",
              textAlign: "center",
              width: "100px",
              height: "20px",
            }}
          >
            Length:{length}
          </label>
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none"
            style={{
              outline: "none",
              background: "linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)",
              padding: "0px 50px",
              color: "#fff",
              position: "absolute",
              left: "682px",
              height: "45px",
              width: "120px",
              border: "none",
              borderRadius: "25px",
              fontWeight: "bold",
              boxShadow: "0 4px 14px 0 rgba(78,84,200,0.15)",
              transition: "background 0.3s, transform 0.2s",
              cursor: "pointer",
              top: "83px",
            }}
          >
            Copy
          </button>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            style={{
              position: "absolute",
              top: "140px",
              left: "482px",
            }}
          />
          <label
            style={{
              position: "absolute",
              top: "132px",
              left: "504px",
            }}
          >
            Numbers
          </label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="numberInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            style={{
              position: "absolute",
              top: "140px",
              left: "589px",
            }}
          />
          <label
            style={{
              position: "absolute",
              top: "132px",
              left: "612px",
            }}
          >
            Character
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
