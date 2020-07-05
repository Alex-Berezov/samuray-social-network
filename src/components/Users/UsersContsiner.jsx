import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users_reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch( followAC(userId) );
        },
        unfollow: (userId) => {
            dispatch( unfollowAC(userId) );
        },
        setCurrentPage: (pageNumber) => {
            dispatch( setCurrentPageAC(pageNumber) );
        },
        setUsers: (users) => {
            dispatch( setUsersAC(users) );
        },
        setTotalUsersCount: (totalCount) => {
            dispatch( setTotalUsersCountAC(totalCount) );
        }
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;