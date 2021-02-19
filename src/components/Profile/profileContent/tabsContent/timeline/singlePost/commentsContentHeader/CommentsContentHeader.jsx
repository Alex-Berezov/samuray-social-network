import React from 'react';
import classes from './CommentsContentHeader.module.css';
import Leia from '../../../../../../../assets/img/Leia.jpg'

const CommentsContentHeader = () => {
    return (
        <div className={classes.comments_content_header}>
            <div className={classes.single_comments_foto}>
                <img src={Leia} alt="Princes Leia" />
            </div>
            <p>Princes Leia</p>
        </div>
    );
}

export default CommentsContentHeader;