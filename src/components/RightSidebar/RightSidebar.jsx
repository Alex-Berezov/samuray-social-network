import React from 'react';
import classes from './RightSidebar.module.css';

const RightSidebar = () => {
    return (
        <div className={classes.friends_online_list}>
            <div className={classes.friends_online_list_item}>
                <a href="#">
                    <div className={classes.friends_online_ava}>
                        <img className={classes.rounde_circle} src=".././img/Chewbacca.jpg" alt="Chewbacca" />
                    </div>
                    <div className={classes.friends_online_info}>
                        <p className={classes.name}>Chewbacca</p>
                        <p className={classes.role}>Friend</p>
                    </div>
                </a>
            </div>
            <div className={classes.friends_online_list_item}>
                <a href="#">
                    <div className={classes.friends_online_ava}>
                        <img className={classes.rounde_circle} src="img/Solo.jpg" alt="Han Solo" />
                    </div>
                    <div className={classes.friends_online_info}>
                        <p className={classes.name}>Han Solo</p>
                        <p className={classes.role}>Friend</p>
                    </div>
                </a>
            </div>
            <div className={classes.friends_online_list_item}>
                <a href="#">
                    <div className={classes.friends_online_ava}>
                        <img className={classes.rounde_circle} src="img/Leia.jpg" alt="Princess Leia" />
                    </div>
                    <div className={classes.friends_online_info}>
                        <p className={classes.name}>Princes Leia</p>
                        <p className={classes.role}>Friend</p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default RightSidebar;