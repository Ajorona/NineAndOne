import React from 'react';

import classes from './Backdrop.css';

const backdrop = props => (
    <div className={classes.Backdrop} onClick={props.click} />
);

export default backdrop;
