import React from 'react';

import classes from './Modal.css';

const Instructions = () => (
  <div>
    <h2 className="text-center">Instructions</h2>
    <hr className="display 4"/>
    <h6>NOTE: Google limits the active number of map layers to 5.</h6>
    <p className={classes.Instructions}>
       This app uses Google Fusion Tables to layer polygons over the regions
       and counties of the bay area. Each vertical or horizontal button toggles
       a map layer. By interacting with this map you can better understand the
       geography of the Bay Area and phrases such as "South Bay", "East Bay"
       "Peninsula", "Sonoma" or "Solano", etc.
    </p>


  </div>
);

export default Instructions;
