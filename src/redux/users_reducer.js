const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1
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
                    if (user.userId === action.userId) {
                        return {...user, followed: true};
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( user => {
                    if (user.userId === action.userId) {
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
        default:
            return state;
    };
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export default UsersReducer;