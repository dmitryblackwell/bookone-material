import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel/TabPanel";
import BookCards from "../BookCards/BookCards";
import GenreMenu from "./GenreMenu/GenreMenu";

import { a11yProps, useStyles } from './BookSelection.style';

const VerticalTabs = props => {
  const classes = useStyles();

  let value = null;
  let tabs = null;
  let tabPanels = null;
  let genres = null;

  if (props.books) {
    genres = Object.keys(props.books);
    value = genres.indexOf(props.genre);
    tabs = genres.map((genre, index) => {
      return <Tab key={index} label={genre} {...a11yProps(index)} />;
    });

    tabPanels = Object.values(props.books).map((books, index) => {
      return (
        <TabPanel key={index} value={value} index={index}>
          <BookCards openBook={props.openBook} books={books} />
          <BookCards openBook={props.openBook} books={books} />
        </TabPanel>
      );
    });
  }

  return (
      <div className={classes.root}>
        <GenreMenu
          value={value}
          genres={genres}
          change={props.change}
          className={classes.genreMenu}
        />
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
