import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import classes from './Toolbar.css';

class Toolbar extends Component {
    state = {
        active: null
    };

    links = [
                 {path: '/map', name: 'Map'},
                 {path: '/microclimate', name: 'MicroClimate'},
                 {path: '/news', name: 'News'},
                 {path: '/statistics', name: 'Statistics'},
             ];

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
                        <ul>
                            {this.links.map( (link) => {
                                return <li>
                                               <NavLink
                                                   to={link.path}
                                                   className={this.state.active === link.name ? classes.Active : '' }
                                                   onClick={() => this.activateButton(link.name)}
                                                   key={link.name}>
                                                   {link.name}
                                                </NavLink>
                                            </li>
                            })};
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Toolbar;
