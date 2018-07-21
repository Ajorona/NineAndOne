import React from 'react';
import classes from './SideDrawer.css';


const SideDrawer = props => {
    let drawerClasses = `${classes.SideDrawer}`;
    if (props.show) {
         drawerClasses = `${classes.SideDrawer} ${classes.Open}`;
    }

    return (
            <nav className={drawerClasses}>
                <div className={classes.CloseContainer}>
                    <button type="button" onClick={props.close}>&times;</button>
                </div>
                <div>
                    {props.children}
                </div>
            </nav>
    );
};

export default SideDrawer;
