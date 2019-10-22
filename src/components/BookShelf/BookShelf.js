import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import BookCards from './BookCards/BookCards';
import BookTable from './BookTable/BookTable';
import BookViewSwitcher from './BookViewSwitcher/BookViewSwitcher';
import GenreSelect from './GenreSelect/GenreSelect';
import BookViewModal from './BookViewModal/BookViewModal';
import axios from 'axios';
/*
 * BookShelf React function.
 *
 * @author [Dmitry Blackwell](https://github.com/dmitryblackwell)
 * @since  22.10.2019
 */


const BookShelf = props => {
    
    const [booksState, setBooksState] = useState([
            {name: 'Something Gained', author: 'Deb Purdy'},
            {name: 'Something Gained', author: 'Deb Purdy'},
            {name: 'Something Gained', author: 'Deb Purdy'},
            {name: 'Something Gained', author: 'Deb Purdy'},
            {name: 'Something Gained', author: 'Deb Purdy'},
        ]);
    const [booksDisplay, setBooksDisplay] = useState('card');

    const handleViewChange = event => {
        setBooksDisplay(event.target.value);
    };

    let books;
    if (booksDisplay === 'inline') {
        books = <BookTable books={booksState} />;
    } else if (booksDisplay === 'card') {
        books = <BookCards books={booksState} />;
    }

    /// this is fucking stateful component~!

    
    return (
        <GenreSelect>
            {books}
            <BookViewModal />
        </GenreSelect>
    );
};

export default BookShelf;