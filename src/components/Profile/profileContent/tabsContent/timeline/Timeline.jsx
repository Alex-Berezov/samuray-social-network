import React from 'react';
import classes from './Timeline.module.css';
import LeftSidbarPhotos from './leftSidbarPhotos/LeftSidbarPhotos';
import CreatePost from './createPost/CreatePost';
import SinglePost from './singlePost/SinglePost';
import {updateNewPostText} from "../../../../../redux/store";

const Timeline = (props) => {

    let singlePost = props.state.profilePage.SinglePostContent.map( post => <SinglePost
        name={post.singlePostUserName}
        post={post.singlePostText}
        id={post.id}
        likes={post.likesCount}
        comments={post.commentsCount}
        share={post.shareCount}
    /> );

    return (
        <div className={`${classes.tab} ${classes.is_active} ${classes.tab_1}`}>
            <div className={classes.tab_1_leftSidbar}>
                <LeftSidbarPhotos />
            </div>
            <div className={classes.tab_1_timelineContent}>
                <CreatePost
                    state={props.state}
                    dispatch={ props.dispatch }
                />
                { singlePost }
            </div>
        </div>
    );
}

export default Timeline;