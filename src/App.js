import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Amsterdam" />
        <footer>
        <a href='https://github.com/aniekossewaarde/final-weather-application-react' target="_blank" rel="noreferrer">Open-source code</a> by <a href='https://www.linkedin.com/in/aniek-ossewaarde-88a17085/?originalSubdomain=es' target="_blank" rel="noreferrer">Aniek Ossewaarde</a>
        </footer>
      </div>
    </div>
  );
}

