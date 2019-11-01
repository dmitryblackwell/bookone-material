import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import TextField from "@material-ui/core/TextField";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(1),
    width: 300
  },
  button: {
    margin: theme.spacing(1),
    float: 'right'
  },
  MenuContent: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(0)
  }
}));

export default function CustomizedMenus() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

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
          label="username"
          className={classes.textField}
          type="text"
          autoComplete="current-password"
          margin="normal"
        />
        <br />
        <TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <br />
        <Button variant="outlined" color="primary" className={classes.button}>
          login
        </Button>
        </div>
      </StyledMenu>
    </div>
  );
}
