import {getAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,//Process getting data from server
    followingInProgress: []
    //Old setUsers with right data
    // props.setUsers([
    //     {
    //         userId: 0,
    //         photoUrl: 'https://im0-tub-ru.yandex.net/i?id=7e924d390e9a3d1a0609eec2e44d4247-sr&n=13',
    //         followed: false,
    //         userName: 'Luke Skywalker',
    //         userStatus: 'May the horse be with you',
    //         userLocation: {city: 'Erevan', country: 'Armenia'}
    //     },
    //     {
    //         userId: 1,
    //         photoUrl: 'https://www.journaldemickey.com/sites/default/files/dico/han-solo-star-wars.jpg',
    //         followed: true,
    //         userName: 'Han Solo',
    //         userStatus: 'Some status here',
    //         userLocation: {city: 'Moscow', country: 'Russia'}
    //     },
    //     {
    //         userId: 2,
    //         photoUrl: 'https://i.quotev.com/img/q/u/17/12/28/sxlgi2bsy4.jpg',
    //         followed: false,
    //         userName: 'Princes Leia',
    //         userStatus: 'I am hot!',
    //         userLocation: {city: 'Tel-Aviv', country: 'Israel'}
    //     }
    // ]);
};

const UsersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false};
                    }
                    return user;
                })
            };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count };
        case SET_USERS:
            return { ...state, users: action.users };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [ ...state.followingInProgress, action.userId ]
                    : state.followingInProgress.filter(id => id != action.userId)
            };
        default:
            return state;
    };
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        getAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));//Do not working
        getAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));//Do not working
            });
        }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));//Do not working
        getAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));//Do not working
            });
        }
}

export default UsersReducer;