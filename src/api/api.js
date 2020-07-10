import * as axios from "axios";
import {toggleFollowingProgress} from "../redux/users_reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2de50569-ab05-497f-94f6-8a7569d4fead"
    }
});

export const getAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getAuth() {
        return instance.get(`auth/me`)
    },
    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    }
}