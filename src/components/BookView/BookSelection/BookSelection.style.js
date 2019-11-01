import { makeStyles } from "@material-ui/core/styles";

export function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

export const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "inline"
    }
  },
  bookSelection: {},
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    minWidth: 200,
    textAlign: "right",
    display: "inline",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  genreMenu: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline"
    }
  }
}));
