import React from "react";
import Button from "@material-ui/core/Button";
import ListItemText from '@material-ui/core/ListItemText';

import { StyledMenu, StyledMenuItem } from './GenreMenu.style';

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = index => {
    setAnchorEl(null);
    if (index >= 0) {
      props.change(null, index);
    }
  };

  let menuItems = null;
  let value = "genre";
  if (props.genres) {
    menuItems = props.genres.map((genre, index) => {
      return (
        <StyledMenuItem key={index} onClick={() => handleClose(index)}>
          <ListItemText primary={genre} />
        </StyledMenuItem>
      );
    });
    value = props.genres[props.value];
  }

  return (
    <div className={props.className}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        {value}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems}
      </StyledMenu>
    </div>
  );
}
