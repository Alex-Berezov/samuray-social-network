const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

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
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                singlePostUserName: 'Luke Skywalker',
                id: 3,
                singlePostText: state.newPostText,
                likesCount: 1,
                commentsCount: 2,
                shareCount: 3
            };
            return {
                ...state,
                newPostText: '',
                SinglePostContent: [...state.SinglePostContent, newPost]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newPost
            };
        }
        default:
            return state;
    }
};

export const addPost = () => {
    return {
        type: ADD_POST
    };
};

export const onHandlePostChange = (newPost) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPost: newPost
    };
};

export default profileReducer;