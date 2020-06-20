import React from 'react';
import classes from './SinglePostHeader.module.css';

const SinglePostHeader = () => {
    return (
        <div className={classes.single_post_header}>
            <div className={classes.single_post_header_foto}>
                <a href="#">
                    <img src="img/LukeSkywalker.jpg" alt="LukeSkywalker" />
                </a>
            </div>
            <div className={classes.single_post_header_title}>
                <h6><a href="#">Luke Skywalker</a></h6>
                <p className={classes.post_date}>XX hour ago</p>
            </div>
        </div>
    );
}

export default SinglePostHeader;