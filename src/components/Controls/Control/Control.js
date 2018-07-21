import React from 'react';
import classes from './Control.css';

// Pass down active, toggle button on active!!FVV

const Control = (props) => {
  let active = props.active ? classes.Active : "";
  let color = props.Blue ? classes.Blue : classes.Green;
  let style = `${active} ${color}`;

  return (
    <button className={`btn ${style}`} onClick={props.toggle}>{props.label}</button>
  )
};


export default Control;
