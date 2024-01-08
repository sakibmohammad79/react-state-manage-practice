import { createContext } from "react";

export const todoContext = createContext(undefined);
const TodoProvider = ({ children }) => {
  const todo = {
    todoTitle: "Programing Hero",
  };
  return <todoContext.Provider value={todo}>{children}</todoContext.Provider>;
};

export default TodoProvider;
