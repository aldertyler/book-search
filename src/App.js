import React, { Component } from "react";
// import "./App.css";
import Search from "./Search";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>GOOGLE BOOK SEARCH</h1>
        </header>
        <Search />
      </div>
    );
  }
}
