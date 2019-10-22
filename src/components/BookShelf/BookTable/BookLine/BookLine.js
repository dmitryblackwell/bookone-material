import React from 'react';


import img from '../../../../assets/SomethingGained.jpg';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';

/*
 * BookLine React function.
 *
 * @author [Dmitry Blackwell](https://github.com/dmitryblackwell)
 * @since  22.10.2019
 */



 const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.white, //theme.palette.common.primary,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);
  
const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
}))(TableRow);
  

const BookLine = props => {
    return (
        <StyledTableRow>
            <StyledTableCell component="th" scope="row">
                <Avatar src={img}/>
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
                {props.name}
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
                {props.author}
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
                5.0
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">    
              <AddShoppingCartOutlinedIcon />
            </StyledTableCell>
        </StyledTableRow>
    );
};

export default BookLine;