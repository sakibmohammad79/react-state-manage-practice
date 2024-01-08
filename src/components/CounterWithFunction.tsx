import { useState } from "react";

const CounterWithFunction = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => setCount((prev) => prev + 1)}
      className="ms-5 mt-5 bg-blue-500 text-white font-semibold py-2 px-4 rounded"
    >
      {count}
    </button>
  );
};

export default CounterWithFunction;
