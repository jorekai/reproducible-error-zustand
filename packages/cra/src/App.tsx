import "./App.css";

import React from "react";
import { useStore } from "@reproduce/lib/dist/index";

const App = () => {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  return (
    <div className="App">
      <h1>{bears} around here ...</h1>
      <button onClick={increasePopulation}>one up</button>
    </div>
  );
};

export default App;
