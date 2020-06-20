import React from 'react';
import classes from './SinglePostInfo.module.css';

const SinglePostInfo = () => {
    return (
        <div className={classes.single_post_info}>
            <div className={classes.likes}>
                <i className="far fa-thumbs-up"></i>
                <p>140 likes</p>
            </div>
            <div className={classes.comments}>
                <p>20 comment</p>
            </div>
            <div className={classes.share}>
                <i className="fas fa-share-alt"></i>
                <p>99 Share</p>
            </div>
        </div>
    );
}

export default SinglePostInfo;