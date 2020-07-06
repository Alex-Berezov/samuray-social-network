import Chewbacca from '../assets/img/Chewbacca.jpg';
import Solo from '../assets/img/Solo.jpg';
import Leia from '../assets/img/Leia.jpg';

const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

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
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE: {
            let newMessage = {
                message: state.newMessageText
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                messages: [...state.messages],
                newMessageText: action.addNewMessage
            };
        }
        default:
            return state;
    }
};

export const sendNewMessage = () => {
    return {
        type: ADD_NEW_MESSAGE
    };
};

export const updateNewMessageText = (addNewMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        addNewMessage: addNewMessage
    };
};

export default dialogsReducer;