import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import classes from './Toolbar.css';

class Toolbar extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        active: null
    };

    activateButton = (name) => {
        this.setState({ active: name })
    };

    render() {
        return (
            <header className={classes.Toolbar}>
                <nav className={classes.ToolbarNav}>
                    <div className={classes.ToolbarToggleButton}>
                        <DrawerToggleButton click={this.props.drawerClickHandler} />
                    </div>
                    <div className={classes.ToolbarLogo}>
                        <NavLink to="/">Nine & 1</NavLink>
                    </div>
                    <div className={classes.ToolbarInfoButton}>
                        <button className="btn btn-success" onClick={this.props.modalOpen}>Info</button>
                    </div>
                    <div className={classes.Spacer} />
                    <div className={classes.ToolbarNavItems}>
                        {this.props.children}
                    </div>
                </nav>
            </header>
        );
    }
}

export default Toolbar;
