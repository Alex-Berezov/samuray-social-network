import React from 'react';
import classes from './SinglePostCommentsArea.module.css';
import CommentsContentHeader from './commentsContentHeader/CommentsContentHeader';
import CommentsContent from './commentsContent/CommentsContent';
import CommentsAddComment from './commentsAddComment/CommentsAddComment';

const SinglePostCommentsArea = () => {
    return (
        <div className={classes.comments_area}>
            <div className={classes.single_comments}>
                <CommentsContentHeader />
                <CommentsContent />
                <CommentsAddComment />
            </div>
        </div>
    );
}

export default SinglePostCommentsArea;