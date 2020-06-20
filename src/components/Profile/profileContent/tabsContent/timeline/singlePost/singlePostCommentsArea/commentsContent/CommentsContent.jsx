import React from 'react';
import classes from './CommentsContent.module.css';

const CommentsContent = () => {
    return (
        <div className={classes.single_comments_content}>
            <div className={classes.text}>
                <p>
                    Some comments text here
                </p>
            </div>
            <div className={classes.comments_content_footer}>
                <p>Like</p>
                <p>Reply</p>
                <p className={classes.date}>5 min ago</p>
            </div>
        </div>
    );
}

export default CommentsContent;