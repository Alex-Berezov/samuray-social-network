import React from 'react';
import classes from './Timeline.module.css';
import LeftSidbarPhotos from './leftSidbarPhotos/LeftSidbarPhotos';
import CreatePost from './createPost/CreatePost';
import SinglePost from './singlePost/SinglePost';

const Timeline = (props) => {
    return (
        <div className={`${classes.tab} ${classes.is_active} ${classes.tab_1}`}>
            <div className={classes.tab_1_leftSidbar}>
                <LeftSidbarPhotos />
            </div>
            <div className={classes.tab_1_timelineContent}>
                <CreatePost />
                <SinglePost  />
            </div>
        </div>
    );
}

export default Timeline;