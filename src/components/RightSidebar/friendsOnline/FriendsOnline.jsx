import {NavLink} from "react-router-dom";
import classes from "./FriendsOnline.module.css";
import React from "react";

const  FriendsOnline = (props) => {
    let path = "/friend/" + props.name;
    return (
        <NavLink to={path} className={classes.friends_online_list_item}>
            <div className={classes.friends_online_ava}>
                <img className={classes.rounde_circle} src={props.image} alt={props.name} />
            </div>
            <div className={classes.friends_online_info}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.role}>{props.role}</p>
            </div>
        </NavLink>
    );
}

export default FriendsOnline;