import React from 'react';
import classes from './SideDrawer.css';


const SideDrawer = props => {
    let drawerClasses = `${classes.SideDrawer}`;
    if (props.show) {
         drawerClasses = `${classes.SideDrawer} ${classes.Open}`;
    }

    return (
            <nav className={drawerClasses}>
                <button type="button" onClick={props.close}>&times;</button>
                {props.children}
            </nav>
    );
};

export default SideDrawer;
