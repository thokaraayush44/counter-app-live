import { useState } from "react";
import "./App.css";
import Increment from "./components/increment";
import Decrement from "./components/decrement";
import Reset from "./components/reset";

function App() {
  const [count, setCount] = useState(0);

  // values for separate increment buttons
  const incrementValues = [5, 10, 15, 20, 30, 40,];

  return (
    <div className="app-container">
      <h2>Counter App</h2>
      <div className="counter-display">{count}</div>

      {/* Increment Buttons */}
      <div className="buttons-container">
        {incrementValues.map((value) => (
          <Increment
            key={value}
            label={`+${value}`}
            numberToAdd={value}
            count={count}
            setCount={setCount}
          />
        ))}

        {/* Decrement Button */}
        <Decrement
          label="-1"
          count={count}
          setCount={setCount}
        />
      </div>

      {/* Reset Button */}
      <Reset count={count} setCount={setCount} />
    </div>
  );
}

export default App;
