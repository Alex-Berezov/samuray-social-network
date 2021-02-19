import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/img/logo.jpg";
import {NavLink} from "react-router-dom";

let User = ({ user, followingInProgress, unfollow, follow }) => {

    return <div className={classes.users_block}>
                    <div className={classes.single_user}>
                        <div className={classes.left_part}>
                            <div className={classes.user_photo}>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={ user.photos.small != null ? user.photos.small : userPhoto } alt="Foto" />
                                </NavLink>
                            </div>
                            <div className={classes.follow_btn}>
                                { user.followed
                                    ? <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={ () => { unfollow(user.id);
                                    } }>Unfollow</button>
                                    : <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={ () => { follow(user.id);
                                    } }>Follow</button> }
                            </div>
                        </div>
                        <div className={classes.right_part}>
                            <div className={classes.user_info}>
                                <h3>{user.name}</h3>
                                <p>{user.status}</p>
                            </div>
                            <div className={classes.user_location}>
                                <p className={classes.user_city}>{"user.userLocation.city"}</p>
                                <p className={classes.user_country}>{"user.userLocation.country"}</p>
                            </div>
                        </div>
                    </div>
                </div>
}

export default User;