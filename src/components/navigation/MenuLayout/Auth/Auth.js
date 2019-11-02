import React, {useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


import { StyledMenu, useStyles } from './Auth.style';
import * as actions from '../../../../store/actions/actions';

function Auth() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const [authData, setAuthData] = useState({email: '', password: ''});

  const onChangeHandler = (id, event) => {
    setAuthData({
      ...authData,
      [id]: event.target.value
    });
  }

  const submitHandler = () => {
    console.log(authData);
    actions.auth(authData);
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        login
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        className={classes.StyledMenu}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className={classes.MenuContent}>
          <TextField
            id="standard-username-input"
            label="email"
            className={classes.textField}
            type="text"
            margin="normal"
            onChange={(e) => onChangeHandler('email', e)}
          />
          <br />
          <TextField
            id="standard-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            margin="normal"
            onChange={(e) => onChangeHandler('password', e)}
          />
          <br />
          <Button onClick={submitHandler} variant="outlined" color="secondary" className={classes.button}>
            Log In
          </Button>
          <Link to="/registration">
            <Button color="primary" onClick={handleClose} className={classes.button}>
              registration
            </Button>
          </Link>
        </div>
      </StyledMenu>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password))
  }
}

export default connect(null, mapDispatchToProps)(Auth);