import React, { Component } from "react";

export default class BookType extends Component {
  render() {
    return (
      <>
        <select
          onChange={(event) => this.props.bookFilter(event.target.value)}
          name="booktype"
        >
          <option value="">No Filter</option>
          <option value="ebooks">ebooks</option>
          <option value="free-ebooks">free-ebooks</option>
          <option value="full">full</option>
          <option value="paid-ebooks">paid-ebooks</option>
          <option value="partial">partial</option>
        </select>
      </>
    );
  }
}
