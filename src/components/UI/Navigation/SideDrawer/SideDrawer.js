import React from 'react';

import ColGroup from '../../../Controls/ColGroup/ColGroup';
import classes from './SideDrawer.css';

const SideDrawer = ( props ) => {

    return (
        <div className={classes.SideDrawer}>
            <h6 className="display">Select Counties or Regions</h6>
            <ColGroup className="center-block" elems={props.counties} toggle={props.toggleCounty} />
            <hr />
            <ColGroup className="center-block" elems={props.regions} toggle={props.toggleRegion} />
        </div>
    );
};

export default SideDrawer;
