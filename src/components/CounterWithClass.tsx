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
    return <button className="font-semibold">{count}</button>;
  }
}

export default CounterWithClass;
