import React from 'react';
import classes from './SinglePost.module.css';
import SinglePostHeader from './singlePostHeader/SinglePostHeader';
import SinglePostContent from './singlePostContent/SinglePostContent';
import SinglePostInfo from './singlePostInfo/SinglePostInfo';
import SinglePostCommentsArea from './singlePostCommentsArea/SinglePostCommentsArea';

const SinglePost = () => {
    return (
        <div className={classes.single_post}>
            <SinglePostHeader />
            <SinglePostContent />
            <SinglePostInfo />
            <hr />
            <SinglePostCommentsArea />
        </div>
    );
}

export default SinglePost;