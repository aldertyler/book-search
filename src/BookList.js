import React, { Component } from "react";
import Book from "./Book";

export default class BookList extends Component {
  render() {
    const booklist = this.props.books.map((element, index) => {
      return <Book books={element} key={index} />;
    });
    return (
      <section>
        <ul>{booklist}</ul>
      </section>
    );
  }
}
