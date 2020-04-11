import React, { Component } from "react";

export default class PrintType extends Component {
  render() {
    return (
      <>
        <select
          onChange={(event) => this.props.printFilter(event.target.value)}
          name="printtype"
        >
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
      </>
    );
  }
}
