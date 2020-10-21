import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [state, setState] = useState({ render: false });
  const handleClick = () => {
    setState({ render: true });
  };
  return (
    <div id="main">
      {state.render && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
      <button id="click" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default App;
