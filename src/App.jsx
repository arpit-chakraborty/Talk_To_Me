import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GIFT from "./assets/GIFT.gif"

function App() {
  const [ClickCount, SetClickCount] = useState(0);

  const [NOText, SetNOText] = useState("no");

  const [flag, Setflag] = useState(false);

  const NOTextArray = [
    "plzz Da",
    "Seriously Da",
    "Come na kutty plzzz...",
    "Sona Come on na ",
    "Love You kutty Plz naa",
    "UMMMMMMMMMMAAAAAAAAA plzzzz.....",
  ];

  const mystyle = {
    fontSize: ClickCount * 2 + 20 + "px",
  };

  function Clicked() {
    SetNOText(NOTextArray[Math.floor(Math.random() * NOTextArray.length)]);
    SetClickCount((prev) => {
      return prev + 1;
    });
    console.log(NOTextArray[Math.floor(Math.random() * NOTextArray.length)]);
  }

  function YESSSS() {
    Setflag(true);
  }

  return (
    <div>
      { !flag &&    <div>
        <h1>Talk To Me?</h1>
        <div>
          <button style={mystyle} onClick={YESSSS}>
            YES
          </button>
          <button
            style={{ fontSize: "20px", width: "fit-content" }}
            onClick={Clicked}
          >
            {NOText}
          </button>
        </div>
      </div>}
      {flag &&<div>
        <img src={GIFT} ></img>
        <div>Come HEHEHEHEHHEHHE</div>
        </div>}
    </div>
  );
}

export default App;
