import "./App.css";

import React from "react";
import { useStore } from "@reproduce/lib/dist/index";

function BearCounter() {
  const bears = useStore((state: any) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  const increasePopulation = useStore((state: any) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}

function App() {
  return (
    <div className="App">
      <BearCounter />
      <Controls />
    </div>
  );
}

export default App;
