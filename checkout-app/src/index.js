import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
// import Counter from "./components/counter";
import Counters from "./components/counters";

// const element = <h1>Hello World</h1>;
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Counter />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

ReactDOM.render(<Counters />, document.getElementById("root"));
