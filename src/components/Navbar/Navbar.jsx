import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.navbarNav}>
            <ul className={classes.navbarNavUl}>
                <li>
                    <a href="#">
                        <i className="far fa-user"></i>
                        Profile
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="far fa-envelope-open"></i>
                        Messages
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="far fa-newspaper"></i>
                        Newsfeed
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fab fa-napster"></i>
                        Music
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fas fa-sliders-h"></i>
                        Settings
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;