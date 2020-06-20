import React from 'react';
import classes from './ProfileActiveInfo.module.css';

const ProfileActiveInfo = () => {
    return (
        <div className={classes.right}>
            <div className={`${classes.posts} ${classes.right_item}`}>
                <div className={classes.right_item_title}>
                    <p>Posts</p>
                </div>
                <div className={classes.right_item_data}>
                    <p>335</p>
                </div>
            </div>
            <div className={`${classes.followers} ${classes.right_item}`}>
                <div className={classes.right_item_title}>
                    <p>Followers</p>
                </div>
                <div className={classes.right_item_data}>
                    <p>142</p>
                </div>
            </div>
            <div className={`${classes.following} ${classes.right_item}`}>
                <div className={classes.right_item_title}>
                    <p>Following</p>
                </div>
                <div className={classes.right_item_data}>
                    <p>768</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileActiveInfo;