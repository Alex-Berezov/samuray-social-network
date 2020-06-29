import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import rightSidebarReducer from "./rightSidebar_reducer";

let store = {
    _state: {
        profilePage: {
            tabsNav: [
                {tabName: 'timeline', navItemName: 'Timeline'},
                {tabName: 'about', navItemName: 'About'},
                {tabName: 'friends', navItemName: 'Friends'},
                {tabName: 'photos', navItemName: 'Photos'}
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
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Chewbacca'},
                {id: 2, name: 'Han Solo'},
                {id: 3, name: 'Princes Leia'}
            ],
            messages: [
                {message: 'Some messages #1'},
                {message: 'Some message #2'},
                {message: 'Some message #3'}
            ],
            newMessageText: ''
        },
        RightSidebarPart: {
            friendOnline: [
                {image: "img/Chewbacca.jpg", name: 'Chewbacca', role: 'Friend'},
                {image: "img/Solo.jpg", name: 'Han Solo', role: 'Friend'},
                {image: "img/Leia.jpg", name: 'Princes Leia', role: 'Friend'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State was changed');
    },

    getState() {
      return this._state;
    },
    subscribe( observer ) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.RightSidebarPart = rightSidebarReducer(this._state.RightSidebarPart, action);

        this._callSubscriber(this._state);
    }
};

export default store;
window.store = store;