import { useState } from "react";
import './App.css';

function App() {
  const [color, setColor] = useState(true);

  console.log(color);
  return (
    <div className="App">
      <div className="wrapper">
        {color ? (
          <button className="blue" onClick={() => setColor(!color)}>
            blue
          </button>
        ) : (
          <button className="green" onClick={() => setColor(!color)}>
            green
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
