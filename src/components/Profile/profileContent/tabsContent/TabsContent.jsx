import React from 'react';
import classes from './TabsContent.module.css';
import Timeline from './timeline/Timeline';
import About from './about/About';
import Friends from './friends/Friends';
import Photos from './photos/Photos';
import {updateNewPostText} from "../../../../redux/store";

const TabsContent = (props) => {

    return (
        <div className={classes.tabs__content}>
            <Timeline
                state={props.state}
                dispatch={ props.dispatch }
            />
            <About />
            <Friends />
            <Photos />
        </div>
    );
}

export default TabsContent;