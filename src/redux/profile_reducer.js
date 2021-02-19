import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';
const SET_PHOTO_SUCCESS = 'SET_PHOTO_SUCCESS';

let initialState = {
    tabsNav: [
        {id: 0, tabName: 'timeline', navItemName: 'Timeline'},
        {id: 1, tabName: 'about', navItemName: 'About'},
        {id: 2, tabName: 'friends', navItemName: 'Friends'},
        {id: 3, tabName: 'photos', navItemName: 'Photos'}
    ],
    SinglePostContent: [
        {
            singlePostUserName: 'Luke Skywalker',
            id: 1,
            singlePostText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n' +
                'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, \n' +
                'when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n' +
                'It has survived not only five centuries.',
            likesCount: 25,
            commentsCount: 15,
            shareCount: 6
        },
        {
            singlePostUserName: 'Luke Skywalker',
            id: 2,
            singlePostText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n' +
                'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
            likesCount: 3,
            commentsCount: 2,
            shareCount: 1
        }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                singlePostUserName: 'Luke Skywalker',
                id: 3,
                singlePostText: action.newPostText,
                likesCount: 1,
                commentsCount: 2,
                shareCount: 3
            };
            return {
                ...state,
                SinglePostContent: [...state.SinglePostContent, newPost]
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case SET_STATUS: {
            return { ...state, status: action.status };
        }
        case UPDATE_STATUS: {
            return { ...state, status: action.status };
        }
        case SET_PHOTO_SUCCESS: {
            return { ...state, profile: {...state.profile, photos: action.photos} };
        }
        default:
            return state;
    }
};

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});

export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photo) => ({type: SET_PHOTO_SUCCESS, photo});

export const getUsersProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUsersProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
}

export default profileReducer;