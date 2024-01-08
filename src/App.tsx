import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterWithClass from "./components/CounterWithClass";
import CounterWithFunction from "./components/CounterWithFunction";
import UserInfoWithUseState from "./components/UserInfoWithUseState";
import UserInfoWithUseReducer from "./components/UserInfoWithUseReducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="border border-red-500 m-10 p-10">
      {/* <CounterWithClass></CounterWithClass> */}
      {/* <button>{count}</button>
      <CounterWithFunction
        count={count}
        setCount={setCount}
      ></CounterWithFunction> */}
      {/* <UserInfoWithUseState /> */}
      <UserInfoWithUseReducer></UserInfoWithUseReducer>
    </div>
  );
}

export default App;
