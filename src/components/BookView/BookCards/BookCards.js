import React from 'react';

import BookCard from './BookCard/BookCard';

/*
 * BookCards React function.
 *
 * @author [Dmitry Blackwell](https://github.com/dmitryblackwell)
 * @since  22.10.2019
 */

const BookCards = props => {
    return props.books ? props.books.map(book => {
        return <BookCard
            click={() => props.openBook(book)}
            key={book.isbn}
            isbn={book.isbn}
            name={book.name}
            author={book.author}/>
    }) : null;
};

export default BookCards;