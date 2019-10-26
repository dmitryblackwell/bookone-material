import React, { Component } from "react";
import BookSelection from "./BookSelection/BookSelection";
import axios from "../../utils/axios";
import BookModal from "./BookModal/BookModal";

/*
 * BookView React class.
 *
 * @author [Dmitry Blackwell](https://github.com/dmitryblackwell)
 * @since  25.10.2019
 */

class BookView extends Component {
  state = {
    openBook: null,
    currentGenre: "sci-fi",
    books: null
  };

  GenreChangeHandler = (event, newGenre) => {
    if (this.state.books) {
      this.setState({
        currentGenre: Object.keys(this.state.books)[newGenre]
      });
    }
  };

  OpenBookHandler = book => {
    this.setState({ openBook: book });
  };
  CloseBookHandler = () => {
    this.setState({ openBook: null });
  };

  render() {
    if (!this.state.books) {
      axios.get("/genre").then(response => {
        let newBooks = [];
        response.data.forEach(genre => {
          newBooks[genre.name] = null;
        });
        this.setState({ books: newBooks });
      });
    }
    if (this.state.books && !this.state.books[this.state.currentGenre]) {
      axios.get("/book/genre/" + this.state.currentGenre).then(response => {
        let newBooks = { ...this.state.books };
        newBooks[this.state.currentGenre] = response.data;
        this.setState({ books: newBooks });
      });
    }

    const isModalOpen = this.state.openBook != null;
    return (
      <div>
        <BookSelection
          openBook={this.OpenBookHandler}
          genre={this.state.currentGenre}
          books={this.state.books}
          change={this.GenreChangeHandler}
        />
        <BookModal open={isModalOpen} book={this.state.openBook} handleClose={this.CloseBookHandler} />
      </div>
    );
  }
}

export default BookView;
