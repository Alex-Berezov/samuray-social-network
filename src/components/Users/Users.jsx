import React from "react";
import Paginator from "../common/Pagination/Paginator";
import User from "./User";

let Users = ({
    users, totalUsersCount, pageSize,
    currentPage, onPageChanges, followingInProgress,
    unfollow, follow }) => {

    return <div>
        {
            users.map((user, index) => <User
                key={index}
                user={user}
                followingInProgress={followingInProgress}
                unfollow={unfollow}
                follow={follow}
            />)
        }

        <Paginator
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanges={onPageChanges}
        />
    </div>
}

export default Users;