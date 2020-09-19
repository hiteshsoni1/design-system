import React, { useState } from "react";
import Switch from "./Switch/Switch";
import img from "./han.jpg";
import "./App.css";

function App() {
  const [check, setCheck] = useState(false);
  const [size, setSize] = useState("400px");
  return (
    <div className="App">
      <img src={img} height={400} />
    </div>
  );
}

export default App;
