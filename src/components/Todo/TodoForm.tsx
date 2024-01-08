import { useContext } from "react";
import { todoContext } from "../context/TodoProvider";

const TodoForm = () => {
  const { todoTitle } = useContext(todoContext);
  console.log(todoTitle);
  return (
    <div>
      <h2>This is a todo form conponent</h2>
    </div>
  );
};

export default TodoForm;
