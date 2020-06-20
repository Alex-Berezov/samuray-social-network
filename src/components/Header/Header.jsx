import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <section className={classes.header}>
            <div className={classes.wrapper}>
                <div className={classes.logo_part}>
                    <img src="img/logo.jpg" alt="Logotype" />
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