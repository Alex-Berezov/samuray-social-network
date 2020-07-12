import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanges = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users totalUsersCount={ this.props.totalUsersCount }
                pageSize={ this.props.pageSize }
                currentPage={ this.props.currentPage }
                onPageChanges={ this.onPageChanges }
                users={ this.props.users }
                unfollow={ this.props.unfollow }
                follow={ this.props.follow }
                toggleFollowingProgress={ this.props.toggleFollowingProgress }
                followingInProgress={ this.props.followingInProgress }
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    };
};

export default compose(
    connect(mapStateToProps,
        {
            follow,
            unfollow,
            setCurrentPage,
            toggleFollowingProgress,
            getUsers: getUsers
        }),
    withAuthRedirect
)(UsersContainer);