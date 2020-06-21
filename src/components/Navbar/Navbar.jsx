import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.navbarNav}>
            <ul className={classes.navbarNavUl}>
                <li>
                    <NavLink to="/profile" activeClassName={classes.active}>
                        <i className="far fa-user"></i>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" activeClassName={classes.active}>
                        <i className="far fa-envelope-open"></i>
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/newsfeed" activeClassName={classes.active}>
                        <i className="far fa-newspaper"></i>
                        Newsfeed
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/music" activeClassName={classes.active}>
                        <i className="fab fa-napster"></i>
                        Music
                    </NavLink>
                </li>
                <li>
                    <NavLink to="settings" activeClassName={classes.active}>
                        <i className="fas fa-sliders-h"></i>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;