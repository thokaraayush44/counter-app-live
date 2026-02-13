import { useState } from "react";
import "./App.css";
import Increment from "./components/increment";
import Decrement from "./components/decrement";
import Reset from "./components/reset";

function App() {
  const [count, setCount] = useState(0);

  // values for separate increment buttons
  const incrementValues = [5, 10, 15, 20, 30, 40];
  const decrementValues = [5, 10, 15, 20, 30, 40];

  return (
    <div className="app-container">
      <h2>Counter App</h2>
      
      {/* Main Counter Layout */}
      <div className="counter-layout">
        {/* Increment Buttons - Left */}
        <div className="increment-container">
          {incrementValues.map((value) => (
            <Increment
              key={value}
              label={`+${value}`}
              numberToAdd={value}
              count={count}
              setCount={setCount}
            />
          ))}
        </div>

        {/* Counter Display - Center */}
        <div className="counter-display">{count}</div>

        {/* Decrement Buttons - Right */}
        <div className="decrement-container">
          {decrementValues.map((value) => ( 
            <Decrement
              key={value}
              label={`-${value}`}
              numberToSubtract={value}
              count={count}
              setCount={setCount}
            />
          ))} 
        </div>
      </div>
    
      {/* Reset Button */}
      <Reset count={count} setCount={setCount} />
    </div>
  );
}

export default App;
