import React from 'react';
import classes from './CommentsContentHeader.module.css';

const CommentsContentHeader = () => {
    return (
        <div className={classes.comments_content_header}>
            <div className={classes.single_comments_foto}>
                <a href="#">
                    <img src="img/Leia.jpg" alt="" />
                </a>
            </div>
            <p>Princes Leia</p>
        </div>
    );
}

export default CommentsContentHeader;