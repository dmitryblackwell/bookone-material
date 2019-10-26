import React, {Component} from 'react';
import BookView from '../../components/BookView/BookView';

/*
 * BookShelf React class.
 *
 * @author [Dmitry Blackwell](https://github.com/dmitryblackwell)
 * @since  25.10.2019
 */

class BookShelf extends Component {

    render() {
        return (
            <div>
                <BookView />
            </div>
        );
    }

};

export default BookShelf;