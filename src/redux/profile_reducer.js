const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                singlePostUserName: 'Luke Skywalker',
                id: 3,
                singlePostText: state.newPostText,
                likesCount: 1,
                commentsCount: 2,
                shareCount: 3
            };
            state.SinglePostContent.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPost;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};

export const handlePostChangeActionCreator = (newPost) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPost: newPost
    };
};

export default profileReducer;