import React, {useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import axios from 'axios';
/*
 * GenreSelect React function.
 *
 * @author [Dmitry Blackwell](https://github.com/dmitryblackwell)
 * @since  22.10.2019
 */

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    marginTop: 30
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const GenreSelect = props => {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
      setValue(newValue);
  };
  const [genres, setGenresState] = useState();

    axios.get("http://localhost:8080/api/genre/")
        .then(response => {
            setGenresState(response.data);
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
  let tabs = null;
  if (genres) {
    tabs = (
      <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}>
                {genres.map(genre => {
                  return <Tab label={genre.name} {...a11yProps(0)} />;
                })}
                </Tabs>
    )
  }
  return (
    <div className={classes.root}>
      {tabs}
      <TabPanel value={value} index={0}>
          {props.children}
      </TabPanel>
      <TabPanel value={value} index={1}>
          {props.children}
      </TabPanel>
      <TabPanel value={value} index={2}>
          {props.children}
      </TabPanel>
    </div>
  );
  
};

export default GenreSelect;