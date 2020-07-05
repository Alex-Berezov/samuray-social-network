import React from 'react';
import classes from './Timeline.module.css';
import LeftSidbarPhotos from './leftSidbarPhotos/LeftSidbarPhotos';
import CreatePost from './createPost/CreatePost';
import SinglePost from './singlePost/SinglePost';
import CreatePostContainer from "./createPost/CreatePostContainer";

const Timeline = (props) => {

    let state = props.profilePage;
    let singlePost = state.SinglePostContent.map( post => <SinglePost
        name={ post.singlePostUserName }
        post={ post.singlePostText }
        id={ post.id }
        likes={ post.likesCount }
        comments={ post.commentsCount }
        share={ post.shareCount }
        key={ post.id }
    /> );

    return (
        <div className={`${classes.tab} ${classes.is_active} ${classes.tab_1}`}>
            <div className={classes.tab_1_leftSidbar}>
                <LeftSidbarPhotos />
            </div>
            <div className={classes.tab_1_timelineContent}>
                <CreatePostContainer />
                { singlePost }
            </div>
        </div>
    );
}

export default Timeline;