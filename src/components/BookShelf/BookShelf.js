import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import BookCards from './BookCards/BookCards';
import BookTable from './BookTable/BookTable';
import BookViewSwitcher from './BookViewSwitcher/BookViewSwitcher';

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

    const [booksDisplay, setBooksDisplay] = useState('inline');

    const handleViewChange = event => {
        setBooksDisplay(event.target.value);
    };

    let books;
    if (booksDisplay === 'inline') {
        books = <BookTable books={booksState} />;
    } else if (booksDisplay === 'card') {
        books = <BookCards books={booksState} />;
    }
    const value = 0;
    return (
        <div>
            <BookViewSwitcher
                display={booksDisplay}
                
                switch={handleViewChange} />
            {books}
        </div>
    );
};

export default BookShelf;