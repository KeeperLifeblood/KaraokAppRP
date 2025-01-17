import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SongSelection from "./Components/SongSelection";
import LyricsDisplay from "./Components/LyricsDisplay";
import ScoreDisplay from "./Components/ScoreDisplay";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/lyrics" element={<LyricsDisplay />} />
          <Route path="/score" element={<ScoreDisplay score={0} />} />
          <Route path="/" element={<SongSelection />} />
        </Routes>
      </div>

      <>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https:react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    </Router>
  );
}

export default App;
