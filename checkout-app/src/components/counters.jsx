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

  // counterId helps us know which counter to rmeove from above list of counters
  handleDelete = counterId => {
    // console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    // filter() gives all counters except the one with the given id
    // this.setState({ counters: counters }); Simplifies because key/value are same to..
    this.setState({ counters });
    // overwrite counters property with counters constant
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
