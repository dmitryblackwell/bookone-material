import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BookCard from './BookCard/BookCard';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

/*
 * BookShelf React function.
 *
 * @author [Dmitry Blackwell](https://github.com/dmitryblackwell)
 * @since  22.10.2019
 */

const useStyles = makeStyles({
    RadioGroup: {
        float: 'center',
        display: 'block',
    },
    FormControlLabel: {
        marginRight: 10
    }
  });

const BookShelf = props => {
    
    const classes = useStyles();
    const [booksState, setBooksState] = useState([
            {name: 'Something Gained', author: 'Deb Purdy'},
            {name: 'Something Gained', author: 'Deb Purdy'},
            {name: 'Something Gained', author: 'Deb Purdy'},
            {name: 'Something Gained', author: 'Deb Purdy'},
            {name: 'Something Gained', author: 'Deb Purdy'},
        ]);

    const [booksDisplay, setBooksDisplay] = React.useState('card');

    const handleChange = event => {
        setBooksDisplay(event.target.value);
    };
    let books;
    if (booksDisplay === 'inline') {

    } else if (booksDisplay === 'card') {
        books = booksState.map(book => {
            return <BookCard name={book.name} author={book.author}/>
        })
    }
    return (
        <div>
            <RadioGroup className={classes.RadioGroup} aria-label="position" name="position" value={booksDisplay} onChange={handleChange} row>
                <FormControlLabel
                    className={classes.FormControlLabel}
                    value="card"
                    control={<Radio color="primary" />}
                    label="card"
                    labelPlacement="start"
                    />
                <FormControlLabel
                    value="inline"
                    control={<Radio color="primary" />}
                    label="inline"
                    labelPlacement="end"
                    />
            </RadioGroup>
            {books}
        </div>
    );
};

export default BookShelf;