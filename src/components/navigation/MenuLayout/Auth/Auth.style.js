import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";

export const StyledMenu = withStyles({
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

export const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(1),
    width: 300
  },
  button: {
    margin: theme.spacing(1),
    float: "right"
  },
  MenuContent: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(0)
  }
}));
