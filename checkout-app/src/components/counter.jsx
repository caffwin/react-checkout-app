import React, { Component } from "react"; // imrc + tab
// cc + tab
class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = product => {
    console.log(product);
    // this.state.count++;
    this.setState({ value: this.state.value + 1 }); // properties here will be merged with state obj
  };

  render() {
    console.log(this.props); // plain js obj that includes
    // all attributes we set in counters component
    // properties of props are "key" and "value" from counters obj
    const product = { id: 1 };
    return (
      <div>
        {/* {this.props.children} */}
        <h4>{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
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
