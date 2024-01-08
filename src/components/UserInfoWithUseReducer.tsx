import { ChangeEvent, useReducer } from "react";

const initialState = {
  name: "",
  age: "",
  hobbies: [] as string[],
};

type TAction = {
  type: string;
  payload: string;
};

const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return { ...currentState, name: action.payload };
    case "addAge":
      return { ...currentState, age: action.payload };
    case "addHobby":
      return {
        ...currentState,
        hobbies: [...currentState.hobbies, action.payload],
      };

    default:
      return initialState;
  }
};

const UserInfoWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => dispatch({ type: "addName", payload: e.target.value })}
        className="border border-purple-500 p-2 m-5"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />
      <input
        onChange={(e) => dispatch({ type: "addAge", payload: e.target.value })}
        className="border border-purple-500 p-2 m-5"
        type="number"
        name="age"
        id="age"
        placeholder="Age"
      />
      <input
        onBlur={(e) => dispatch({ type: "addHobby", payload: e.target.value })}
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
