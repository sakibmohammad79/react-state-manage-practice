import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterWithClass from "./components/CounterWithClass";
import CounterWithFunction from "./components/CounterWithFunction";
import UserInfoWithUseState from "./components/UserInfoWithUseState";
import UserInfoWithUseReducer from "./components/UserInfoWithUseReducer";
import TodoProvider from "./components/context/TodoProvider";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <TodoProvider>
      <div className="">
        {/* <CounterWithClass></CounterWithClass> */}
        {/* <button>{count}</button>
      <CounterWithFunction
      count={count}
      setCount={setCount}
    ></CounterWithFunction> */}
        {/* <UserInfoWithUseState /> */}
        {/* <UserInfoWithUseReducer></UserInfoWithUseReducer> */}
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </div>
    </TodoProvider>
  );
}

export default App;
