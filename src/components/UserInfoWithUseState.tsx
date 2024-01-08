//user = {id, age, hobbies}

import { useState } from "react";

const UserInfoWithUseState = () => {
  const [user, SetUser] = useState({ name: "", age: "0", hobbies: [] });
  console.log(user);
  return (
    <form className="">
      <input
        onChange={(e) => SetUser({ ...user, name: e.target.value })}
        className="border border-purple-500 p-2 m-5"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
      />
      <input
        onChange={(e) => SetUser({ ...user, age: e.target.value })}
        className="border border-purple-500 p-2 m-5"
        type="number"
        name="age"
        id="age"
        placeholder="Age"
      />
      <input
        onBlur={(e) =>
          SetUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
        }
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

export default UserInfoWithUseState;
