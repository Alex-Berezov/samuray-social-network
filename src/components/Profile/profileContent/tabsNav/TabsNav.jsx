import React from 'react';
import classes from './TabsNav.module.css';
import {NavLink} from "react-router-dom";

const TabsNav = (props) => {

    let path = "/profile/" + props.tabName;

    return (
            <NavLink
                to={ path }
                className={ classes.tabs_nav__item }
                activeClassName={ classes.is_active }
            >
                {props.navItemName}
            </NavLink>
    );
}

export default TabsNav;