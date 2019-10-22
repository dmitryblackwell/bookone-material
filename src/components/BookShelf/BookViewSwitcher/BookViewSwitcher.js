import React, {useState} from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

/*
 * BookViewSwitcher React function.
 *
 * @author [Dmitry Blackwell](https://github.com/dmitryblackwell)
 * @since  22.10.2019
 */


const useStyles = makeStyles({
    RadioGroup: {
        float: 'center',
        display: 'block',
    },
    FormControlLabel: {
        marginRight: 10
    },
});

const BookViewSwitcher = props => {
    const classes = useStyles();
    return (
        <RadioGroup 
            className={classes.RadioGroup} 
            aria-label="position"
            name="position"
            value={props.display}
            onChange={props.switch} row>
            <FormControlLabel
                className={classes.FormControlLabel}
                value="card"
                control={<Radio color="primary" />}
                label="card"
                labelPlacement="end"
                />
            <FormControlLabel
                value="inline"
                control={<Radio color="primary" />}
                label="inline"
                labelPlacement="end"
                />
        </RadioGroup>
    );
};

export default BookViewSwitcher;