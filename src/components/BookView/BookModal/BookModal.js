import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import axios from '../../../utils/axios';
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";

/*
 * BookViewModal React function.
 *
 * @author [Dmitry Blackwell](https://github.com/dmitryblackwell)
 * @since  23.10.2019
 */

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialogSlide = props => {

  let name = "";
  let description, img;

  if (props.book) {
    name = props.book.name;
    description = props.book.description;
    img = axios.defaults.baseURL + "/media/book/" + props.book.isbn;
  }

  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <img src={img} alt={name} style={{width: '30%', float: 'left', marginRight: 30}} />
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            <AddShoppingCartOutlinedIcon />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialogSlide;