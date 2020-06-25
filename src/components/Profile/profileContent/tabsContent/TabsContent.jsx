import React from 'react';
import classes from './TabsContent.module.css';
import Timeline from './timeline/Timeline';
import About from './about/About';
import Friends from './friends/Friends';
import Photos from './photos/Photos';

const TabsContent = () => {

    return (
        <div className={classes.tabs__content}>
            <Timeline />
            <About />
            <Friends />
            <Photos />
        </div>
    );
}

export default TabsContent;