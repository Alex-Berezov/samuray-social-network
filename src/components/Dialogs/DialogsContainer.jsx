import React from 'react';
import {sendNewMessage, updateNewMessageText} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogsPage: state.dialogsPage
    };
};
/*
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch( handleMessageChangeActionCreator(text) );
        },
        sendNewMessage: () => {
            dispatch( addNewMessageActionCreator() );
        }
    };
};
 */



export default connect(mapStateToProps,
    {
        updateNewMessageText,
        sendNewMessage
    })(Dialogs);