import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    // add array of state property and render using map
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} id={counter.id} />
        ))}
      </div>
    );
  }
}

export default Counters;

// passing data to components, passing children
// map() creates new array with each result of function call as an element

// <Counter key={counter.id} value={counter.value}/>
// These attributes are passed to component using single js obj 'props
// 'key' and 'value'
