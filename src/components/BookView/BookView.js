import React, { Component } from "react";
import { connect } from "react-redux";

import BookSelection from "./BookSelection/BookSelection";
import axios from "../../utils/axios";
import BookModal from "./BookModal/BookModal";
import * as actionTypes from "../../store/actions";

/*
 * BookView React class.
 *
 * @author [Dmitry Blackwell](https://github.com/dmitryblackwell)
 * @since  25.10.2019
 */

class BookView extends Component {
  state = {
    openBook: null,
    currentGenre: "sci-fi"
  };

  GenreChangeHandler = (event, newGenre) => {
    if (this.props.books) {
      this.setState({
        currentGenre: Object.keys(this.props.books)[newGenre]
      });
    }
  };

  OpenBookHandler = book => {
    this.setState({ openBook: book });
  };

  CloseBookHandler = () => {
    this.setState({ openBook: null });
  };

  loadBooksGenres = () => {
    if (!this.props.books) {
      axios.get("/genre").then(response => {
        let newBooks = [];
        response.data.forEach(genre => {
          newBooks[genre.name] = null;
        });
        this.props.setLoadedBooksGenres(newBooks);
      });
    }
  };

  loadBooksByGenre = () => {
    if (this.props.books && !this.props.books[this.state.currentGenre]) {
      axios.get("/book/genre/" + this.state.currentGenre).then(response => {
        this.props.setLoadedBooksByGenre(
          response.data,
          this.state.currentGenre
        );
      });
    }
  };

  render() {
    this.loadBooksGenres();
    this.loadBooksByGenre();

    const isModalOpen = this.state.openBook != null;
    return (
      <div>
        <BookSelection
          openBook={this.OpenBookHandler}
          genre={this.state.currentGenre}
          books={this.props.books}
          change={this.GenreChangeHandler}
        />
        <BookModal
          open={isModalOpen}
          book={this.state.openBook}
          handleClose={this.CloseBookHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoadedBooksGenres: books =>
      dispatch({ type: actionTypes.SET_LOADED_BOOKS_GENRES, books: books }),
    setLoadedBooksByGenre: (books, genre) =>
      dispatch({
        type: actionTypes.SET_LOADED_BOOKS_BY_GENRE,
        books: books,
        genre: genre
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookView);
