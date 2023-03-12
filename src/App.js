
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
          <header className="App-header">
        <Weather defaultCity="Amsterdam"/>
        <footer>
        <a href='https://github.com/aniekossewaarde/final-weather-application-react' target="_blank">Open-source code</a> by <a href='https://www.linkedin.com/in/aniek-ossewaarde-88a17085/?originalSubdomain=es' target="_blank">Aniek Ossewaarde</a>
        </footer>
      </header>
      </div>
    </div>
  );
}

