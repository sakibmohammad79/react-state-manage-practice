import { ChangeEvent, useContext, useState } from "react";
import { todoContext } from "../context/TodoProvider";

const TodoForm = () => {
  const { state, dispatch } = useContext(todoContext);
  console.log(state);
  const [task, setTask] = useState("");
  const handleSubmit = (e: ChangeEvent) => {
    e.preventDefault();
    const todo = {
      id: Math.random().toString(36).substring(2, 7),
      title: task,
      isCompleted: false,
    };
    dispatch({ type: "addTodo", payload: todo });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Task</label>
      <input
        className="border border-red-600"
        onBlur={(e) => setTask(e.target.value)}
        type="text"
        name="todo"
        id="todo"
        placeholder="Todo"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TodoForm;
