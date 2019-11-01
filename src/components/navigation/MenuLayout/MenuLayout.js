import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Toolbar from "./Toolbar/Toolbar";
import { useStyles } from "./MenuLayout.style";

import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import HeadsetOutlinedIcon from "@material-ui/icons/HeadsetOutlined";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";

export default function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const userLayoutData = [
    { name: "my account", link: "/myaccount", icon: <AccountCircle /> },
    { name: "books", link: "/books", icon: <MenuBookOutlinedIcon /> },
    { name: "reviews", link: "/reviews", icon: <RateReviewOutlinedIcon /> },
    { name: "podcasts", link: "/podcasts", icon: <HeadsetOutlinedIcon /> }
  ];

  const adminLayoutData = [
    { name: "management", link: "/management", icon: <CreateOutlinedIcon /> },
    { name: "orders", link: "/orders", icon: <AssignmentOutlinedIcon /> }
  ];

  const getLayoutList = layoutData => {
    return layoutData.map(layout => {
      return (
        <NavLink activeClassName={classes.activeNavLink} key={layout.link} to={layout.link} className={classes.navLink}>
          <ListItem button>
            <ListItemIcon>{layout.icon}</ListItemIcon>
            <ListItemText primary={layout.name} />
          </ListItem>
        </NavLink>
      );
    });
  };

  const userLayoutListItems = getLayoutList(userLayoutData);
  const adminLayoutListItems = getLayoutList(adminLayoutData);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar
          menuIconClassName={clsx(classes.menuButton, {
            [classes.hide]: open
          })}
          menuClick={handleDrawerOpen}
        />
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>{userLayoutListItems}</List>
        <Divider />
        <List>{adminLayoutListItems}</List>
      </Drawer>
      <main className={classes.content}>{props.children}</main>
    </div>
  );
}
