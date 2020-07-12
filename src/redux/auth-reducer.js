import {getAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (data) => ({type: SET_USER_DATA, data});

export const getAuthUserData = () => (dispatch) => {
    getAPI.getAuth()
        .then(response => {
            if (response.data.resultCode === 0) {
                let data = response.data.data;
                dispatch(setAuthUserData(data));
            }
        });
}

export default authReducer;