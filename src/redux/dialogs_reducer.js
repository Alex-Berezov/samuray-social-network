import Chewbacca from '../assets/img/Chewbacca.jpg';
import Solo from '../assets/img/Solo.jpg';
import Leia from '../assets/img/Leia.jpg';

const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Chewbacca', img: Chewbacca},
        {id: 2, name: 'Han Solo', img: Solo},
        {id: 3, name: 'Princes Leia', img: Leia}
    ],
    messages: [
        {id: 0, message: 'Some messages #1'},
        {id: 1, message: 'Some message #2'},
        {id: 2, message: 'Some message #3'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let newMessage = {
                message: action.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }
        default:
            return state;
    }
};

export const sendNewMessage = (newMessageText) => ({ type: ADD_NEW_MESSAGE, newMessageText});

export default dialogsReducer;