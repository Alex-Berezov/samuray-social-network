import {NavLink} from "react-router-dom";
import classes from "./DialogItem.module.css";
import React from "react";

const  DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <NavLink to={path} className={classes.dialog} activeClassName={classes.active}>
            {/*<div className={classes.friends_online_ava}>*/}
            {/*    <img className={classes.rounde_circle} src=".././img/Chewbacca.jpg" alt="Chewbacca" />*/}
            {/*</div>*/}
            <p>{props.name}</p>
        </NavLink>
    );
}

export default DialogItem;