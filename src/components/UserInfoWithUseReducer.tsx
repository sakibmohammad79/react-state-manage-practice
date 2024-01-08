import { useReducer } from "react";

const initialState = {
  name: "",
  age: "",
  hobbies: [],
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: "Sakib" };

    default:
      return initialState;
  }
};

const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <form className="">
      <input
        onChange={() => dispatch({ type: "addName" })}
        className="border border-purple-500 p-2 m-5"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />
      <input
        className="border border-purple-500 p-2 m-5"
        type="number"
        name="age"
        id="age"
        placeholder="Age"
      />
      <input
        className="border border-purple-500 p-2 m-5"
        type="text"
        name="hobby"
        id="hobby"
        placeholder="Hobby"
      />
      <button className="btn " type="submit">
        Submit
      </button>
    </form>
  );
};

export default UserInfoWithUseReducer;
