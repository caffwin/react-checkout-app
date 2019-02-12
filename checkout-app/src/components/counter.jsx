import React, { Component } from "react"; // imrc + tab

// cc + tab
class Counter extends Component {
  state = {
    // set this to an object, any data this object needs
    count: 1
    // imageUrl: "https://picsum.photos/200"
  };

  // styles = {
  //   fontSize: 20,
  //   fontWeight: "bold"
  // };

  render() {
    // React.createElement("div");
    // start with primary badge you want in all cases
    // let classes = "badge m-2"
    // classes += (this.state.count === 0) ? "badge-warning" : "badge-primary";

    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}

        <span className={classes}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    ); // This is a JSX expression - not a str
  }

  formatCount() {
    const { count } = this.state; // picking count property of obj and storing it in separate var {count}
    // check value of count property, return 0 if 0, otherwise return count
    // return this.state.count === 0 ? 'Zero' : this.state.count;
    return count === 0 ? "Zero" : count;
    // return count === 0 ? <h1>Zero</h1> : count;
    // object destructuring (this.state) and peek count property
    // We can also return a jsx expression
    // JSX exps are just like normal js objs - can be returned, passed to function,
    // used as value of constant or variable, etc.
  }
}

// JSX elements must have one parent element
export default Counter;

// react Fragment to get rid of unnecessary divs
// multicursor editing command + d to find another occurrence of selection
