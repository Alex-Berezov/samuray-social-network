import React from 'react';
import classes from './RightSidebar.module.css';
import FriendsOnline from "./friendsOnline/FriendsOnline";

const RightSidebar = (props) => {
    let friendsOnlineList = props.friendOnline.map((friend, index) => {
       return (
           <FriendsOnline
               key={ index }
               image={ friend.image }
               name={ friend.name }
               role={ friend.role }
           />
       );
    });

    return (
        <div className={classes.friends_online_list}>
            { friendsOnlineList }
        </div>
    );
};

export default RightSidebar;