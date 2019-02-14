import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    // add array of state property and render using map
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // App - Constructor, App - Rendered, App - Mounted ** In this order!! **

  constructor() {
    super();
    console.log("App - Constructor", this.props); // only called once when instance of class is created
  }

  // constructor (props) {
  // super(props);
  //   console.log('App - Constructor'); // only called once when instance of class is created
  //   this.state = this.props.method;
  //   // props must be passed as an argument or this.props.method will be undefined
  // }

  componentDidMount() {
    // Make Ajax calls to get data from server
    console.log("App - Mounted");
    // Mounted means in the DOM
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  // Get new array of counters, reset value, and return
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
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
    console.log("App - Rendered");
    // returns a React element that represents virtual DOM
    // When a component is rendered, its children are rendered recursively
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters} // controlled component, simply receives data and methods to modify data via props
            // counters is entirely controlled by parent!
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
