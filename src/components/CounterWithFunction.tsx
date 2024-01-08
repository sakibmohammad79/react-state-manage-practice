import ChildComponent from "./ChildComponent";

type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const CounterWithFunction = ({ count, setCount }: TProps) => {
  return (
    <div className="border border-red-500 m-10 p-10">
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className=" bg-blue-500 text-white font-semibold py-2 px-4 rounded"
      >
        {count}
      </button>
      <ChildComponent count={count}></ChildComponent>
    </div>
  );
};

export default CounterWithFunction;
