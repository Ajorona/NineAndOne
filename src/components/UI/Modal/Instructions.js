import React from 'react';

import classes from './Modal.css';

const Instructions = () => (
  <div>
    <h2 className="text-center">Instructions</h2>
    <hr className="display 4"/>
    <h6 className="text-center">NOTE: Google limits the active number of map layers to 5.</h6>
    <p className={classes.Instructions}>
       Nine & 1 uses the Google Fusion Tables API to layer polygons over the regions and counties
       of the bay area. The aim of this map is to demonstrate the geography of the bay area so that
       you may understand phrases such as "South Bay", "East Bay"  "Peninsula", "Sonoma"
        or "Solano", etc. There is an additional MicoClimate table that lets you compare climate
        differences between these regions to get a better view of weather in the bay area.
    </p>


  </div>
);

export default Instructions;
