import React from 'react';
import classes from './TabsContent.module.css';
import About from './about/About';
import Friends from './friends/Friends';
import Photos from './photos/Photos';
import TimelineContainer from "./timeline/TimelineContainer";

const TabsContent = (props) => {

    return (
        <div className={classes.tabs__content}>
            <TimelineContainer />
            <About />
            <Friends />
            <Photos />
        </div>
    );
}

export default TabsContent;