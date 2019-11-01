import * as actionTypes from "../actions";

const initialState = {
  books: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADED_BOOKS_GENRES:
      return {
        ...state,
        books: action.books
      };
    case actionTypes.SET_LOADED_BOOKS_BY_GENRE:
      let newBooks = {...state.books};
      newBooks[action.genre] = action.books;
      return {
        ...state,
        books: newBooks
      };
  }
  return state;
};

export default reducer;
