import React, { Component } from "react"; // imrc + tab
// cc + tab
class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  handleIncrement = product => {
    this.setState({ value: this.state.value + 1 }); // properties here will be merged with state obj
  };

  render() {
    const product = { id: 1 };
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <button></button> */}
      </div>
    ); // This is a JSX expression - not a str
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;

// Deletion needs to happen from counters.jsx "counters" attribute from state (Counters class)
