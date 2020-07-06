import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users_reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanges = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
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
        isFetching: state.usersPage.isFetching
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch( followAC(userId) );
//         },
//         unfollow: (userId) => {
//             dispatch( unfollowAC(userId) );
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch( setCurrentPageAC(pageNumber) );
//         },
//         setUsers: (users) => {
//             dispatch( setUsersAC(users) );
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch( setTotalUsersCountAC(totalCount) );
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     };
// };

export default connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        setUsers,
        setTotalUsersCount,
        toggleIsFetching
    })(UsersContainer);