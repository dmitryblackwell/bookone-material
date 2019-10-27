import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
import BookCards from '../BookCards/BookCards';

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
    display: "flex"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const VerticalTabs = props => {
  const classes = useStyles();

  let value = null;
  let tabs = null;
  let tabPanels = null;
  
  if (props.books) {
    const genres = Object.keys(props.books);
    value = genres.indexOf(props.genre);
    tabs = genres.map((genre, index) => {
      return <Tab key={index} label={genre} {...a11yProps(index)} />;
    });
    
    tabPanels = Object.values(props.books).map((books, index) => {
      return (
        <TabPanel key={index} value={value} index={index}>
          <BookCards openBook={props.openBook} books={books} />
        </TabPanel>
      );
    });
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={props.change}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {tabs}
      </Tabs>
      {tabPanels}
    </div>
  );
};

export default VerticalTabs;
