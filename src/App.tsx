import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterWithClass from "./components/CounterWithClass";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CounterWithClass></CounterWithClass>
    </div>
  );
}

export default App;
