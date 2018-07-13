import React from 'react';
import { NavLink } from 'react-router-dom';

const BarItem = ( props ) => (
    <li>
        <NavLink
            to={props.link}
            exact={props.exact}
        >{props.children}</NavLink>
    </li>
);

export default BarItem;
