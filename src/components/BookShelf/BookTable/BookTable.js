import React, {useState} from 'react';

import BookLine from './BookLine/BookLine';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
/*
 * BookTable React function.
 *
 * @author [Dmitry Blackwell](https://github.com/dmitryblackwell)
 * @since  22.10.2019
 */

const BookTable = props => {
    return (
        <Table aria-label="customized table">   
            <TableBody>
            {props.books.map(book => (
                <BookLine name={book.name} author={book.author} />
            ))}
            </TableBody>
        </Table>
    );
};

export default BookTable;