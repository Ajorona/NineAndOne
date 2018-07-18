import React from 'react';
import { NavLink } from 'react-router-dom';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import classes from './Toolbar.css';

const toolbar = props => (
    <header className={classes.Toolbar}>
        <nav className={classes.ToolbarNav}>
            <div className={classes.ToolbarToggleButton}>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className={classes.ToolbarLogo}>
                <NavLink to="/">Nine & 1</NavLink>
            </div>
            <div className={classes.ToolbarInfoButton}>
                <button className="btn btn-success" onClick={props.modalOpen}>Info</button>
            </div>
            <div className={classes.Spacer} />
            <div className={classes.ToolbarNavItems}>
                <ul>
                    <li><NavLink to="/map">Map</NavLink></li>
                    <li><NavLink to="/microclimate">MicroClimate</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/statistics">Statistics</NavLink></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar;
