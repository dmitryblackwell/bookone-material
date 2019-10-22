import React, {useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import BookCards from './BookCards/BookCards';
import BookTable from './BookTable/BookTable';
import BookViewSwitcher from './BookViewSwitcher/BookViewSwitcher';
import GenreSelect from './GenreSelect/GenreSelect';
import Grid from '@material-ui/core/Grid';

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

            <Grid container spacing={3}>
                <Grid item xs={2}>     
                    <GenreSelect />
                </Grid>
                <Grid item xs={10}>
                    
            {books}
                </Grid>
            </Grid>
        </div>
    );
};

export default BookShelf;