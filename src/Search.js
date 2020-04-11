import React, { Component } from "react";
import BookList from "./BookList";
import PrintType from "./PrintType";
import BookType from "./BookType";
import createURL from "./CreateUrl";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      search: "",
      printType: "",
      bookType: "",
    };
  }

  setSearchTerm = (term) => {
    this.setState({
      search: term,
    });
  };

  bookSearch = (event) => {
    event.preventDefault();
    const url = createURL(
      this.state.search,
      this.state.printType,
      this.state.bookType
    );
    fetch(url, {
      method: "GET",
      apiKey: "AIzaSyD5_D66akxWBw-vk-Fyiu27nMqsEG5_8j4",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        data.items.map((items) => {
          const book = {
            title: items.volumeInfo.title,
            author: items.volumeInfo.authors,
            image: items.volumeInfo.imageLinks.smallThumbnail,
            price: items.saleInfo.saleability,
            description: items.volumeInfo.description,
          };

          this.setState({ books: [...this.state.books, book] });
          return book;
        })
      );
  };
  bookTypeFilter = (filter) => {
    this.setState({ bookType: filter });
  };

  printTypeFilter = (filter) => {
    this.setState({ printType: filter });
  };

  render() {
    return (
      <>
        <section>
          <form>
            <label htmlFor="search">Search:</label>
            <input
              type="text"
              name="search"
              onChange={(event) => this.setSearchTerm(event.target.value)}
            />
            <button type="submit" onClick={(event) => this.bookSearch(event)}>
              Search
            </button>
          </form>
        </section>
        <section>
          <PrintType printFilter={(filter) => this.printTypeFilter(filter)} />
          <BookType bookFilter={(filter) => this.bookTypeFilter(filter)} />
        </section>
        <BookList books={this.state.books} />
      </>
    );
  }
}
