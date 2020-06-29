const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.addNewMessage;
            return state;
        default:
            return state;
    }
};

export const addNewMessageActionCreator = () => {
    return {
        type: ADD_NEW_MESSAGE
    };
};

export const handleMessageChangeActionCreator = (addNewMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        addNewMessage: addNewMessage
    };
};

export default dialogsReducer;