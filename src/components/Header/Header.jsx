import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/img/logo.jpg';

const Header = (props) => {
    return (
        <section className={classes.header}>
            <div className={classes.wrapper}>
                <div className={classes.logo_part}>
                    <img src={logo} alt="Logotype" />
                    <div className={classes.button_new}>
                        <span className={classes.line}></span>
                        <span className={classes.line}></span>
                        <span className={classes.line}></span>
                    </div>
                </div>
                <div className={classes.search_part}>
                    <form>
                        <input type="search" name="search_input" id="" placeholder="What are we looking for?" />
                        <a href="#" className={classes.search_btn}><i className="fab fa-searchengin"></i></a>
                    </form>
                </div>
                <div className={classes.right_part}>
                    <div className={classes.login_block}>
                        { props.isAuth
                            ? <p>{props.login} <button onClick={props.logout}>Logout</button></p>
                            : <NavLink to={'/login'}>Login</NavLink> }
                    </div>
                    <div className={classes.notifications}>
                        <i className="far fa-bell"></i>
                    </div>
                    <div className={classes.settings}>
                        <i className="fas fa-sliders-h"></i>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;