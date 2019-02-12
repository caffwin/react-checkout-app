import React, { Component } from "react"; // imrc + tab
// cc + tab
class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = product => {
    console.log(product);
    // this.state.count++;
    this.setState({ count: this.state.count + 1 }); // properties here will be merged with state obj
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
      </div>
    ); // This is a JSX expression - not a str
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

// {this.state.tags.length === 0 && "Please create a new tag"}
// First value is boolean (result), second value is string
// && can be applied between boolean & non boolean values
// true & false > false
// true && "hi" > "hi"
// js tries to convert 'hi' in to truthy or falsey
// empty string = falsey, string with at least 1 char = truthey
// both true, so returns second operand (last one)
// Similarly..
// true && "hi" && 1 > 1
// true, truthey, and truthey because not zero
// Returns last operand (1)

// JSX elements must have one parent element
export default Counter;

// react Fragment to get rid of unnecessary divs
// multicursor editing command + d to find another occurrence of selection

// Dynamic rendering is done using curly braces

// { this.state.tags.map(tag => <li></li>) }
// Getting a string (tag) and mapping it to a jsx expression (<li></li>)
// This gets compiled to a React element (a plain js object)
// tl;dr Taking a string and mapping it to a plain js object

// Any time map method is used to render list of items,
// set key attribute in <li>
// <li key = {tag.id}></li>

// virtual dom is a tree of three elements: div and two children, span and button

// passing event arguments, composing components
