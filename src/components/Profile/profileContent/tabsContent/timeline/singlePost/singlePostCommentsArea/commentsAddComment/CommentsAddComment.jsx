import React from 'react';
import classes from './CommentsAddComment.module.css';

const CommentsAddComment = () => {
    return (
        <div className={classes.single_comments_addComment}>
            <form>
                <textarea name="" id="" ></textarea>
                <input type="submit" value="Сomment" />
            </form>
        </div>
    );
}

export default CommentsAddComment;