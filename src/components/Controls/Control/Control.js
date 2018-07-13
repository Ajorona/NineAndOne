import React from 'react';
import classes from './Control.css';

// Pass down active, toggle button on active!!FVV

const Control = (props) => {
  let customActive = props.active ? classes.Active : "";
  let bootstrapActive = props.active ? "active" : "";
  let orientationColor = props.vertical ? classes.Vertical : classes.Horizontal;
  let style = `${bootstrapActive} ${customActive} ${orientationColor}`;

  return (
    <button className={`btn ${style}`} onClick={props.toggle}>{props.label}</button>
  )
};


export default Control;
