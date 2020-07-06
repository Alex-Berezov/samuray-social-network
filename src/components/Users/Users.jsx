import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/img/logo.jpg";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {
            props.users.map( user => <div className={classes.users_block} key={user.id}>
                    <div className={classes.single_user}>
                        <div className={classes.left_part}>
                            <div className={classes.user_photo}>
                                <img src={ user.photos.small != null ? user.photos.small : userPhoto }  />
                            </div>
                            <div className={classes.follow_btn}>
                                { user.followed
                                    ? <button onClick={ () => { props.unfollow(user.id) } }>Unfollow</button>
                                    : <button onClick={ () => { props.follow(user.id) } }>Follow</button> }
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
            )
        }

        <div className={classes.paginationBlock}>
            { pages.map( (p, index) => {
                return <div key={index} className={ props.currentPage === p
                    ? `${classes.selectedPage} ${classes.paginationBlockItem}`
                    : classes.paginationBlockItem }
                            onClick={ (e) => { props.onPageChanges(p); } }
                >
                    {p}
                </div>
            }) }
        </div>
    </div>
}

export default Users;