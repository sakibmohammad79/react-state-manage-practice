import React from "react";

class CounterWithClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  render() {
    console.log(this);
    const { count } = this.state;
    return (
      <button
        className="ms-5 mt-5 bg-blue-500 text-white font-semibold py-2 px-4 rounded"
        onClick={() => this.setState({ count: count + 1 })}
      >
        {count}
      </button>
    );
  }
}

export default CounterWithClass;
