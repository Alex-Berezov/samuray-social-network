import React from 'react';
import classes from './TabsNav.module.css';

const TabsNav = () => {
    return (
        <div className={classes.tabs__nav}>
            <div className={`${classes.tabs_nav__item} ${classes.is_active}`} data-tab-name="tab_1">Timeline</div>
            <div className={classes.tabs_nav__item} data-tab-name="tab_2">About</div>
            <div className={classes.tabs_nav__item} data-tab-name="tab_3">Friends</div>
            <div className={classes.tabs_nav__item} data-tab-name="tab_4">Photos</div>
        </div>
    );
}

export default TabsNav;