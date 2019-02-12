import React, { Component } from "react"; // imrc + tab

// cc + tab
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  // constructor() {
  //   super();
  //   // console.log("Constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this); // necessary for each event handler
  // }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    // changed to arrow function, cleaner and simpler than constructor
    console.log("Increment Clicked", this);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag"} */}

        {/* {this.renderTags()} */}
      </div>
    ); // This is a JSX expression - not a str
    // Logic: if this array has at least one element, render array in list
    // Otherwise, display message
    // No if/else like jsx.. so go back to plain js
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
