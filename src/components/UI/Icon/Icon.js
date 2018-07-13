import React from 'react';
import classes from './Icon.css';

const Icon = (props) => (
  <div className={`card mx-auto ${classes.Icon}`}>
    <img className={`mx-auto ${classes.Icon}`} src="assets/icons/sky/day/sun.png" alt="..." />
    <p className="card-text text-center">{props.name}</p>
  </div>
)

export default Icon;
