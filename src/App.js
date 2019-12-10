import React from "react";
import logo from "./logo.svg";
import "./App.css";

async function test() {
  const res = await fetch("http://localhost:5000");
  const json = await res.json();
  console.log(json);
}

function App() {
  test();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
